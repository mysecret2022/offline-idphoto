import { TrayItem, PaperSpec, PrintPackingOptions, PlacedPhoto } from '../types';
import { mmToPx } from './specs';
import { injectDpiToJpegBlob } from './dpiWriter';

export interface PackedPage {
  pageIndex: number;
  canvas: HTMLCanvasElement;
  placedCount: number;
}

export class PrintPackingEngine {
  /**
   * 将托盘照片根据张数展开并执行智能二维排版
   */
  public static async generatePrintPages(
    items: TrayItem[],
    options: PrintPackingOptions
  ): Promise<PackedPage[]> {
    const { paper, marginMm = 5, gapMm = 3, showCutLines = true, showFootnote = true } = options;

    const paperW = paper.widthPx;
    const paperH = paper.heightPx;
    const marginPx = mmToPx(marginMm);
    const gapPx = mmToPx(gapMm);

    // 1. 展开所有待印实例
    interface ItemInstance {
      item: TrayItem;
      w: number;
      h: number;
      canvas: HTMLCanvasElement;
    }

    const instances: ItemInstance[] = [];
    for (const item of items) {
      if (item.printCount <= 0) continue;
      // 预先合成一张带有该照片所选底色与尺寸的标准 Canvas
      const photoCanvas = await this.renderItemToCanvas(item);
      for (let i = 0; i < item.printCount; i++) {
        instances.push({
          item,
          w: item.spec.widthPx,
          h: item.spec.heightPx,
          canvas: photoCanvas
        });
      }
    }

    if (instances.length === 0) {
      return [];
    }

    // 2. 货架流式二维装箱排版 (Shelf Packing with Multi-page Pagination)
    const pages: PackedPage[] = [];
    let currentInstanceIdx = 0;

    const usableW = paperW - marginPx * 2;
    const usableH = paperH - marginPx * 2;

    while (currentInstanceIdx < instances.length) {
      const pageIndex = pages.length + 1;
      const pageCanvas = document.createElement('canvas');
      pageCanvas.width = paperW;
      pageCanvas.height = paperH;
      const ctx = pageCanvas.getContext('2d');
      if (!ctx) break;

      // 填充纯白纸张底色
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, paperW, paperH);

      let currentX = marginPx;
      let currentY = marginPx;
      let currentRowHeight = 0;
      let placedInThisPage = 0;

      while (currentInstanceIdx < instances.length) {
        const inst = instances[currentInstanceIdx];
        const instW = inst.w;
        const instH = inst.h;

        // 检查当前行是否放得下
        if (currentX + instW > paperW - marginPx) {
          // 换行
          currentX = marginPx;
          currentY += currentRowHeight + gapPx;
          currentRowHeight = 0;
        }

        // 检查当前页垂直高度是否溢出
        if (currentY + instH > paperH - marginPx) {
          // 当前页已满，留给下一页处理
          break;
        }

        // 绘制照片到页面对应坐标
        ctx.drawImage(inst.canvas, currentX, currentY, instW, instH);

        // 绘制浅灰色十字裁切标记线
        if (showCutLines) {
          this.drawCropCrossMarks(ctx, currentX, currentY, instW, instH, options.cutLineOffsetPx || 4, options.cutLineLengthPx || 12);
        }

        // 绘制微型归属脚标 (避免切入照片内部，居中打印在底边边缘外)
        if (showFootnote) {
          this.drawFootnote(ctx, inst.item, currentX, currentY, instW, instH);
        }

        currentRowHeight = Math.max(currentRowHeight, instH);
        currentX += instW + gapPx;
        currentInstanceIdx++;
        placedInThisPage++;
      }

      // 如果一个都放不下（单张尺寸比可用区域还大），强制放置并跳过防死循环
      if (placedInThisPage === 0 && currentInstanceIdx < instances.length) {
        const inst = instances[currentInstanceIdx];
        ctx.drawImage(inst.canvas, marginPx, marginPx, Math.min(inst.w, usableW), Math.min(inst.h, usableH));
        currentInstanceIdx++;
        placedInThisPage++;
      }

      pages.push({
        pageIndex,
        canvas: pageCanvas,
        placedCount: placedInThisPage
      });
    }

    return pages;
  }

  /**
   * 将托盘照片扣像与选定底色合成到单张指定尺寸规格的 Canvas
   * 严格继承用户在画布上的手动缩放、旋转与平移 (transform)
   */
  public static async renderItemToCanvas(item: TrayItem): Promise<HTMLCanvasElement> {
    const canvas = document.createElement('canvas');
    canvas.width = item.spec.widthPx;
    canvas.height = item.spec.heightPx;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    const w = canvas.width;
    const h = canvas.height;

    // 1. 绘制底色或原图
    if (item.selectedBg.value === 'original') {
      const origImg = await this.blobToImage(item.originalBlob);
      if (item.transform) {
        ctx.save();
        const imgW = (origImg as any).naturalWidth || origImg.width;
        const imgH = (origImg as any).naturalHeight || origImg.height;
        const centerX = item.transform.x + (imgW * item.transform.scale) / 2;
        const centerY = item.transform.y + (imgH * item.transform.scale) / 2;
        ctx.translate(centerX, centerY);
        ctx.rotate(((item.transform.rotation || 0) * Math.PI) / 180);
        ctx.drawImage(
          origImg,
          -(imgW * item.transform.scale) / 2,
          -(imgH * item.transform.scale) / 2,
          imgW * item.transform.scale,
          imgH * item.transform.scale
        );
        ctx.restore();
        return canvas;
      }

      const imgRatio = origImg.width / origImg.height;
      const targetRatio = w / h;
      let drawW = w;
      let drawH = h;
      let drawX = 0;
      let drawY = 0;
      if (imgRatio > targetRatio) {
        drawH = h;
        drawW = h * imgRatio;
        drawX = (w - drawW) / 2;
      } else {
        drawW = w;
        drawH = w / imgRatio;
        drawY = (h - drawH) / 2;
      }
      ctx.drawImage(origImg, drawX, drawY, drawW, drawH);
      return canvas;
    }

    if (item.selectedBg.value !== 'transparent') {
      if (item.selectedBg.isGradient && item.selectedBg.gradientStops) {
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, item.selectedBg.gradientStops[0]);
        grad.addColorStop(1, item.selectedBg.gradientStops[1]);
        ctx.fillStyle = grad;
      } else {
        ctx.fillStyle = item.selectedBg.value || '#FFFFFF';
      }
      ctx.fillRect(0, 0, w, h);
    } else {
      ctx.clearRect(0, 0, w, h);
    }

    // 2. 绘制纯透明人物
    const cutoutImg = await this.blobToImage(item.cutoutBlob);
    
    // 若有用户手动调整或自动对齐的变换矩阵，按完全一致的矩阵高保真绘制
    if (item.transform) {
      ctx.save();
      const imgW = (cutoutImg as any).naturalWidth || cutoutImg.width;
      const imgH = (cutoutImg as any).naturalHeight || cutoutImg.height;
      const centerX = item.transform.x + (imgW * item.transform.scale) / 2;
      const centerY = item.transform.y + (imgH * item.transform.scale) / 2;
      ctx.translate(centerX, centerY);
      ctx.rotate(((item.transform.rotation || 0) * Math.PI) / 180);
      ctx.drawImage(
        cutoutImg,
        -(imgW * item.transform.scale) / 2,
        -(imgH * item.transform.scale) / 2,
        imgW * item.transform.scale,
        imgH * item.transform.scale
      );
      ctx.restore();
      return canvas;
    }

    // 兜底居中裁剪缩放
    const imgRatio = cutoutImg.width / cutoutImg.height;
    const targetRatio = w / h;

    let drawW = w;
    let drawH = h;
    let drawX = 0;
    let drawY = 0;

    if (imgRatio > targetRatio) {
      // 宽度偏大，以高为准
      drawH = h;
      drawW = h * imgRatio;
      drawX = (w - drawW) / 2;
    } else {
      // 高度偏大，以宽为准
      drawW = w;
      drawH = w / imgRatio;
      drawY = (h - drawH) / 2;
    }

    ctx.drawImage(cutoutImg, drawX, drawY, drawW, drawH);
    return canvas;
  }

  /**
   * 绘制四角外延式浅灰色十字裁切线 (#CCCCCC)
   */
  private static drawCropCrossMarks(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    offsetPx: number = 4,
    armLength: number = 12
  ) {
    ctx.save();
    ctx.strokeStyle = '#CCCCCC';
    ctx.lineWidth = 1;

    // 四个角坐标
    const corners = [
      { cx: x, cy: y, dx: -1, dy: -1 },         // 左上
      { cx: x + w, cy: y, dx: 1, dy: -1 },      // 右上
      { cx: x, cy: y + h, dx: -1, dy: 1 },      // 左下
      { cx: x + w, cy: y + h, dx: 1, dy: 1 }    // 右下
    ];

    for (const { cx, cy, dx, dy } of corners) {
      // 水平标线
      ctx.beginPath();
      ctx.moveTo(cx + dx * offsetPx, cy);
      ctx.lineTo(cx + dx * (offsetPx + armLength), cy);
      ctx.stroke();

      // 垂直标线
      ctx.beginPath();
      ctx.moveTo(cx, cy + dy * offsetPx);
      ctx.lineTo(cx, cy + dy * (offsetPx + armLength));
      ctx.stroke();
    }

    ctx.restore();
  }

  /**
   * 绘制微型归属脚标 (如 "小明 · 1寸")
   */
  private static drawFootnote(
    ctx: CanvasRenderingContext2D,
    item: TrayItem,
    x: number,
    y: number,
    w: number,
    h: number
  ) {
    ctx.save();
    ctx.fillStyle = '#9CA3AF';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    const text = `${item.memberName || '成员'} · ${item.spec.name}`;
    // 居中绘制在照片下方裁切线外
    ctx.fillText(text, x + w / 2, y + h + 6);
    ctx.restore();
  }

  /**
   * 导出打印页为无损 300 DPI JPEG 文件
   */
  public static async exportPageAs300DpiBlob(pageCanvas: HTMLCanvasElement): Promise<Blob> {
    return new Promise((resolve, reject) => {
      pageCanvas.toBlob(async (blob) => {
        if (!blob) {
          reject(new Error('页面 Canvas 导出失败'));
          return;
        }
        try {
          const dpiBlob = await injectDpiToJpegBlob(blob, 300);
          resolve(dpiBlob);
        } catch (e) {
          reject(e);
        }
      }, 'image/jpeg', 0.98);
    });
  }

  private static blobToImage(blob: Blob): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve(img);
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('图片加载失败'));
      };
      img.src = url;
    });
  }
}
