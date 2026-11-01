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
- **预设规格库**：
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

## 🐳 Docker Compose 部署完全指南 (推荐)

项目容器内置了轻量化 Nginx Alpine，并特别配置了**跨域隔离安全响应头（COOP / COEP）**，支持现代浏览器端侧多线程极速推理。

### 1. 标准 `docker-compose.yml` 完整配置

如果您需要将本服务部署在个人电脑、私有服务器或家用 NAS（如群晖 Synology、威联通 QNAP、绿联、极空间、Unraid、1Panel、Portainer 等）上，可直接使用以下编排配置：

```yaml
version: '3.8'

services:
  offline-idphoto:
    # 构建上下文与轻量镜像定义
    build:
      context: ./v1.0.0
      dockerfile: docker/Dockerfile.quick
    container_name: offline-idphoto
    restart: always
    ports:
      # 格式为 "宿主机访问端口 : 容器内部端口"
      - "8080:80"    # HTTP 访问入口：适合电脑本机浏览器使用 (http://localhost:8080)
      - "8443:443"   # HTTPS 访问入口：适合局域网移动端拍照使用 (https://<宿主机IP>:8443)
    volumes:
      # SSL 证书持久化挂载目录：
      # - 模式 A (零配置开箱即用)：初次启动若该目录为空，容器启动脚本会自动生成 10 年有效期的自签证书。
      # - 模式 B (自有域名证书)：将您的 cert.pem 与 key.pem 放入此挂载目录即可实现无缝替换。
      - ./v1.0.0/docker/certs:/etc/nginx/certs
    environment:
      - TZ=Asia/Shanghai
```

---

### 2. 命令行极速部署步骤 (3 步搞定)

#### 第 1 步：克隆仓库并进入目录
```bash
git clone https://github.com/mysecret2022/offline-idphoto.git
cd offline-idphoto
```

#### 第 2 步：一键构建并启动容器
```bash
docker compose up -d --build
```
> *(注：构建采用轻量化产物镜像，约 3~5 秒即可构建完成并启动。)*

#### 第 3 步：在浏览器中访问使用
- **电脑本机访问（HTTP）**：  
  在浏览器中打开：👉 **`http://localhost:8080`**
- **手机 / 平板 / 局域网其他设备访问（HTTPS）**：  
  在移动端浏览器中打开：👉 **`https://<您的宿主机局域网IP>:8443`**  
  *(例如：`https://192.168.1.100:8443`)*

---

### 3. 为什么同时提供 8080 (HTTP) 与 8443 (HTTPS) 端口？

| 访问端口 | 访问协议 | 典型适用场景 | 摄像头与 WebGPU 支持说明 |
| :--- | :--- | :--- | :--- |
| **8080** | HTTP | 本地电脑（Windows / Mac）浏览器访问 | 浏览器默认将 `localhost` 和 `127.0.0.1` 判定为安全上下文（Secure Context），无需配置证书即可直接调用摄像头拍照并开启 GPU 加速。 |
| **8443** | HTTPS | 手机、iPad、局域网内其他设备跨机访问 | **移动端核心要求**：苹果 iOS Safari 与安卓 Chrome 在跨设备访问非 localhost 地址时，**强制要求使用 HTTPS 协议**，否则直接禁用摄像头拍照（`getUserMedia`）与 WebGPU。容器已内置自签安全证书，手机首次打开点击“高级 ➔ 继续前往”即可授权调用相机！ |

---

### 4. 常见管理与运维命令

| 操作需求 | 执行命令 | 说明 |
| :--- | :--- | :--- |
| **查看运行状态** | `docker compose ps` | 查看容器是否正在正常运行（状态为 `Up`） |
| **查看运行日志** | `docker compose logs -f` | 实时查看 Nginx 访问与证书初始化日志 |
| **重启容器** | `docker compose restart` | 快速重启服务 |
| **更新版本并重新构建** | `docker compose up -d --build` | 代码修改后快速构建并无缝更新运行 |
| **停止并退出容器** | `docker compose down` | 停止并释放容器网络与端口占用 |

---

### 5. 在 NAS / 面板（1Panel / Portainer / 群晖）中图形化部署

如果您使用 Web 图形界面管理容器：
1. **1Panel / Portainer**：
   - 进入【容器】➔【编排 / Compose】➔【创建编排】；
   - 填入名称 `offline-idphoto`，将上文中的 `docker-compose.yml` 贴入编辑框；
   - 点击【创建并启动】即可。
2. **群晖 Synology Container Manager**：
   - 打开【Container Manager】➔【项目】➔【新增】；
   - 设定项目名称并上传/粘贴上述 `docker-compose.yml`；
   - 端口设置好映射（8080 与 8443），点击完成即可在群晖上常驻运行。

---

## 🛠️ 本地前端源码调试开发 (无 Docker 环境)

如果您希望对前端 Vue 源码进行二次开发或本地调试：

```bash
cd v1.0.0

# 1. 安装项目依赖
pnpm install

# 2. 启动本地开发热重载服务器 (自动开启跨域隔离 COOP/COEP)
pnpm run dev

# 3. 编译生产静态包
pnpm run build
```

---

## 📂 项目文件树总览

```text
├── README.md                         # 项目总说明与 Docker Compose 完全指南
├── docker-compose.yml                # 根目录快速启动编排文件
├── LICENSE                           # MIT 开源许可证
└── v1.0.0/                           # 正式版本归档
    ├── AGENT_PROJECT_GUIDE.md        # 面向智能体/开发者的架构自说明文档
    ├── docker-compose.yml            # 版本内容器编排定义
    ├── docker/
    │   ├── Dockerfile                # 基于 node 编译与 nginx:alpine 的多阶段构建镜像
    │   ├── Dockerfile.quick          # 极速轻量构建镜像 (基于预编译产物)
    │   ├── nginx.conf                # 跨域隔离安全响应头、HTTP/HTTPS、Wasm MIME
    │   ├── entrypoint.sh             # 容器启动自检与 10 年自签证书自动生成
    │   ├── generate-ssl.sh           # 自签证书脚本 (Linux/macOS)
    │   └── generate-ssl.bat          # 自签证书脚本 (Windows)
    ├── dist/                         # 预编译静态分发资产 (含 WebAssembly 二进制)
    ├── src/
    │   ├── components/
    │   │   ├── PhotoStudio.vue       # 证件照核心工作台 (上传/拍照/拖拽/对齐/换底)
    │   │   ├── PhotoTray.vue         # 多人照片待印托盘、张数计数器
    │   │   ├── ExportModal.vue       # 单张精准 KB 二分压缩与 300 DPI 导出
    │   │   └── PrintLayoutModal.vue  # 6寸/A4 自动混排拼版、十字裁切线、脚标
    │   ├── core/
    │   │   ├── specs.ts              # 规格库定义与 mm-px 300 DPI 换算
    │   │   ├── dpiWriter.ts          # 纯前端 JPEG JFIF 300 DPI 二进制注入器
    │   │   ├── compressor.ts         # 二分法目标体积压缩算法
    │   │   ├── realtimeSegmenter.ts  # MediaPipe 实时低功耗预览分割 (15fps)
    │   │   ├── hdMattingEngine.ts    # ONNX Runtime (WebGPU/Wasm) 高精抠图
    │   │   └── packingAlgorithm.ts   # 多人多规格相纸二维流式拼版算法
    │   ├── App.vue                   # 根组件
    │   └── main.ts
    ├── package.json
    └── vite.config.ts
```

---

## ❓ 常见问题排查 (FAQ)

### Q1: 手机打开后提示“无法使用相机”或画面黑屏？
- **原因**：移动端浏览器（Safari / Chrome）对安全上下文有严格限制，若通过 `http://` 访问外部 IP，系统会直接禁用摄像头硬件 API。
- **解决方法**：请务必在手机端使用 **`https://<IP>:8443`**（注意协议是 `https`，端口是 `8443`）。首次打开出现安全证书警告属于正常现象，点击“高级 ➔ 继续访问”即可正常授权摄像头拍照。

### Q2: 提示端口冲突（例如 8080 或 8443 已被占用）？
- **解决方法**：修改 `docker-compose.yml` 中的端口映射，仅需修改冒号左侧的宿主机端口即可，例如改为：
  ```yaml
  ports:
    - "8090:80"    # 改为本机 8090 端口访问
    - "9443:443"   # 改为本机 9443 端口访问
  ```

### Q3: 导出的照片上传到某些报名系统提示“DPI 不足”？
- **解答**：本系统导出的所有证件照均经过纯前端二进制 JFIF 标头注入，将物理分辨率标记严格设置为 **300 DPI**。您可以在 Windows 上右键照片 ➔【属性】➔【详细信息】中直接核对水平与垂直分辨率，100% 满足各类国考、教资与签证系统的冲印质检标准。

---

## 📄 开源许可证

本项目遵循 [MIT License](LICENSE) 开源协议。
