# 离线端侧证件照制作与多人混排打印 Web 系统

> **项目声明**：本项目基于纯前端端侧算力与开放技术栈自研构建，维护者非任何商业官方组织。系统 100% 运行在客户端本地，承诺绝不上传任何用户照片与面部隐私数据至任何远程服务器。

---

## 🌟 核心特性与架构设计

### 1. 零后端计算与绝对隐私安全 (Zero-Backend Privacy)
- Docker 容器与 Nginx 服务仅承担静态资源分发与 PWA 离线缓存。
- 所有图像分割、人脸检测、换底、300 DPI 物理元数据修改与排版装箱全部由浏览器在本地硬件（WebGPU / WebAssembly / Canvas）完成。

### 2. 双阶段视觉推理策略 (Dual-Stage Inference)
- **实时取景预览**：轻量化分割模型（MediaPipe Selfie Segmentation，降采样至 256×256，15fps 节流），实现拍摄前前置底色（纯白、标准蓝、大红、高级灰）的丝滑低功耗实时预览。
- **快门抓拍精抠**：高精单帧模型（基于 onnxruntime-web，优先调用 WebGPU 硬件加速，平滑降级 Wasm SIMD 多线程），追求发丝级精细抠图。

### 3. 标准规格库与动态引导取景框
- **预设规格**：
  - 标准 1 寸：295 × 413 px (25 × 35 mm)
  - 大 1 寸：390 × 567 px (33 × 48 mm)
  - 标准 2 寸：413 × 579 px (35 × 49 mm)
  - 小 2 寸：413 × 531 px (35 × 45 mm)
  - 英语四六级 (CET)：390 × 567 px (33 × 48 mm)
  - 教师资格证 (NTCE)：413 × 626 px (35 × 53 mm)
  - 计算机等级考试 (NCRE)：300 × 400 px
  - 国家公务员考试 (国考)：413 × 531 px
  - 自定义尺寸：支持按 mm 或 px 自由输入，自动以 300 DPI 精准换算。
- **动态引导遮罩**：等比取景框缩放，叠加标准头顶留白线、人脸椭圆黄金比例圈、双肩定位参考线、居中垂直对称轴。

### 4. 图像后处理与物理尺寸合规
- **目标体积 (KB) 精准二分法压缩**：支持 20KB~100KB 等报考常用体积限制，通过 Canvas 二分法动态逼近 JPEG 质量参数（迭代 5~6 次），兼顾极限制与最高画质。
- **300 DPI 物理打印标记注入**：纯前端二进制读写修改 JPEG JFIF APP0 标头（密度单位 1，X/Y 轴密度 300），确保冲印机与各类打印设备均能识别为无损 300 DPI 物理尺寸。

### 5. 多人拍摄与混排打印引擎 (核心亮点)
- **待印托盘 (Tray)**：支持多人串行拍照与导入，独立为每位成员配置打印张数、打印规格与底色。
- **智能二维混排装箱**：支持标准 6 寸相纸（1795 × 1205 px @ 300 DPI）与 A4 纸（2480 × 3508 px @ 300 DPI）的自动换行与安全留白。
- **裁切线与脚标**：四角外延式 `#CCCCCC` 浅灰色十字裁切标线（不伤照片），支持打印姓名/规格微型脚标，方便剪裁后分发归属。
- **一键输出**：支持多页 300 DPI 原尺寸冲印文件导出及浏览器原生调用打印机。

### 6. 离线 PWA 支持
- 配置 Service Worker 与 Cache API，对静态资产与 Wasm 文件进行缓存，首访后完全支持无网离线运行。

---

## 🚀 快速启动与部署

### 方式一：Docker Compose 一键启动 (推荐)

进入 `v1.0.0` 目录启动：
```bash
cd v1.0.0
docker compose up -d --build
```
启动后访问：
- **电脑本机直接访问**：`http://localhost:8080`
- **手机/局域网访问**：`https://<局域网IP>:8443` *(满足移动端调用相机与 WebGPU 的安全上下文要求，容器内置 10 年自签名证书)*

---

### 方式二：本地前端调试开发

```bash
cd v1.0.0

# 1. 安装依赖
pnpm install

# 2. 启动开发服务器 (自动开启跨域隔离 COOP/COEP)
pnpm run dev

# 3. 构建生产包
pnpm run build
```

---

## 📂 项目结构

```text
├── README.md                         # 项目总说明与开源协议
├── v1.0.0/                           # 当前正式版本归档
│   ├── AGENT_PROJECT_GUIDE.md        # 面向智能体/开发者的架构与实现自说明
│   ├── docker-compose.yml            # 容器编排文件
│   ├── docker/
│   │   ├── Dockerfile                # 基于 node 编译与 nginx:alpine 运行的多阶段镜像
│   │   ├── Dockerfile.quick          # 极速轻量构建镜像
│   │   ├── nginx.conf                # 跨域隔离 COOP/COEP 响应头、HTTPS、Wasm 支持
│   │   ├── entrypoint.sh             # 证书自动生成与安全启动入口
│   │   ├── generate-ssl.sh           # 自签证书脚本 (Linux)
│   │   └── generate-ssl.bat          # 自签证书脚本 (Windows)
│   ├── src/
│   │   ├── components/
│   │   │   ├── PhotoStudio.vue       # 证件照核心工作台 (上传/拍照/拖拽/对齐/换底)
│   │   │   ├── PhotoTray.vue         # 多人照片待印托盘、张数计数器
│   │   │   ├── ExportModal.vue       # 单张精准 KB 二分压缩与 300 DPI 导出
│   │   │   └── PrintLayoutModal.vue  # 6寸/A4 自动混排拼版、十字裁切线、脚标
│   │   ├── core/
│   │   │   ├── specs.ts              # 规格库定义与 mm-px 300 DPI 换算
│   │   │   ├── dpiWriter.ts          # 纯前端 JPEG JFIF 300 DPI 二进制注入器
│   │   │   ├── compressor.ts         # 二分法目标体积压缩算法
│   │   │   ├── realtimeSegmenter.ts  # MediaPipe 实时低功耗预览分割 (15fps)
│   │   │   ├── hdMattingEngine.ts    # ONNX Runtime (WebGPU/Wasm) 高精抠图
│   │   │   └── packingAlgorithm.ts   # 多人多规格相纸二维流式拼版算法
│   │   ├── App.vue                   # 主入口与全局协调
│   │   └── main.ts
│   ├── package.json
│   └── vite.config.ts
```

---

## 📄 开源许可证

本项目遵循 [MIT License](LICENSE) 开源协议。
