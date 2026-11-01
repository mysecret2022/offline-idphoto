import { injectDpiToJpegBlob } from './dpiWriter';

export interface CompressOptions {
  targetKb: number;          // 目标体积（KB），如 50KB
  toleranceKb?: number;       // 允许容差，默认 3KB
  maxIterations?: number;     // 二分迭代最大次数，默认 6 次
  minQuality?: number;        // 质量下限，默认 0.1
  maxQuality?: number;        // 质量上限，默认 0.98
  autoScaleIfExceeded?: boolean; // 若降至最低质量依然超限，是否微调降采样尺寸，默认 true
  dpi?: number;               // 注入 DPI，默认 300
}

export interface CompressResult {
  blob: Blob;
  sizeKb: number;
  quality: number;
  iterations: number;
  width: number;
  height: number;
}

/**
 * 将 Canvas 转为 Blob 的 Promise 封装
 */
function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Canvas 转 Blob 失败'));
      },
      type,
      quality
    );
  });
}

/**
 * 二分法精准体积压缩器
 */
export async function compressCanvasToTargetKb(
  sourceCanvas: HTMLCanvasElement,
  options: CompressOptions
): Promise<CompressResult> {
  const {
    targetKb,
    toleranceKb = 3,
    maxIterations = 6,
    minQuality = 0.1,
    maxQuality = 0.98,
    autoScaleIfExceeded = true,
    dpi = 300
  } = options;

  let currentCanvas = sourceCanvas;
  let width = sourceCanvas.width;
  let height = sourceCanvas.height;

  let low = minQuality;
  let high = maxQuality;
  let bestBlob: Blob | null = null;
  let bestQuality = maxQuality;
  let bestSizeKb = Infinity;
  let iterations = 0;

  // 1. 初次尝试以最高质量导出并注入 DPI
  const initialBlob = await canvasToBlob(currentCanvas, 'image/jpeg', high);
  const initialDpiBlob = await injectDpiToJpegBlob(initialBlob, dpi);
  const initialSizeKb = initialDpiBlob.size / 1024;

  // 若初始即小于等于目标，直接返回最高画质
  if (initialSizeKb <= targetKb) {
    return {
      blob: initialDpiBlob,
      sizeKb: Math.round(initialSizeKb * 10) / 10,
      quality: high,
      iterations: 1,
      width,
      height
    };
  }

  // 2. 二分逼近搜索最优质量参数
  for (let i = 0; i < maxIterations; i++) {
    iterations++;
    const midQuality = (low + high) / 2;
    const blob = await canvasToBlob(currentCanvas, 'image/jpeg', midQuality);
    const dpiBlob = await injectDpiToJpegBlob(blob, dpi);
    const sizeKb = dpiBlob.size / 1024;

    // 记录小于目标且最接近目标的候选
    if (sizeKb <= targetKb) {
      bestBlob = dpiBlob;
      bestQuality = midQuality;
      bestSizeKb = sizeKb;

      // 若已在容差范围内，提前收敛退出
      if (targetKb - sizeKb <= toleranceKb) {
        break;
      }
      // 尝试往更高画质探索
      low = midQuality;
    } else {
      // 依然超标，降低质量
      high = midQuality;
    }
  }

  // 3. 若二分结束后仍未找到 <= targetKb 的 blob（即 minQuality 依然超限）
  if (!bestBlob && autoScaleIfExceeded) {
    // 启动智能微缩放降采样重试（例如缩放 90%、80%）
    let scale = 0.9;
    for (let attempt = 0; attempt < 3; attempt++) {
      const scaledCanvas = document.createElement('canvas');
      scaledCanvas.width = Math.round(width * scale);
      scaledCanvas.height = Math.round(height * scale);
      const ctx = scaledCanvas.getContext('2d');
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(sourceCanvas, 0, 0, scaledCanvas.width, scaledCanvas.height);
        
        const blob = await canvasToBlob(scaledCanvas, 'image/jpeg', 0.5);
        const dpiBlob = await injectDpiToJpegBlob(blob, dpi);
        const sizeKb = dpiBlob.size / 1024;
        if (sizeKb <= targetKb) {
          return {
            blob: dpiBlob,
            sizeKb: Math.round(sizeKb * 10) / 10,
            quality: 0.5,
            iterations: iterations + attempt + 1,
            width: scaledCanvas.width,
            height: scaledCanvas.height
          };
        }
      }
      scale -= 0.15;
    }
  }

  // 兜底返回最接近的或最低质量 blob
  if (!bestBlob) {
    const fallbackBlob = await canvasToBlob(currentCanvas, 'image/jpeg', minQuality);
    bestBlob = await injectDpiToJpegBlob(fallbackBlob, dpi);
    bestSizeKb = bestBlob.size / 1024;
    bestQuality = minQuality;
  }

  return {
    blob: bestBlob,
    sizeKb: Math.round(bestSizeKb * 10) / 10,
    quality: Math.round(bestQuality * 100) / 100,
    iterations,
    width,
    height
  };
}
