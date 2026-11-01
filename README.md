# 离线端侧证件照制作与多人混排打印系统 (Offline ID Photo Maker)

> ⚠️ **开源出处与合规免责声明 (Open Source Attribution & Ethics)**：
> - 本项目深度集成并衍生开发于以下卓越的开源学术成果与前沿技术库：
>   - **MODNet (发丝级肖像精细抠图)**：基于原作者 [@ZHKKKe](https://github.com/ZHKKKe) (柯章翰) 发表在 AAAI 2022 的学术论文及开源工程 [ZHKKKe/MODNet](https://github.com/ZHKKKe/MODNet)（遵循 Apache License 2.0 开源协议），采用社区高质量 ONNX 化模型进行端侧部署；
>   - **MediaPipe Selfie Segmentation**：基于 Google 开源的 [Google MediaPipe](https://github.com/google-ai-edge/mediapipe) 移动端人脸与人像分割引擎（遵循 Apache License 2.0 开源协议）；
>   - **ONNX Runtime Web**：由 Microsoft 维护的端侧硬件推理引擎 [microsoft/onnxruntime](https://github.com/microsoft/onnxruntime)（遵循 MIT License）。
> - **维护者声明**：本项目维护者非上述项目的官方维护者。本项目系基于开源社区的研究成果，为满足“**100% 离线隐私安全、零后端计算、高保真发丝抠图与多人多规格混排相纸打印**”场景进行的工程落地、纯前端适配与功能二次开发，特此向原作者与开源社区的无私奉献致以崇高敬意！

---

## 🌟 核心理念：零后端计算与极致隐私保护 (Zero-Backend Privacy)

现代证件照拍摄常涉及面部生物信息与个人生活照隐私。本项目自设计之初即确立**零后端计算原则**：
- **服务器仅做静态文件分发**：Docker 容器与 Nginx 服务仅承担静态网页资产与 AI 模型的缓存托管，**没有部署任何图像上传接口，亦绝不接收任何照片数据**；
- **全流程端侧硬件闭环**：所有头发丝级抠图、背景消除、换底调色、300 DPI 标头二进制注入、文件体积压缩与相纸二维混排装箱，**100% 运行在用户本地设备（手机/电脑）的浏览器内部**；
- **断网完全可用**：首次访问加载后，就算手机拔掉 SIM 卡或开启**飞行模式**，电脑拔掉网线，抠图换底与导出依然能以秒级顺畅执行！

---

## 🔬 运用的关键技术栈与实现原理 (Technology Stack)

### 1. 发丝级肖像抠图引擎 (MODNet & ONNX Runtime Web)
- **技术基础**：AAAI 2022 顶会论文《*MODNet: Trimap-Free Portrait Matting in Real Time*》（作者：Zhanghan Ke 等）。
- **端侧硬件推理**：利用 `onnxruntime-web` 直接在浏览器内调用用户的本机硬件。
  - **首选硬件加速**：支持 WebGPU 架构，直接调度手机与电脑的独立显卡或集成 GPU 进行并行张量矩阵计算；
  - **自适应降级回退**：若宿主设备不支持 WebGPU，自动无缝回退至 WebAssembly SIMD 多线程执行。
- **动态整倍分辨率算法**：针对用户任意比例的照片，自适应缩放至 32 整数倍的基准推理矩阵，进行动态张量映射，确保额头空气刘海与细微发丝根根分明，从复杂生活背景（如商超水果摊、杂乱货架）中精准分离人体。

### 2. 双阶段低功耗视觉推理策略 (Dual-Stage Pipeline)
- **第一阶段（实时取景预览）**：基于 Google MediaPipe Selfie Segmentation 轻量模型（约 250KB），以 15fps 节流降采样运行，保证移动端自拍取景流畅不发热，在拍摄前实时预览选定底色；
- **第二阶段（快门抓拍精修）**：用户选定或抓拍照片后，触发高精度 MODNet 发丝级算法进行高清推理，输出 PS 级透明通道人物图层。

### 3. 两步走向导式交互架构 (2-Step Workflow)
- **步骤 1：一键提取人物·消除背景**：
  - 点击后 AI 彻底消除原图杂色与背景图案，以行业标准的**黑白棋盘格**呈现纯透明单人图层，让用户直观检验发丝与轮廓；
- **步骤 2：按需自由垫底换色**：
  - 支持快捷一键切换中国红 (#D9001B)、标准证件蓝 (#438EDB)、纯白 (#FFFFFF)、冲印渐变蓝、高级灰，并支持原生系统调色盘（`<input type="color">` 与 Hex 任意输入）随心定制。

### 4. 纯前端二进制与图像工程 (Binary & Image Processing)
- **300 DPI 物理冲印标记注入**：
  - 原生 HTML Canvas 导出的 JPEG 通常缺少物理尺寸标记。系统纯前端二进制解析 JPEG 数据流，在 `0xFF 0xE0` (JFIF APP0) 中精准写入 `density_unit = 1`（英寸）与 `Xdensity = Ydensity = 300`，保证照片被各类打印机与官方报考系统准确识别为 300 DPI 物理尺寸；
- **目标体积 (KB) 二分逼近算法**：
  - 支持报考常见的 20KB~100KB 严格大小限制，利用 Canvas 在区间 `[0.05, 0.98]` 内进行 5~6 次二分逼近搜索，画质达到极限要求的同时绝对不超标。

### 5. 多人多尺寸相纸二维装箱排版算法 (Packing Algorithm)
- **待印托盘流水线**：单人或多人连续拍照，为每张照片独立设置张数、尺寸与底色；
- **智能排版装箱**：自动在 6 寸相纸（1795×1205 px）与 A4 相纸（2480×3508 px）上进行无碰撞排列与安全留白计算；
- **冲印辅助标线**：照片外侧自动绘制 `#CCCCCC` 浅灰色十字裁切标线与“姓名·规格”微型识别脚标，剪裁分发极度省心。

### 6. 前端现代工程架构
- **核心框架**：Vue 3 (Composition API / `<script setup>`) + TypeScript 5；
- **构建工具**：Vite 5 极速热重载打包；
- **视觉组件**：Tailwind CSS 移动端优先响应式设计，Lucide Vue Next 矢量图标库；
- **离线 PWA**：Service Worker 缓存所有代码、静态资产与 Wasm 运行时，支持无网断网离线使用。

---

## 🐳 Docker Compose 部署指南 (推荐)

### 1. 标准 `docker-compose.yml` 完整配置

```yaml
version: '3.8'

services:
  offline-idphoto:
    build:
      context: ./v1.0.0
      dockerfile: docker/Dockerfile.quick
    container_name: offline-idphoto
    restart: always
    ports:
      # 宿主机端口 : 容器端口
      - "8080:80"    # HTTP 访问入口：电脑本机浏览器使用 (http://localhost:8080)
      - "8443:443"   # HTTPS 访问入口：局域网手机/iPad使用 (https://<宿主机IP>:8443)
    volumes:
      # SSL 证书挂载目录 (初次启动若为空，容器将自动为您生成10年有效期的自签证书)
      - ./v1.0.0/docker/certs:/etc/nginx/certs
    environment:
      - TZ=Asia/Shanghai
```

---

### 2. 极速启动三步走

#### 第 1 步：克隆仓库
```bash
git clone https://github.com/mysecret2022/offline-idphoto.git
cd offline-idphoto
```

#### 第 2 步：一键构建并启动
```bash
docker compose up -d --build
```

#### 第 3 步：浏览器访问
- **本机电脑访问（HTTP）**：👉 **`http://localhost:8080`**
- **手机/局域网设备访问（HTTPS）**：👉 **`https://<您的电脑IP>:8443`**  
  *(注：移动端访问必须使用 HTTPS 协议，否则手机操作系统会严加保护并禁用摄像头调取与 WebGPU 硬件加速)*

---

## 📂 项目结构全景图

```text
├── README.md                         # 项目总说明、技术架构与开源合规声明
├── docker-compose.yml                # 根目录一键启动编排
├── LICENSE                           # MIT 开源许可证
└── v1.0.0/                           # 当前正式版本归档
    ├── AGENT_PROJECT_GUIDE.md        # 面向智能体/开发者的架构自说明文档
    ├── docker-compose.yml            # 版本目录容器编排
    ├── docker/
    │   ├── Dockerfile.quick          # 极速轻量容器镜像
    │   ├── nginx.conf                # 跨域隔离安全响应头 (COOP/COEP) 与 Wasm MIME
    │   └── entrypoint.sh             # 容器启动自检与自签证书生成
    ├── public/
    │   ├── models/modnet.onnx        # MODNet 发丝级高清肖像抠图模型 (25MB)
    │   └── mediapipe/                # Google MediaPipe 实时分割模型与 Wasm 运行时
    ├── src/
    │   ├── components/
    │   │   ├── PhotoStudio.vue       # 证件照核心工作台 (两步走向导、拖拽缩放旋转)
    │   │   ├── PhotoTray.vue         # 待印照片托盘
    │   │   ├── ExportModal.vue       # 单张精准二分压缩与 300 DPI 导出
    │   │   └── PrintLayoutModal.vue  # 6寸/A4 自动混排拼版、十字裁切线
    │   ├── core/
    │   │   ├── hdMattingEngine.ts    # MODNet (WebGPU/Wasm) 端侧高精抠图引擎
    │   │   ├── realtimeSegmenter.ts  # MediaPipe 实时轻量分割 (15fps)
    │   │   ├── dpiWriter.ts          # 纯前端 JPEG JFIF 300 DPI 二进制注入器
    │   │   ├── compressor.ts         # 二分逼近目标体积算法
    │   │   └── specs.ts              # 证件照标准规格数据与尺寸换算
    │   ├── App.vue
    │   └── main.ts
    ├── package.json
    └── vite.config.ts
```

---

## 📜 开源许可与致谢 (Credits & License)

本项目代码部分遵循 [MIT License](LICENSE) 开源协议。

项目中集成的核心算法与模型版权归原作者及团队所有：
1. **MODNet**：版权归属于 [Zhanghan Ke (柯章翰)](https://github.com/ZHKKKe) 及团队，遵循 [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)；
2. **Google MediaPipe**：版权归属于 Google LLC，遵循 [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)；
3. **ONNX Runtime**：版权归属于 Microsoft Corporation，遵循 [MIT License](https://github.com/microsoft/onnxruntime/blob/main/LICENSE)。

感谢开源社区为端侧人工智能与现代 Web 发展做出的卓越贡献！
