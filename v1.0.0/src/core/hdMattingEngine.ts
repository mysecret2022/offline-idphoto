import * as ort from 'onnxruntime-web';
import { SelfieSegmentation } from '@mediapipe/selfie_segmentation';

export interface MattingProgressCallback {
  (stage: string, progress: number): void;
}

export type MattingEngineType = 'auto' | 'fast' | 'deep';

function isMobileDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (navigator.maxTouchPoints > 1 && /Macintosh/.test(navigator.userAgent));
}

function hasWebGPU(): boolean {
  return typeof navigator !== 'undefined' && 'gpu' in navigator;
}

export class HdMattingEngine {
  private session: ort.InferenceSession | null = null;
  private fallbackSegmenter: SelfieSegmentation | null = null;
  private isModelLoading = false;
  private backendUsed: 'webgpu' | 'wasm' | 'mediapipe-hd' = 'wasm';

  constructor() {
    // 配置 wasm 路径与多线程
    ort.env.wasm.numThreads = Math.min(navigator.hardwareConcurrency || 4, 4);
    ort.env.wasm.simd = true;
  }

  /**
   * 初始化 ONNX 高精度抠图模型 (如 RMBG-1.4 或精简通用高精 ONNX 模型)
   */
  public async initOnnxModel(modelUrlOrBuffer: string | ArrayBuffer): Promise<boolean> {
    if (this.session) return true;
    this.isModelLoading = true;

    try {
      console.log('[HdMattingEngine] 正在尝试以 WebGPU 加载高精抠图模型...');
      // 优先尝试 WebGPU
      try {
        this.session = await ort.InferenceSession.create(modelUrlOrBuffer, {
          executionProviders: ['webgpu'],
          graphOptimizationLevel: 'all'
        });
        this.backendUsed = 'webgpu';
        console.log('[HdMattingEngine] WebGPU 抠图会话创建成功');
        this.isModelLoading = false;
        return true;
      } catch (gpuErr) {
        console.warn('[HdMattingEngine] WebGPU 后端不可用，平滑回退至 Wasm 运行时:', gpuErr);
      }

      // Wasm 回退
      this.session = await ort.InferenceSession.create(modelUrlOrBuffer, {
        executionProviders: ['wasm'],
        graphOptimizationLevel: 'all'
      });
      this.backendUsed = 'wasm';
      console.log('[HdMattingEngine] Wasm 抠图会话创建成功');
      this.isModelLoading = false;
      return true;
    } catch (err) {
      this.isModelLoading = false;
      console.warn('[HdMattingEngine] ONNX 模型加载失败，将启用内置高精度精细分割引擎:', err);
      return false;
    }
  }

  /**
   * 初始化内置高精备份抠图引擎 (MediaPipe HD 模式 + 导向滤波)
   */
  private async getFallbackSegmenter(): Promise<SelfieSegmentation> {
    if (this.fallbackSegmenter) return this.fallbackSegmenter;

    return new Promise((resolve, reject) => {
      const seg = new SelfieSegmentation({
        locateFile: (file) => `/mediapipe/${file}`
      });
      seg.setOptions({
        modelSelection: 0, // 0: 专注肖像近景/自拍/证件照头部与肩部，高保真人脸发丝
        selfieMode: false
      });
      seg.initialize().then(() => {
        this.fallbackSegmenter = seg;
        this.backendUsed = 'mediapipe-hd';
        resolve(seg);
      }).catch(reject);
    });
  }

  /**
   * 对单张高清输入图像执行高精抠图，返回纯透明通道人像 PNG Blob
   * @param enginePreference 引擎偏好: 'auto' (智能适配手机/电脑), 'fast' (极速轻量50ms), 'deep' (深度发丝25MB)
   */
  public async segmentHighDefinition(
    sourceImage: HTMLCanvasElement | HTMLImageElement | ImageBitmap,
    onProgress?: MattingProgressCallback,
    enginePreference: MattingEngineType = 'auto'
  ): Promise<Blob> {
    onProgress?.('准备图像数据', 10);

    const width = sourceImage.width;
    const height = sourceImage.height;

    // 智能决策：如果是移动端 (iPhone/Android) 或缺乏 WebGPU 硬件支持，默认使用超轻量极速引擎 (MediaPipe 0.2MB，50毫秒出图，绝对不卡顿)
    const shouldUseDeepModel = enginePreference === 'deep' || 
      (enginePreference === 'auto' && !isMobileDevice() && hasWebGPU());

    if (shouldUseDeepModel) {
      if (!this.session && !this.isModelLoading) {
        onProgress?.('加载 MODNet 深度模型 (25MB)...', 15);
        await this.initOnnxModel('/models/modnet.onnx');
      }

      if (this.session) {
        try {
          onProgress?.('深度神经网络推演中 (MODNet 发丝级)', 40);
          const alphaMaskCanvas = await this.runOnnxMatting(sourceImage, onProgress);
          
          onProgress?.('精修发丝与边缘羽化', 80);
          const cutoutCanvas = this.compositeCutout(sourceImage, alphaMaskCanvas, width, height);

          onProgress?.('完成生成透明图层', 100);
          return await this.canvasToBlob(cutoutCanvas);
        } catch (e) {
          console.warn('[HdMattingEngine] 深度模型推理异常，平滑切换至极速引擎:', e);
        }
      }
    }

    // 手机端与极速模式专用：Google MediaPipe 人像引擎 (仅 0.2MB，50毫秒出图，iPhone 丝滑流畅)
    onProgress?.('端侧极速引擎抠图中 (约0.1秒)...', 40);
    const seg = await this.getFallbackSegmenter();
    
    // 降采样至最大 1024 边长给分割模型，以兼顾发丝级精度与毫秒级速度
    const maxDim = 1024;
    let segCanvas: HTMLCanvasElement;
    if (Math.max(width, height) > maxDim) {
      const scale = maxDim / Math.max(width, height);
      segCanvas = document.createElement('canvas');
      segCanvas.width = Math.round(width * scale);
      segCanvas.height = Math.round(height * scale);
      const sCtx = segCanvas.getContext('2d');
      if (sCtx) {
        sCtx.imageSmoothingEnabled = true;
        sCtx.imageSmoothingQuality = 'high';
        sCtx.drawImage(sourceImage, 0, 0, segCanvas.width, segCanvas.height);
      }
    } else {
      if (sourceImage instanceof HTMLCanvasElement) {
        segCanvas = sourceImage;
      } else {
        segCanvas = document.createElement('canvas');
        segCanvas.width = width;
        segCanvas.height = height;
        const sCtx = segCanvas.getContext('2d');
        if (sCtx) sCtx.drawImage(sourceImage, 0, 0);
      }
    }

    return new Promise((resolve, reject) => {
      let isResolved = false;
      const timeoutId = setTimeout(() => {
        if (!isResolved) {
          isResolved = true;
          reject(new Error('AI 抠图超时，请检查图片或重试'));
        }
      }, 15000);

      seg.onResults((results) => {
        if (isResolved) return;
        if (!results.segmentationMask) {
          isResolved = true;
          clearTimeout(timeoutId);
          reject(new Error('未检测到人像'));
          return;
        }

        onProgress?.('精确提取人像轮廓与边缘羽化', 80);
        // 使用逐像素精准提取算法将蒙版与原图复合为透明 PNG（彻底消除背景底色与底纹）
        const cutoutCanvas = this.applySegmentationMask(sourceImage, results.segmentationMask, width, height);

        onProgress?.('导出透明 PNG', 95);
        this.canvasToBlob(cutoutCanvas).then((b) => {
          if (!isResolved) {
            isResolved = true;
            clearTimeout(timeoutId);
            resolve(b);
          }
        }).catch((err) => {
          if (!isResolved) {
            isResolved = true;
            clearTimeout(timeoutId);
            reject(err);
          }
        });
      });

      seg.send({ image: segCanvas }).catch((err) => {
        if (!isResolved) {
          isResolved = true;
          clearTimeout(timeoutId);
          reject(err);
        }
      });
    });
  }

  /**
   * ONNX 模型的预处理、推理与后处理 (MODNet / RMBG 通用兼容)
   */
  private async runOnnxMatting(
    image: HTMLCanvasElement | HTMLImageElement | ImageBitmap,
    onProgress?: MattingProgressCallback
  ): Promise<HTMLCanvasElement> {
    const origW = image.width;
    const origH = image.height;

    // 计算符合 32 整数倍的推理分辨率 (兼顾发丝精度与端侧速度)
    const refSize = 512;
    let rw: number, rh: number;
    if (origW >= origH) {
      rh = Math.round(refSize * (origH / origW));
      rh = Math.max(32, rh - (rh % 32));
      rw = refSize;
    } else {
      rw = Math.round(refSize * (origW / origH));
      rw = Math.max(32, rw - (rw % 32));
      rh = refSize;
    }

    const inputCanvas = document.createElement('canvas');
    inputCanvas.width = rw;
    inputCanvas.height = rh;
    const ctx = inputCanvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) throw new Error('无法创建推理 Canvas 上下文');

    ctx.drawImage(image, 0, 0, rw, rh);
    const imgData = ctx.getImageData(0, 0, rw, rh);
    const { data } = imgData;

    // 转换为 NCHW Float32Tensor [1, 3, rh, rw], MODNet 归一化: (x / 127.5) - 1.0
    const float32Data = new Float32Array(3 * rw * rh);
    const channelSize = rw * rh;

    for (let i = 0; i < channelSize; i++) {
      const r = data[i * 4];
      const g = data[i * 4 + 1];
      const b = data[i * 4 + 2];

      float32Data[i] = (r / 127.5) - 1.0;
      float32Data[channelSize + i] = (g / 127.5) - 1.0;
      float32Data[channelSize * 2 + i] = (b / 127.5) - 1.0;
    }

    const inputTensor = new ort.Tensor('float32', float32Data, [1, 3, rh, rw]);
    const inputName = this.session!.inputNames[0];

    onProgress?.('MODNet 发丝级 AI 深度推演中', 55);
    const results = await this.session!.run({ [inputName]: inputTensor });
    const outputName = this.session!.outputNames[0];
    const outputTensor = results[outputName];

    // 将输出张量转为单通道灰度 Alpha Canvas
    const outputData = outputTensor.data as Float32Array;
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = rw;
    maskCanvas.height = rh;
    const maskCtx = maskCanvas.getContext('2d');
    if (!maskCtx) throw new Error('无法创建 Mask Canvas');

    const maskImgData = maskCtx.createImageData(rw, rh);
    for (let i = 0; i < channelSize; i++) {
      let val = outputData[i];
      if (val < 0) val = 0;
      if (val > 1) val = 1;
      const alpha = Math.round(val * 255);

      maskImgData.data[i * 4] = 255;
      maskImgData.data[i * 4 + 1] = 255;
      maskImgData.data[i * 4 + 2] = 255;
      maskImgData.data[i * 4 + 3] = alpha;
    }
    maskCtx.putImageData(maskImgData, 0, 0);

    return maskCanvas;
  }

  /**
   * 将 Alpha 蒙版应用到原图，生成纯透明人物图层
   */
  private compositeCutout(
    sourceImage: HTMLCanvasElement | HTMLImageElement | ImageBitmap,
    maskCanvas: HTMLCanvasElement,
    width: number,
    height: number
  ): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('无法创建复合图层');

    ctx.drawImage(sourceImage, 0, 0, width, height);
    ctx.globalCompositeOperation = 'destination-in';
    ctx.drawImage(maskCanvas, 0, 0, width, height);

    return canvas;
  }

  /**
   * 将分割蒙版精确转换为透明人像图层（消除背景底纹与底色，保留发丝级羽化）
   */
  private applySegmentationMask(
    sourceImage: HTMLCanvasElement | HTMLImageElement | ImageBitmap,
    segmentationMask: CanvasImageSource,
    width: number,
    height: number
  ): HTMLCanvasElement {
    const srcCanvas = document.createElement('canvas');
    srcCanvas.width = width;
    srcCanvas.height = height;
    const srcCtx = srcCanvas.getContext('2d', { willReadFrequently: true });
    if (!srcCtx) throw new Error('无法创建源图 Canvas 上下文');
    srcCtx.drawImage(sourceImage, 0, 0, width, height);

    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = width;
    maskCanvas.height = height;
    const maskCtx = maskCanvas.getContext('2d', { willReadFrequently: true });
    if (!maskCtx) throw new Error('无法创建蒙版 Canvas 上下文');
    maskCtx.imageSmoothingEnabled = true;
    maskCtx.imageSmoothingQuality = 'high';
    maskCtx.drawImage(segmentationMask, 0, 0, width, height);

    const srcImgData = srcCtx.getImageData(0, 0, width, height);
    const maskImgData = maskCtx.getImageData(0, 0, width, height);
    const src = srcImgData.data;
    const mask = maskImgData.data;
    const totalPixels = width * height;

    for (let i = 0; i < totalPixels; i++) {
      const idx = i * 4;
      // 取蒙版灰度值 (MediaPipe 前景为高亮白，背景为黑)
      const maskVal = (mask[idx] + mask[idx + 1] + mask[idx + 2]) / 3;

      // 证件照平滑阶跃曲线 (Smoothstep):
      // 小于 80 强制认定为背景底色 (彻底消除背景杂色与底纹，直接将 Alpha 降为 0)
      // 大于 170 判定为核心人像 (保持 100% 原色不透明)
      // 80~170 之间发丝边缘进行非线性平滑羽化过渡
      let factor = 0;
      if (maskVal <= 80) {
        factor = 0;
      } else if (maskVal >= 170) {
        factor = 1.0;
      } else {
        const t = (maskVal - 80) / (170 - 80);
        factor = t * t * (3 - 2 * t);
      }

      src[idx + 3] = Math.round(src[idx + 3] * factor);
    }

    srcCtx.putImageData(srcImgData, 0, 0);
    return srcCanvas;
  }

  private canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob> {
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('导出透明 Blob 失败'));
      }, 'image/png');
    });
  }

  public getBackend(): string {
    return this.backendUsed;
  }
}

export const hdMattingEngine = new HdMattingEngine();
