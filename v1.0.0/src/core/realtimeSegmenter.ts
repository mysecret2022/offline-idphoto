import { SelfieSegmentation, Results } from '@mediapipe/selfie_segmentation';
import { BgColorOption } from '../types';

export class RealtimeSegmenter {
  private segmenter: SelfieSegmentation | null = null;
  private isLoaded = false;
  private isProcessing = false;
  private lastProcessTime = 0;
  private targetFps = 15;
  private frameInterval = 1000 / 15; // 约 66.6ms 节流

  // 内部离线 256x256 降采样 Canvas
  private downsampleCanvas: HTMLCanvasElement;
  private downsampleCtx: CanvasRenderingContext2D | null;

  private onResultCallback?: (mask: ImageBitmap | HTMLCanvasElement, rawImage: HTMLVideoElement | HTMLCanvasElement) => void;

  constructor() {
    this.downsampleCanvas = document.createElement('canvas');
    this.downsampleCanvas.width = 256;
    this.downsampleCanvas.height = 256;
    this.downsampleCtx = this.downsampleCanvas.getContext('2d', { willReadFrequently: true });
  }

  public async init(localAssetsPath: string = '/mediapipe/'): Promise<void> {
    if (this.isLoaded) return;

    try {
      this.segmenter = new SelfieSegmentation({
        locateFile: (file: string) => {
          // 本地无缝静态托管，绝对离线且无跨域限制
          return `/mediapipe/${file}`;
        }
      });

      this.segmenter.setOptions({
        modelSelection: 0, // 0: 256x256 轻量极速模型，适合实时预览
        selfieMode: false
      });

      this.segmenter.onResults((results: Results) => {
        this.isProcessing = false;
        if (this.onResultCallback && results.segmentationMask) {
          this.onResultCallback(results.segmentationMask as any, results.image as any);
        }
      });

      // 预热执行一次空初始化
      await this.segmenter.initialize();
      this.isLoaded = true;
      console.log('[RealtimeSegmenter] MediaPipe SelfieSegmentation 初始化成功');
    } catch (err) {
      console.warn('[RealtimeSegmenter] MediaPipe 初始化降级提示:', err);
      // 允许非阻塞降级
    }
  }

  public setOnResult(callback: (mask: ImageBitmap | HTMLCanvasElement, rawImage: HTMLVideoElement | HTMLCanvasElement) => void) {
    this.onResultCallback = callback;
  }

  /**
   * 提交视频帧进行节流分割计算
   */
  public async sendFrame(video: HTMLVideoElement): Promise<boolean> {
    if (!this.segmenter || !this.isLoaded) return false;

    const now = performance.now();
    if (now - this.lastProcessTime < this.frameInterval) {
      // 节流跳过，未达 15fps 时间窗
      return false;
    }

    if (this.isProcessing) {
      // 上一帧尚未完成，跳过以避免堆积卡顿
      return false;
    }

    this.lastProcessTime = now;
    this.isProcessing = true;

    try {
      // 降采样至 256x256 显著降低手机 GPU/CPU 功耗
      if (this.downsampleCtx) {
        this.downsampleCtx.drawImage(video, 0, 0, 256, 256);
        await this.segmenter.send({ image: this.downsampleCanvas });
        return true;
      }
    } catch (err) {
      this.isProcessing = false;
      console.error('[RealtimeSegmenter] sendFrame 错误:', err);
    }

    return false;
  }

  /**
   * 将分割 Mask 与所选底色实时复合渲染到目标 Canvas
   */
  public renderComposite(
    targetCanvas: HTMLCanvasElement,
    rawSource: HTMLVideoElement | HTMLImageElement | HTMLCanvasElement,
    mask: ImageBitmap | HTMLCanvasElement,
    bg: BgColorOption,
    mirror: boolean = false
  ) {
    const ctx = targetCanvas.getContext('2d');
    if (!ctx) return;

    const w = targetCanvas.width;
    const h = targetCanvas.height;

    ctx.save();
    if (mirror) {
      ctx.translate(w, 0);
      ctx.scale(-1, 1);
    }

    // 1. 绘制指定证件照底色
    ctx.clearRect(0, 0, w, h);
    if (bg.isGradient && bg.gradientStops) {
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, bg.gradientStops[0]);
      grad.addColorStop(1, bg.gradientStops[1]);
      ctx.fillStyle = grad;
    } else {
      ctx.fillStyle = bg.value || '#FFFFFF';
    }
    ctx.fillRect(0, 0, w, h);

    // 2. 离屏绘制扣出的人像 (使用 source-in 或 destination-out 蒙版复合)
    ctx.save();
    // 采用 mask 遮罩混合
    // 将人物与蒙版合成：
    // 创建临时图层
    ctx.globalCompositeOperation = 'source-over';
    
    // 使用临时 canvas 合成人物
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = w;
    tempCanvas.height = h;
    const tCtx = tempCanvas.getContext('2d');
    if (tCtx) {
      // 绘制原始人物
      tCtx.drawImage(rawSource, 0, 0, w, h);
      // 利用 destination-in 保留 mask 对应的人形区域
      tCtx.globalCompositeOperation = 'destination-in';
      tCtx.drawImage(mask, 0, 0, w, h);
      
      // 贴回目标背景之上
      ctx.drawImage(tempCanvas, 0, 0, w, h);
    }

    ctx.restore();
    ctx.restore();
  }

  public destroy() {
    if (this.segmenter) {
      this.segmenter.close();
      this.segmenter = null;
    }
    this.isLoaded = false;
  }
}
