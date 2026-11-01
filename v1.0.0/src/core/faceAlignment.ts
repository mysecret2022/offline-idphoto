import { PhotoSpec } from '../types';

export interface AlignmentResult {
  scale: number;
  x: number;
  y: number;
  headTopY: number;
  chinY: number;
  headCenterX: number;
  headHeight: number;
  success: boolean;
}

/**
 * AI 智能人像轮廓与五官黄金比例自动对齐算法
 * 依据中国国家标准 (GB/T 37048、护照、国考与驾照标准)：
 * - 头顶到相片上边缘距离占画面高约 8% ~ 10%
 * - 头部高度（头顶至下巴）占画面高约 55% ~ 62%
 * - 人脸中轴线严格居中 (50%)
 */
export function computeGoldenRatioAlignment(
  sourceImageOrCanvas: HTMLImageElement | HTMLCanvasElement,
  cutoutCanvasOrBlob: HTMLCanvasElement | Blob,
  spec: PhotoSpec
): Promise<AlignmentResult> {
  return new Promise((resolve) => {
    // 默认兜底对齐
    const imgW = (sourceImageOrCanvas as any).naturalWidth || sourceImageOrCanvas.width;
    const imgH = (sourceImageOrCanvas as any).naturalHeight || sourceImageOrCanvas.height;
    const fallbackScale = Math.max(spec.widthPx / imgW, spec.heightPx / imgH) * 1.05;
    const fallbackResult: AlignmentResult = {
      scale: fallbackScale,
      x: (spec.widthPx - imgW * fallbackScale) / 2,
      y: (spec.heightPx - imgH * fallbackScale) * 0.42,
      headTopY: 0,
      chinY: imgH * 0.6,
      headCenterX: imgW / 2,
      headHeight: imgH * 0.6,
      success: false
    };

    try {
      // 提取像素 Alpha 蒙版进行轮廓分析
      let scanCanvas: HTMLCanvasElement;
      if (cutoutCanvasOrBlob instanceof HTMLCanvasElement) {
        scanCanvas = cutoutCanvasOrBlob;
      } else {
        scanCanvas = document.createElement('canvas');
        scanCanvas.width = imgW;
        scanCanvas.height = imgH;
        const ctx = scanCanvas.getContext('2d');
        if (!ctx) {
          resolve(fallbackResult);
          return;
        }
      }

      // 降采样到 200px 宽度以毫秒级速度扫描分析
      const scanW = 200;
      const scanH = Math.round((imgH / imgW) * scanW);
      const smallCanvas = document.createElement('canvas');
      smallCanvas.width = scanW;
      smallCanvas.height = scanH;
      const sCtx = smallCanvas.getContext('2d', { willReadFrequently: true });
      if (!sCtx) {
        resolve(fallbackResult);
        return;
      }

      sCtx.drawImage(sourceImageOrCanvas, 0, 0, scanW, scanH);
      const imgData = sCtx.getImageData(0, 0, scanW, scanH);
      const data = imgData.data;

      // 1. 扫描头顶位置 (Head Top Y)
      let topY = -1;
      let topX = scanW / 2;
      for (let y = 0; y < scanH; y++) {
        let rowCount = 0;
        let sumX = 0;
        for (let x = 0; x < scanW; x++) {
          const alpha = data[(y * scanW + x) * 4 + 3];
          if (alpha > 60) {
            rowCount++;
            sumX += x;
          }
        }
        // 当某一行连续出现人像像素超过一定宽度，确认为发际线/头顶
        if (rowCount > 8) {
          topY = y;
          topX = sumX / rowCount;
          break;
        }
      }

      if (topY === -1 || topY >= scanH * 0.8) {
        resolve(fallbackResult);
        return;
      }

      // 2. 纵向分析人体轮廓宽度曲线以寻找下巴和颈部基准
      // 从头顶往下，宽度会先扩大（头部脸颊），在颈部略有收紧或转折，随后在双肩大幅展开
      const widths: { y: number; width: number; centerX: number }[] = [];
      for (let y = topY; y < scanH; y++) {
        let minX = scanW;
        let maxX = -1;
        for (let x = 0; x < scanW; x++) {
          const alpha = data[(y * scanW + x) * 4 + 3];
          if (alpha > 60) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
          }
        }
        if (maxX >= minX) {
          widths.push({
            y,
            width: maxX - minX,
            centerX: (minX + maxX) / 2
          });
        }
      }

      if (widths.length < 20) {
        resolve(fallbackResult);
        return;
      }

      // 寻找双肩展开位置：宽度突增或达到最大宽度的一半以上
      let headMaxWidth = 0;
      for (let i = 0; i < Math.min(widths.length, Math.round(scanH * 0.4)); i++) {
        if (widths[i].width > headMaxWidth) {
          headMaxWidth = widths[i].width;
        }
      }

      // 下巴通常位于双肩突增之前（约在宽度 > 1.35 * headMaxWidth 之上）
      let chinIdx = Math.round(widths.length * 0.45);
      for (let i = 10; i < widths.length; i++) {
        if (widths[i].width > headMaxWidth * 1.35) {
          chinIdx = Math.max(i - 4, 10);
          break;
        }
      }

      const chinY_small = widths[chinIdx]?.y || (topY + (scanH - topY) * 0.4);
      const headCenter_small = widths[Math.round(chinIdx / 2)]?.centerX || topX;

      // 换算回原始图片分辨率尺寸
      const scaleToOrig = imgW / scanW;
      const origTopY = topY * scaleToOrig;
      const origChinY = chinY_small * scaleToOrig;
      const origHeadCenterX = headCenter_small * scaleToOrig;
      const origHeadHeight = Math.max(origChinY - origTopY, imgH * 0.25);

      // 3. 根据国家证件照标准计算黄金对齐参数
      // 头顶留白：目标占总高度约 8.5%
      const targetTopMarginPx = spec.heightPx * 0.085;
      // 头部大小（头顶至下巴）：目标占总高度约 58%
      const targetHeadHeightPx = spec.heightPx * 0.58;
      // 水平中心：50%
      const targetCenterX = spec.widthPx * 0.5;

      // 计算最终变换矩阵
      const optimalScale = targetHeadHeightPx / origHeadHeight;
      const optimalX = targetCenterX - (origHeadCenterX * optimalScale);
      const optimalY = targetTopMarginPx - (origTopY * optimalScale);

      resolve({
        scale: Math.round(optimalScale * 1000) / 1000,
        x: Math.round(optimalX),
        y: Math.round(optimalY),
        headTopY: origTopY,
        chinY: origChinY,
        headCenterX: origHeadCenterX,
        headHeight: origHeadHeight,
        success: true
      });
    } catch (e) {
      console.warn('[FaceAlignment] 自动对齐异常，采用默认对齐:', e);
      resolve(fallbackResult);
    }
  });
}
