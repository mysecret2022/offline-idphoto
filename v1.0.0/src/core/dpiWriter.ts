/**
 * 纯前端二进制操作修改 JPEG 的 JFIF/APP0 标记头，精确注入 DPI 物理打印标记
 * 确保照片在送往冲印机、打印机或画图软件时均被准确识别为指定 DPI（默认 300 DPI）
 */

export function injectDpiToJpegBlob(blob: Blob, dpi: number = 300): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const buffer = reader.result as ArrayBuffer;
        const modifiedBuffer = injectDpiToJpegArrayBuffer(buffer, dpi);
        resolve(new Blob([modifiedBuffer], { type: 'image/jpeg' }));
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });
}

/**
 * 注入 DPI 到 JPEG ArrayBuffer
 */
export function injectDpiToJpegArrayBuffer(arrayBuffer: ArrayBuffer, dpi: number = 300): ArrayBuffer {
  const bytes = new Uint8Array(arrayBuffer);

  // 校验 JPEG SOI 标记: 0xFF 0xD8
  if (bytes.length < 4 || bytes[0] !== 0xFF || bytes[1] !== 0xD8) {
    console.warn('[dpiWriter] 不是有效的 JPEG 文件格式，原样返回');
    return arrayBuffer;
  }

  const dpiHi = (dpi >> 8) & 0xFF;
  const dpiLo = dpi & 0xFF;

  // 检查是否紧跟 APP0 标记 (0xFF 0xE0)
  if (bytes[2] === 0xFF && bytes[3] === 0xE0) {
    // 检查是否为 JFIF (0x4A, 0x46, 0x49, 0x46, 0x00)
    const isJfif =
      bytes[6] === 0x4A && // J
      bytes[7] === 0x46 && // F
      bytes[8] === 0x49 && // I
      bytes[9] === 0x46 && // F
      bytes[10] === 0x00;  // \0

    if (isJfif && bytes.length >= 18) {
      // 拷贝副本进行就地修改
      const modified = new Uint8Array(bytes);
      modified[13] = 0x01;  // 密度单位: 1 = 点/英寸 (DPI)
      modified[14] = dpiHi; // X 密度高字节
      modified[15] = dpiLo; // X 密度低字节
      modified[16] = dpiHi; // Y 密度高字节
      modified[17] = dpiLo; // Y 密度低字节
      return modified.buffer;
    }
  }

  // 若无 JFIF APP0 标记（例如部分浏览器输出的裸 JPEG 或直接以 APP1 开头），
  // 在 0xFF 0xD8 之后插入完整的 18 字节标准 JFIF APP0 标头
  const jfifHeader = new Uint8Array([
    0xFF, 0xE0,       // APP0 标记
    0x00, 0x10,       // 长度: 16 字节
    0x4A, 0x46, 0x49, 0x46, 0x00, // "JFIF\0"
    0x01, 0x02,       // JFIF 版本 1.02
    0x01,             // 密度单位: 1 = DPI (dots per inch)
    dpiHi, dpiLo,     // X 轴密度 (如 300)
    dpiHi, dpiLo,     // Y 轴密度 (如 300)
    0x00, 0x00        // 无缩略图 (0x0)
  ]);

  const newBytes = new Uint8Array(bytes.length + jfifHeader.length);
  // 复制 SOI (0xFF, 0xD8)
  newBytes.set(bytes.subarray(0, 2), 0);
  // 插入 JFIF APP0
  newBytes.set(jfifHeader, 2);
  // 复制余下内容
  newBytes.set(bytes.subarray(2), 2 + jfifHeader.length);

  return newBytes.buffer;
}

/**
 * 校验 JPEG 的 DPI 信息
 */
export function readDpiFromJpeg(arrayBuffer: ArrayBuffer): { dpiX: number; dpiY: number; unit: number } | null {
  const bytes = new Uint8Array(arrayBuffer);
  if (bytes.length < 18 || bytes[0] !== 0xFF || bytes[1] !== 0xD8) return null;

  if (bytes[2] === 0xFF && bytes[3] === 0xE0) {
    const isJfif =
      bytes[6] === 0x4A &&
      bytes[7] === 0x46 &&
      bytes[8] === 0x49 &&
      bytes[9] === 0x46 &&
      bytes[10] === 0x00;

    if (isJfif) {
      const unit = bytes[13];
      const dpiX = (bytes[14] << 8) | bytes[15];
      const dpiY = (bytes[16] << 8) | bytes[17];
      return { dpiX, dpiY, unit };
    }
  }

  return null;
}
