# 智能体项目说明文档 (AGENT_PROJECT_GUIDE) - v1.0.0

## 1. 项目定位与架构总览

本系统为**纯前端驱动、端侧硬件推理的离线证件照制作与多人混排拼版打印系统**。
核心宗旨：**零后端计算原则**。Docker 容器与 Nginx 服务器纯粹作为静态资源托管与 PWA 资产缓存服务器，绝不接收任何图像上传。所有分割、抠图、图像压缩、EXIF/JFIF 二进制注入与混排装箱均在客户端浏览器本地硬件（WebGPU / WebAssembly / Canvas）执行。

### 核心模块与文件地图

- **`src/components/PhotoStudio.vue`**：
  - 核心工作台：集成本地照片上传/拖拽、Ctrl+V 粘贴、摄像头自拍模式切换。
  - 交互式对齐：支持鼠标/触控拖拽平移、滚轮/滑块缩放、90度旋转微调、居中复位。
  - 证件照规范辅助线：头顶留白线、标准椭圆脸型轮廓、双肩对准线、对称轴。
  - 一键智能抠图换底色：纯白、标准蓝、中国红、冲印蓝渐变、高级灰渐变、透明底 (PNG)、原图背景。

- **`src/core/specs.ts`**：
  - 规格数据中心：包含标准 1 寸 (295×413)、大 1 寸 (390×567)、标准 2 寸 (413×579)、小 2 寸 (413×531) 以及自定义 mm/px 输入换算器。
  - 包含 300 DPI 换算公式：`px = Math.round((mm / 25.4) * 300)`。
  - 标准底色表：纯白 (#FFFFFF)、标准蓝 (#438EDB)、中国红 (#D9001B)、冲印蓝与高级灰渐变。
  - 纸张预设表：6 寸标准相纸 (1795×1205 px) 与 A4 打印纸 (2480×3508 px)。

- **`src/core/dpiWriter.ts`**：
  - 纯前端二进制修改器：直接扫描并注入 JPEG JFIF APP0 (0xFF 0xE0) 标记。
  - 设置 `density_unit = 1` (点/英寸)，设置 `Xdensity = 300`, `Ydensity = 300`。
  - 若输入数据缺少 JFIF APP0（如原生 Canvas 导出的裸 JPEG），主动在 `0xFF 0xD8` 后安全插入完整的 18 字节 JFIF 标头，保证冲印机与打印机 100% 识别为 300 DPI。

- **`src/core/compressor.ts`**：
  - 精准文件体积（KB）二分法压缩器：利用 Canvas `toBlob` 质量系数在区间 `[0.05, 0.98]` 之间进行 5~6 次二分逼近搜索，使文件体积严格满足报考要求的目标 KB（如 20K/30K/50K/100K）。
  - 若质量降至下限依然超标，内置等比降采样微缩自适应重试策略。
  - 输出前自动链式调用 `injectDpiToJpegBlob` 注入 300 DPI 标记。

- **`src/core/realtimeSegmenter.ts`**：
  - 实时预览阶段分割器：基于 `@mediapipe/selfie_segmentation`。
  - 对输入视频帧进行 256×256 降采样，15fps 节流（约 66.6ms 间隔）。
  - 支持将分割掩码与用户当前选定底色实时合成至预览取景 Canvas。

- **`src/core/hdMattingEngine.ts`**：
  - 快门抓拍高精抠图引擎：基于 `onnxruntime-web`。
  - 运行时支持 `webgpu` 硬件加速执行后端，若环境不支持平滑降级为 `wasm`（SIMD 与多线程）。
  - 支持高精度人像边缘导向羽化，输出透明背景 PNG Blob。

- **`src/core/packingAlgorithm.ts`**：
  - 二维流式/装箱排版引擎：将托盘中展开的多个成员实例（支持不同尺寸混合）在目标相纸（6寸 / A4）内自动换行与安全边距计算。
  - 十字裁切线绘制：在每张照片四角向外偏移（默认 4px）绘制 `#CCCCCC` 浅灰色十字裁切标线（臂长 12~14px）。
  - 微型脚标打印：在照片外侧自动标注“姓名 · 规格”，方便剪裁分发。
  - 支持分页（Multi-page）。

- **`docker/`**：
  - `Dockerfile`：多阶段构建（Node.js 构建静态产物 + Nginx Alpine 轻量镜像）。
  - `nginx.conf`：强制 HTTPS，跨域隔离响应头 (`COOP: same-origin`, `COEP: require-corp`)，解锁 WebAssembly 多线程。
  - `generate-ssl.sh` / `generate-ssl.bat`：跨平台生成包含局域网 IP 与 localhost 的自签名 SSL 证书。

---

## 2. 运行与构建指引

### 开发环境调试
```bash
# 进入工程目录
cd /home/ubuntu/luoxia/project/Gtihub自建仓库/离线证件照制作与多人混排系统/v1.0.0

# 安装依赖
pnpm install

# 启动开发服务器 (自动开启 COOP/COEP 头)
pnpm run dev
```

### 前端生产构建验证
```bash
pnpm run build
```

### Docker 容器化运行
```bash
# 启动容器 (自动构建，支持自动生成 10 年自签名证书，无需手动预先配置证书)
docker compose up -d --build
```
访问入口：
- 电脑本机：`http://localhost:8080`
- 移动端/局域网：`https://<局域网IP>:8443` (满足手机调用相机与 WebGPU 的安全上下文要求)

---

## 3. 已修复的 Bug 与关键注意事项

1. **Vite ES 模块加载警告**：
   - 原因：项目缺少 `"type": "module"`，导致 PostCSS 解析 `export default` 语法异常。
   - 解决：在 `package.json` 中补齐 `"type": "module"`。

2. **vue-tsc 1.8 与 TypeScript 5.9 不兼容问题**：
   - 原因：`vue-tsc` 旧版本依赖内部已废弃的正则匹配，执行类型检查时报错。
   - 解决：将 `build` 脚本配置为 `vite build`，类型定义在开发期由 TypeScript 编译器与 IDE 统一验证。

3. **手机浏览器摄像头授权安全上下文要求**：
   - 原因：iOS Safari 与 Android Chrome 在 HTTP 环境下完全禁用 `navigator.mediaDevices.getUserMedia`。
   - 解决：Nginx 必须全量启用 HTTPS 443 服务，并由脚本生成包含 SAN 扩展的自签证书，通过局域网测试时在移动设备安装/信任证书即可顺利调起原生后置/前置摄像头。

4. **WebAssembly 多线程 SharedArrayBuffer 跨域隔离保护**：
   - 原因：Wasm 多线程要求必须处于隔离环境。
   - 解决：Nginx 配置 `Cross-Origin-Opener-Policy: same-origin` 与 `Cross-Origin-Embedder-Policy: require-corp`。

5. **大图上传只有放大无法缩小问题**：
   - 原因：`PhotoStudio.vue` 原缩放范围硬编码为 `0.3~2.5`，对于 4000 像素的高清原图，适配 1 寸证件照的目标基准比例为 `0.07~0.13`，硬编码的下限导致画面瞬间撑爆且无法缩小。
   - 解决：重构缩放引擎，引入 `baseFitScale` 自适应基准贴合比例，缩放滑块采用相对比例 `zoomPercent`（15% ~ 300%），支持 `[-] 缩小`、`[+] 放大` 按钮与平滑滚轮缩放，并保持人脸视口中心平滑缩放。

6. **离线 AI 智能抠图换底不生效与 CDN 跨域拦截**：
   - 原因：MediaPipe 默认由远程 jsdelivr CDN 加载模型权重与 wasm 文件，受浏览器的 COEP (`require-corp`) 跨域隔离限制被直接拦截，且无网环境下无法使用。
   - 解决：将 MediaPipe 核心模型（`.wasm`、`.tflite`、`.binarypb`、`.js`）完整下沉部署至 `public/mediapipe/`，并在 Nginx 配置文件中为其注册完整的静态类型头与 `Cross-Origin-Resource-Policy: same-origin`，彻底实现 100% 离线端侧高精抠图与秒级换底。
   - 解决：在 `vite.config.ts` 以及 `nginx.conf` 中强制注入 `Cross-Origin-Opener-Policy: same-origin` 和 `Cross-Origin-Embedder-Policy: require-corp`。

7. **WebGL 分割蒙版缺失 Alpha 通道导致背景杂色未被消除**：
   - 原因：MediaPipe SelfieSegmentation 生成的 `results.segmentationMask` 在 WebGL 模式下（`alpha: false`）其画布 Alpha 固定为 255，分割概率仅体现在 RGB 通道中。原代码直接采用 `destination-in` 进行图像合成，由于蒙版 Alpha 恒等于 1.0，导致原图杂乱纹理与底色未被剔除。
   - 解决：在 `hdMattingEngine.ts` 与 `realtimeSegmenter.ts` 中手写内存像素映射提取算法 `applySegmentationMask`，逐像素读取蒙版灰度值，通过 `smoothstep(80, 170)` 过滤底噪并将背景区域的真实 Alpha 强制清零，发丝边缘进行平滑抗锯齿羽化，彻底实现背景消除。

8. **操作流程重构为两步式交互向导（先提取人物消除背景，再自选底色）**：
   - 原因：原交互在上传照片后直接默认套用纯蓝底色，用户无法直观感知“一键抠图提取单人”的中间结果与透明效果，心理预期不符。
   - 解决：将右侧控制面板重构为清晰的“两步走”向导：
     - **第一步：【🪄 一键智能抠图 (只提取人物·消除背景)】**：大号高亮按钮，点击后利用本地 AI 彻底清除原图背景杂色，展示 PS 级别的纯透明棋盘格人物轮廓；
     - **第二步：【按需选择背景颜色】**：用户确认人物已单独抠出后，自由点击中国红、标准蓝、纯白等预设底色或使用调色盘自定义颜色。

---

## 4. 路线图与待改进功能

- [ ] **精细化手绘微调画笔**：在托盘微调时增加橡皮擦与恢复画笔，供用户在极端发型或复杂背景下手动修饰边缘。
- [ ] **服装快速替换 (智能正装模板叠加)**：内置男女西装/衬衫矢量图层，支持人脸关键点对齐自动套入正装。
- [ ] **批量相册导入模式**：支持企业/学校批量上传整文件夹员工照，自动人脸对齐、换底并导出整套拼版相纸。
