// 证件照规格定义
export interface PhotoSpec {
  id: string;
  name: string;
  widthMm: number;
  heightMm: number;
  widthPx: number; // 300 DPI
  heightPx: number; // 300 DPI
  description: string;
  isCustom?: boolean;
}

// 纸张规格定义
export interface PaperSpec {
  id: string;
  name: string;
  widthMm: number;
  heightMm: number;
  widthPx: number; // 300 DPI
  heightPx: number; // 300 DPI
  description: string;
}

// 背景底色预设
export interface BgColorOption {
  id: string;
  name: string;
  value: string; // CSS color string or gradient
  previewClass?: string;
  isGradient?: boolean;
  gradientStops?: [string, string];
}

// 待打印托盘中的照片项
export interface TrayItem {
  id: string;
  memberName: string;
  originalBlob: Blob;
  cutoutBlob: Blob; // 纯透明人物 PNG Blob
  composedBlob?: Blob; // 包含用户手动位移、缩放与选定底色的完整合成图
  transform?: {
    scale: number;
    x: number;
    y: number;
    rotation: number;
  };
  previewUrl: string; // 带有当前底色的合成预览图
  spec: PhotoSpec;
  printCount: number;
  selectedBg: BgColorOption;
  createdAt: number;
}

// 拼版装箱定位结果
export interface PlacedPhoto {
  trayItemId: string;
  memberName: string;
  specName: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotated: boolean;
  canvas: HTMLCanvasElement;
}

// 拼版排版选项
export interface PrintPackingOptions {
  paper: PaperSpec;
  marginMm: number;
  gapMm: number;
  showCutLines: boolean;
  showFootnote: boolean;
  cutLineOffsetPx: number;
  cutLineLengthPx: number;
}
