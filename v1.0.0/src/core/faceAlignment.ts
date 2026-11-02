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
 * - 头顶到相片上边缘距离占画面高约 8.5%
 * - 头部高度（头顶至下巴）占画面高约 58%
 * - 人脸中轴线严格居中 (50%)
 */
export async function computeGoldenRatioAlignment(
  sourceImageOrCanvas: HTMLImageElement | HTMLCanvasElement,
  cutoutCanvasOrBlob: HTMLCanvasElement | HTMLImageElement | ImageBitmap | Blob,
  spec: PhotoSpec
): Promise<AlignmentResult> {
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
    // 1. 获取抠图人像的绘制源
    let cutoutDrawable: CanvasImageSource;
    if (cutoutCanvasOrBlob instanceof Blob) {
      try {
        cutoutDrawable = await createImageBitmap(cutoutCanvasOrBlob);
      } catch {
        cutoutDrawable = await new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = URL.createObjectURL(cutoutCanvasOrBlob);
        });
      }
    } else {
      cutoutDrawable = cutoutCanvasOrBlob;
    }

    // 2. 降采样到 200px 宽度以毫秒级速度扫描分析
    const scanW = 200;
    const scanH = Math.max(10, Math.round((imgH / imgW) * scanW));
    const smallCanvas = document.createElement('canvas');
    smallCanvas.width = scanW;
    smallCanvas.height = scanH;
    const sCtx = smallCanvas.getContext('2d', { willReadFrequently: true });
    if (!sCtx) return fallbackResult;

    // 绘制透明人像
    sCtx.drawImage(cutoutDrawable, 0, 0, scanW, scanH);
    const imgData = sCtx.getImageData(0, 0, scanW, scanH);
    const data = imgData.data;

    // 3. 扫描头顶位置 (Head Top Y)
    let topY = -1;
    let topX = scanW / 2;
    for (let y = 0; y < scanH; y++) {
      let rowCount = 0;
      let sumX = 0;
      for (let x = 0; x < scanW; x++) {
        const alpha = data[(y * scanW + x) * 4 + 3];
        if (alpha > 45) {
          rowCount++;
          sumX += x;
        }
      }
      // 连续出现至少 4 个像素，确认进入人体/发丝轮廓
      if (rowCount >= 4) {
        topY = y;
        topX = sumX / rowCount;
        break;
      }
    }

    if (topY === -1 || topY >= scanH * 0.8) {
      return fallbackResult;
    }

    // 4. 分析从发顶向下的宽度变化与生理曲线
    const widths: { y: number; width: number; centerX: number }[] = [];
    const skinYList: number[] = [];
    const skinXList: number[] = [];

    for (let y = topY; y < scanH; y++) {
      let minX = scanW;
      let maxX = -1;
      let rowSkinXs: number[] = [];

      for (let x = 0; x < scanW; x++) {
        const idx = (y * scanW + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const alpha = data[idx + 3];

        if (alpha > 45) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;

          // 肤色生理检测 (用于精确定位面部与下巴中轴线)
          if (alpha > 70 && r > 50 && g > 35 && b > 20 && r > g && g >= b - 15 && (r - g) > 6 && (r - b) > 10) {
            rowSkinXs.push(x);
          }
        }
      }

      if (maxX >= minX) {
        const rowWidth = maxX - minX;
        const centerX = (minX + maxX) / 2;
        widths.push({ y, width: rowWidth, centerX });

        if (rowSkinXs.length >= 3) {
          // 只保留靠近中轴线 45% 范围内的面部肤色，排除手臂等杂色
          for (const sx of rowSkinXs) {
            if (Math.abs(sx - centerX) < rowWidth * 0.45) {
              skinYList.push(y);
              skinXList.push(sx);
            }
          }
        }
      }
    }

    if (widths.length < 15) {
      return fallbackResult;
    }

    // 5. 对轮廓宽度进行滑动平均平滑 (窗口大小 5)
    const smoothWs = widths.map((w, idx) => {
      let sum = 0;
      let count = 0;
      for (let k = Math.max(0, idx - 2); k <= Math.min(widths.length - 1, idx + 2); k++) {
        sum += widths[k].width;
        count++;
      }
      return sum / count;
    });

    // 6. 寻找头部最大宽度 (在上半部 40% 范围内)
    const upperLimit = Math.max(5, Math.min(widths.length, Math.round(widths.length * 0.40)));
    let maxHeadWidthIdx = 0;
    let maxHeadWidth = 0;
    for (let i = 0; i < upperLimit; i++) {
      if (smoothWs[i] > maxHeadWidth) {
        maxHeadWidth = smoothWs[i];
        maxHeadWidthIdx = i;
      }
    }

    // 7. 寻找下巴位置：
    // 从头部最宽处往下，轮廓先向颈部收缩（形成局部波谷），随后在双肩大幅展开
    let chinIdx = maxHeadWidthIdx;
    let minNeckWidth = maxHeadWidth;
    let foundNeckValley = false;

    for (let i = maxHeadWidthIdx; i < Math.min(widths.length, Math.round(widths.length * 0.65)); i++) {
      if (smoothWs[i] < minNeckWidth) {
        minNeckWidth = smoothWs[i];
        chinIdx = i;
      } else if (smoothWs[i] > minNeckWidth * 1.10 && (i - chinIdx) >= 3) {
        // 宽度比颈部最窄处突增 10% 以上，确认已进入肩膀斜坡，下巴已过
        foundNeckValley = true;
        break;
      }
    }

    if (!foundNeckValley) {
      // 备选：依生理经验取轮廓的 45% 作为下巴位置
      chinIdx = Math.round(widths.length * 0.45);
    }

    let chinY_small = widths[chinIdx]?.y || (topY + (scanH - topY) * 0.45);

    // 8. 结合肤色分布微调中轴线与下巴
    let headCenter_small = topX;
    if (skinXList.length > 10) {
      // 取面部肤色中位数作为中轴线
      skinXList.sort((a, b) => a - b);
      headCenter_small = skinXList[Math.floor(skinXList.length / 2)];
    } else {
      // 取头部轮廓中轴中位数
      const headCenters = widths.slice(0, Math.max(1, chinIdx)).map(w => w.centerX).sort((a, b) => a - b);
      headCenter_small = headCenters[Math.floor(headCenters.length / 2)] || topX;
    }

    // 9. 换算回原始图片分辨率尺寸
    const scaleToOrig = imgW / scanW;
    const origTopY = topY * scaleToOrig;
    const origChinY = chinY_small * scaleToOrig;
    const origHeadCenterX = headCenter_small * scaleToOrig;
    // 生理兜底：证件照头部高度在原图应至少占 25%
    const origHeadHeight = Math.max(origChinY - origTopY, imgH * 0.25);

    // 10. 根据国家证件照黄金比例标准计算对齐变换参数：
    // - 头顶留白：目标占总高度约 8.5%
    // - 头部大小（头顶至下巴）：目标占总高度约 58%
    // - 水平中心：严格 50% 居中
    const targetTopMarginPx = spec.heightPx * 0.085;
    const targetHeadHeightPx = spec.heightPx * 0.58;
    const targetCenterX = spec.widthPx * 0.5;

    const optimalScale = targetHeadHeightPx / origHeadHeight;
    const optimalX = targetCenterX - (origHeadCenterX * optimalScale);
    const optimalY = targetTopMarginPx - (origTopY * optimalScale);

    return {
      scale: Math.round(optimalScale * 1000) / 1000,
      x: Math.round(optimalX),
      y: Math.round(optimalY),
      headTopY: origTopY,
      chinY: origChinY,
      headCenterX: origHeadCenterX,
      headHeight: origHeadHeight,
      success: true
    };
  } catch (e) {
    console.warn('[FaceAlignment] 自动对齐计算异常，采用兜底对齐:', e);
    return fallbackResult;
  }
}
