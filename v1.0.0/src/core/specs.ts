import { PhotoSpec, PaperSpec, BgColorOption } from '../types';

export const MM_TO_INCH = 25.4;
export const DEFAULT_DPI = 300;

export function mmToPx(mm: number, dpi: number = DEFAULT_DPI): number {
  return Math.round((mm / MM_TO_INCH) * dpi);
}

export function pxToMm(px: number, dpi: number = DEFAULT_DPI): number {
  return Math.round(((px / dpi) * MM_TO_INCH) * 10) / 10;
}

// 预设证件照规格 (覆盖常用生活、考试、签证需求)
export const PRESET_PHOTO_SPECS: PhotoSpec[] = [
  {
    id: 'spec_1_inch',
    name: '标准 1 寸',
    widthMm: 25,
    heightMm: 35,
    widthPx: 295,
    heightPx: 413,
    description: '适用于驾照、体检表、普通证件、求职简历'
  },
  {
    id: 'spec_large_1_inch',
    name: '大 1 寸',
    widthMm: 33,
    heightMm: 48,
    widthPx: 390,
    heightPx: 567,
    description: '适用于普通中国护照、港澳通行证、各类职业资格考试'
  },
  {
    id: 'spec_2_inch',
    name: '标准 2 寸',
    widthMm: 35,
    heightMm: 49,
    widthPx: 413,
    heightPx: 579,
    description: '适用于各类证书、签证申请、学历学位证明'
  },
  {
    id: 'spec_small_2_inch',
    name: '小 2 寸',
    widthMm: 35,
    heightMm: 45,
    widthPx: 413,
    heightPx: 531,
    description: '适用于东南亚签证、部分欧美申根签证'
  },
  {
    id: 'spec_cet',
    name: '英语四六级 (CET)',
    widthMm: 33,
    heightMm: 48,
    widthPx: 390,
    heightPx: 567,
    description: '全国大学英语四、六级考试官方报名标准'
  },
  {
    id: 'spec_teacher',
    name: '教师资格证 (NTCE)',
    widthMm: 35,
    heightMm: 53,
    widthPx: 413,
    heightPx: 626,
    description: '中小学教师资格考试网报标准尺寸'
  },
  {
    id: 'spec_ncre',
    name: '计算机等级考试 (NCRE)',
    widthMm: 25,
    heightMm: 34,
    widthPx: 300,
    heightPx: 400,
    description: '全国计算机等级考试网报标准'
  },
  {
    id: 'spec_civil_service',
    name: '国家公务员考试 (国考)',
    widthMm: 35,
    heightMm: 45,
    widthPx: 413,
    heightPx: 531,
    description: '中央机关及其直属机构公务员招考标准'
  }
];

// 创建自定义规格
export function createCustomSpec(
  name: string,
  width: number,
  height: number,
  unit: 'mm' | 'px'
): PhotoSpec {
  let widthMm = 0;
  let heightMm = 0;
  let widthPx = 0;
  let heightPx = 0;

  if (unit === 'mm') {
    widthMm = width;
    heightMm = height;
    widthPx = mmToPx(width);
    heightPx = mmToPx(height);
  } else {
    widthPx = Math.round(width);
    heightPx = Math.round(height);
    widthMm = pxToMm(widthPx);
    heightMm = pxToMm(heightPx);
  }

  return {
    id: `custom_${Date.now()}`,
    name: name || `自定义 (${widthMm}×${heightMm}mm)`,
    widthMm,
    heightMm,
    widthPx,
    heightPx,
    description: `自定义尺寸 ${widthMm}×${heightMm} mm (${widthPx}×${heightPx} px)`,
    isCustom: true
  };
}

// 预设标准底色
export const PRESET_BG_COLORS: BgColorOption[] = [
  {
    id: 'bg_original',
    name: '原图背景',
    value: 'original',
    previewClass: 'bg-slate-700 border border-slate-600'
  },
  {
    id: 'bg_white',
    name: '纯白底',
    value: '#FFFFFF',
    previewClass: 'bg-white border border-gray-300'
  },
  {
    id: 'bg_blue',
    name: '标准蓝',
    value: '#438EDB',
    previewClass: 'bg-[#438EDB]'
  },
  {
    id: 'bg_red',
    name: '中国红',
    value: '#D9001B',
    previewClass: 'bg-[#D9001B]'
  },
  {
    id: 'bg_gray_grad',
    name: '高级灰',
    value: 'linear-gradient(180deg, #F3F4F6 0%, #D1D5DB 100%)',
    previewClass: 'bg-gradient-to-b from-gray-100 to-gray-300',
    isGradient: true,
    gradientStops: ['#F3F4F6', '#9CA3AF']
  },
  {
    id: 'bg_blue_grad',
    name: '冲印蓝',
    value: 'linear-gradient(180deg, #60A5FA 0%, #1D4ED8 100%)',
    previewClass: 'bg-gradient-to-b from-blue-400 to-blue-700',
    isGradient: true,
    gradientStops: ['#60A5FA', '#1D4ED8']
  },
  {
    id: 'bg_transparent',
    name: '透明底 (PNG)',
    value: 'transparent',
    previewClass: 'bg-transparent border-2 border-dashed border-gray-400'
  }
];

// 预设相纸/纸张
export const PRESET_PAPERS: PaperSpec[] = [
  {
    id: 'paper_6_inch',
    name: '6 寸照片纸 (横版 152×102mm)',
    widthMm: 152,
    heightMm: 102,
    widthPx: 1795,
    heightPx: 1205,
    description: '标准冲印 6 寸相纸 (4R)，最常用的家用相纸规格'
  },
  {
    id: 'paper_6_inch_v',
    name: '6 寸照片纸 (竖版 102×152mm)',
    widthMm: 102,
    heightMm: 152,
    widthPx: 1205,
    heightPx: 1795,
    description: '标准冲印 6 寸相纸竖版'
  },
  {
    id: 'paper_a4',
    name: '标准 A4 纸 (210×297mm)',
    widthMm: 210,
    heightMm: 297,
    widthPx: 2480,
    heightPx: 3508,
    description: '标准办公室 A4 打印纸 (300 DPI 高清输出)'
  }
];
