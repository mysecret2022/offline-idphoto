<template>
  <div class="relative w-full h-full flex flex-col items-center justify-between bg-slate-950 overflow-hidden select-none">
    <!-- 顶部状态栏与规格快速选择 -->
    <header class="w-full z-20 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-slate-900/90 to-transparent backdrop-blur-sm">
      <div class="flex items-center space-x-2">
        <div class="w-2.5 h-2.5 rounded-full" :class="isCameraActive ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'"></div>
        <span class="text-xs font-medium text-slate-300">
          {{ isCameraActive ? '本地离线算力 · 隐私安全' : '摄像头未连接' }}
        </span>
      </div>

      <!-- 规格下拉/切换 -->
      <div class="flex items-center space-x-2">
        <select
          v-model="selectedSpecId"
          @change="onSpecChange"
          class="bg-slate-800/80 border border-slate-700 text-xs text-slate-100 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option v-for="spec in presetSpecs" :key="spec.id" :value="spec.id">
            {{ spec.name }} ({{ spec.widthMm }}×{{ spec.heightMm }}mm)
          </option>
          <option value="custom">⚙️ 自定义尺寸...</option>
        </select>
        <button
          @click="toggleCameraFacing"
          title="翻转镜头"
          class="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
        >
          <RefreshCw class="w-4 h-4" />
        </button>
      </div>
    </header>

    <!-- 主视口：取景框与实时分割背景复合区 -->
    <div ref="containerRef" class="relative flex-1 w-full flex items-center justify-center p-4">
      <!-- 隐藏原生视频与实时计算 canvas -->
      <video
        ref="videoRef"
        playsinline
        autoplay
        muted
        class="hidden"
      ></video>

      <!-- 居中证件照取景框 (按选定规格严格等比缩放) -->
      <div
        class="relative rounded-xl overflow-hidden shadow-2xl transition-all duration-300 border-2 border-blue-500/80"
        :style="{
          width: viewfinderStyle.width,
          height: viewfinderStyle.height,
          aspectRatio: `${currentSpec.widthPx} / ${currentSpec.heightPx}`
        }"
      >
        <!-- 实时背景与人物合成 Canvas -->
        <canvas
          ref="previewCanvasRef"
          class="w-full h-full object-cover"
        ></canvas>

        <!-- 证件照标准引导遮罩 SVG (头顶留白、人脸椭圆、双肩对齐参考线) -->
        <svg
          class="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 140"
          preserveAspectRatio="none"
        >
          <!-- 头顶安全留白虚线 (距顶约 8%) -->
          <line x1="15" y1="12" x2="85" y2="12" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.8" />
          <text x="50" y="9" font-size="3.5" fill="#93c5fd" text-anchor="middle">头顶留白线</text>

          <!-- 椭圆标准人脸轮廓参考圈 -->
          <ellipse
            cx="50"
            cy="46"
            rx="24"
            ry="30"
            fill="none"
            stroke="#38bdf8"
            stroke-width="1.2"
            stroke-dasharray="4,3"
            opacity="0.85"
          />

          <!-- 眼睛水平参考线 -->
          <line x1="30" y1="44" x2="70" y2="44" stroke="#38bdf8" stroke-width="0.6" stroke-dasharray="2,2" opacity="0.6" />

          <!-- 双肩锁骨基准定位线 -->
          <path
            d="M 12 128 Q 30 92, 50 94 Q 70 92, 88 128"
            fill="none"
            stroke="#60a5fa"
            stroke-width="1.2"
            stroke-dasharray="4,3"
            opacity="0.8"
          />
          <text x="50" y="100" font-size="3.5" fill="#93c5fd" text-anchor="middle">双肩对齐基准</text>

          <!-- 居中垂直对称轴 -->
          <line x1="50" y1="5" x2="50" y2="135" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="2,4" opacity="0.4" />
        </svg>

        <!-- 实时处理加载指示 -->
        <div v-if="isProcessingSnapshot" class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 z-30">
          <Loader2 class="w-8 h-8 text-blue-400 animate-spin mb-2" />
          <span class="text-sm font-medium text-slate-200">{{ snapshotProgressStage }}</span>
          <div class="w-48 bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
            <div class="bg-blue-500 h-full transition-all duration-200" :style="{ width: `${snapshotProgress}%` }"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部控制区：前置底色选择器 + 拍照/上传按钮 -->
    <footer class="w-full z-20 flex flex-col items-center px-4 pb-6 pt-3 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent">
      <!-- 底色快速切换器 -->
      <div class="flex items-center space-x-3 mb-4 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-full backdrop-blur-md shadow-lg">
        <span class="text-xs text-slate-400">底色:</span>
        <button
          v-for="bg in bgColors"
          :key="bg.id"
          @click="selectBgColor(bg)"
          class="relative w-7 h-7 rounded-full flex items-center justify-center transition-transform"
          :class="[
            bg.previewClass,
            selectedBg.id === bg.id ? 'ring-2 ring-blue-400 scale-110' : 'hover:scale-105'
          ]"
          :title="bg.name"
        >
          <Check v-if="selectedBg.id === bg.id" class="w-3.5 h-3.5" :class="bg.id === 'bg_white' ? 'text-slate-800' : 'text-white'" />
        </button>
      </div>

      <!-- 拍摄主操作栏 -->
      <div class="w-full max-w-sm flex items-center justify-around">
        <!-- 本地相册上传 -->
        <label class="cursor-pointer p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition active:scale-95">
          <Upload class="w-6 h-6" />
          <input type="file" accept="image/*" class="hidden" @change="onLocalPhotoSelected" />
        </label>

        <!-- 快门大按钮 -->
        <button
          @click="triggerCapture"
          :disabled="isProcessingSnapshot"
          class="relative group p-1.5 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-500/30 active:scale-90 transition duration-150 disabled:opacity-50"
        >
          <div class="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-transparent group-hover:bg-white/10 transition">
            <div class="w-12 h-12 rounded-full bg-white group-active:scale-90 transition"></div>
          </div>
        </button>

        <!-- 待打印托盘快捷入口 -->
        <button
          @click="$emit('open-tray')"
          class="relative p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition active:scale-95"
        >
          <Layers class="w-6 h-6" />
          <span
            v-if="trayCount > 0"
            class="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-900"
          >
            {{ trayCount }}
          </span>
        </button>
      </div>
    </footer>

    <!-- 自定义规格弹窗 -->
    <div v-if="showCustomSpecModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div class="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-sm p-5 space-y-4">
        <h3 class="text-base font-semibold text-slate-100">自定义证件照尺寸</h3>
        <div class="space-y-3 text-xs">
          <div>
            <label class="block text-slate-400 mb-1">规格名称</label>
            <input v-model="customForm.name" placeholder="例如：护照签证特殊规格" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200" />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-slate-400 mb-1">宽度 (mm)</label>
              <input v-model.number="customForm.widthMm" type="number" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200" />
            </div>
            <div>
              <label class="block text-slate-400 mb-1">高度 (mm)</label>
              <input v-model.number="customForm.heightMm" type="number" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200" />
            </div>
          </div>
          <p class="text-[11px] text-slate-500">自动以 300 DPI 换算分辨率：{{ calculatedCustomPx }}</p>
        </div>
        <div class="flex justify-end space-x-2 pt-2">
          <button @click="showCustomSpecModal = false" class="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs">取消</button>
          <button @click="applyCustomSpec" class="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium">应用规格</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { RefreshCw, Upload, Layers, Check, Loader2 } from 'lucide-vue-next';
import { PhotoSpec, BgColorOption } from '../types';
import { PRESET_PHOTO_SPECS, PRESET_BG_COLORS, createCustomSpec, mmToPx } from '../core/specs';
import { RealtimeSegmenter } from '../core/realtimeSegmenter';
import { hdMattingEngine } from '../core/hdMattingEngine';

const props = defineProps<{
  trayCount: number;
}>();

const emit = defineEmits<{
  (e: 'photo-captured', payload: { originalBlob: Blob; cutoutBlob: Blob; spec: PhotoSpec; bg: BgColorOption }): void;
  (e: 'open-tray'): void;
}>();

const videoRef = ref<HTMLVideoElement | null>(null);
const previewCanvasRef = ref<HTMLCanvasElement | null>(null);
const containerRef = ref<HTMLDivElement | null>(null);

const presetSpecs = ref<PhotoSpec[]>(PRESET_PHOTO_SPECS);
const selectedSpecId = ref<string>(PRESET_PHOTO_SPECS[0].id);
const currentSpec = ref<PhotoSpec>(PRESET_PHOTO_SPECS[0]);

const bgColors = ref<BgColorOption[]>(PRESET_BG_COLORS);
const selectedBg = ref<BgColorOption>(PRESET_BG_COLORS[1]); // 默认标准蓝

const isCameraActive = ref(false);
const facingMode = ref<'user' | 'environment'>('user');
const mediaStream = ref<MediaStream | null>(null);

const isProcessingSnapshot = ref(false);
const snapshotProgress = ref(0);
const snapshotProgressStage = ref('');

const realtimeSegmenter = new RealtimeSegmenter();
let animationFrameId: number | null = null;
let lastMask: ImageBitmap | HTMLCanvasElement | null = null;

// 自定义规格表单
const showCustomSpecModal = ref(false);
const customForm = ref({
  name: '自定义规格',
  widthMm: 35,
  heightMm: 45
});

const calculatedCustomPx = computed(() => {
  const w = mmToPx(customForm.value.widthMm);
  const h = mmToPx(customForm.value.heightMm);
  return `${w} × ${h} px`;
});

// 计算取景框在当前视口下的自适应像素高宽
const viewfinderStyle = computed(() => {
  const spec = currentSpec.value;
  const ratio = spec.widthPx / spec.heightPx;
  // 视口可用空间约 80vh
  return {
    width: ratio < 1 ? `calc(62vh * ${ratio})` : '85vw',
    height: ratio < 1 ? '62vh' : `calc(85vw / ${ratio})`,
  };
});

// 初始化相机与实时分割
onMounted(async () => {
  await setupCamera();
  await setupRealtimeSegmentation();
  startRenderLoop();
});

onUnmounted(() => {
  stopCamera();
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  realtimeSegmenter.destroy();
});

async function setupCamera() {
  stopCamera();
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: facingMode.value,
        width: { ideal: 1920 },
        height: { ideal: 1080 }
      },
      audio: false
    });
    mediaStream.value = stream;
    if (videoRef.value) {
      videoRef.value.srcObject = stream;
      await videoRef.value.play();
      isCameraActive.value = true;
    }
  } catch (err) {
    console.warn('获取摄像头权限失败或不支持，切换为离线待命模式:', err);
    isCameraActive.value = false;
  }
}

function stopCamera() {
  if (mediaStream.value) {
    mediaStream.value.getTracks().forEach(t => t.stop());
    mediaStream.value = null;
  }
  isCameraActive.value = false;
}

async function toggleCameraFacing() {
  facingMode.value = facingMode.value === 'user' ? 'environment' : 'user';
  await setupCamera();
}

async function setupRealtimeSegmentation() {
  await realtimeSegmenter.init();
  realtimeSegmenter.setOnResult((mask) => {
    lastMask = mask;
  });
}

function startRenderLoop() {
  const render = async () => {
    if (videoRef.value && previewCanvasRef.value && videoRef.value.readyState >= 2) {
      const canvas = previewCanvasRef.value;
      const video = videoRef.value;

      // 动态匹配画质尺寸
      if (canvas.width !== currentSpec.value.widthPx || canvas.height !== currentSpec.value.heightPx) {
        canvas.width = currentSpec.value.widthPx;
        canvas.height = currentSpec.value.heightPx;
      }

      // 发起 15fps 节流分割
      realtimeSegmenter.sendFrame(video);

      // 若已有 mask，实时将人物扣入选定底色
      if (lastMask) {
        realtimeSegmenter.renderComposite(
          canvas,
          video,
          lastMask,
          selectedBg.value,
          facingMode.value === 'user'
        );
      } else {
        // 未就绪前直接画视频原图
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.save();
          if (facingMode.value === 'user') {
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
          }
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          ctx.restore();
        }
      }
    }
    animationFrameId = requestAnimationFrame(render);
  };
  animationFrameId = requestAnimationFrame(render);
}

function onSpecChange() {
  if (selectedSpecId.value === 'custom') {
    showCustomSpecModal.value = true;
    return;
  }
  const found = presetSpecs.value.find(s => s.id === selectedSpecId.value);
  if (found) {
    currentSpec.value = found;
  }
}

function applyCustomSpec() {
  const custom = createCustomSpec(
    customForm.value.name,
    customForm.value.widthMm,
    customForm.value.heightMm,
    'mm'
  );
  presetSpecs.value.push(custom);
  selectedSpecId.value = custom.id;
  currentSpec.value = custom;
  showCustomSpecModal.value = false;
}

function selectBgColor(bg: BgColorOption) {
  selectedBg.value = bg;
}

// 快门抓拍：获取单帧最高分辨率图像并启动高精抠图
async function triggerCapture() {
  if (!videoRef.value || isProcessingSnapshot.value) return;
  isProcessingSnapshot.value = true;
  snapshotProgress.value = 10;
  snapshotProgressStage.value = '正在捕获高清原始帧...';

  try {
    const video = videoRef.value;
    const captureCanvas = document.createElement('canvas');
    captureCanvas.width = video.videoWidth || currentSpec.value.widthPx;
    captureCanvas.height = video.videoHeight || currentSpec.value.heightPx;
    const ctx = captureCanvas.getContext('2d');
    if (!ctx) throw new Error('无法创建捕获上下文');

    if (facingMode.value === 'user') {
      ctx.translate(captureCanvas.width, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(video, 0, 0, captureCanvas.width, captureCanvas.height);

    // 转为原始 Blob
    const originalBlob: Blob = await new Promise((res, rej) => {
      captureCanvas.toBlob(b => b ? res(b) : rej(new Error('原始帧生成失败')), 'image/jpeg', 0.98);
    });

    // 调用高精抠图引擎
    const cutoutBlob = await hdMattingEngine.segmentHighDefinition(captureCanvas, (stage, progress) => {
      snapshotProgressStage.value = stage;
      snapshotProgress.value = progress;
    });

    emit('photo-captured', {
      originalBlob,
      cutoutBlob,
      spec: currentSpec.value,
      bg: selectedBg.value
    });
  } catch (err: any) {
    alert('拍摄与抠图发生异常: ' + (err.message || err));
  } finally {
    isProcessingSnapshot.value = false;
  }
}

// 本地相册图片选取
async function onLocalPhotoSelected(e: Event) {
  const input = e.target as HTMLInputElement;
  if (!input.files || input.files.length === 0) return;
  const file = input.files[0];

  isProcessingSnapshot.value = true;
  snapshotProgress.value = 15;
  snapshotProgressStage.value = '正在解析相册图片...';

  try {
    const img = await fileToImage(file);
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('无法解析图像');
    ctx.drawImage(img, 0, 0);

    const cutoutBlob = await hdMattingEngine.segmentHighDefinition(canvas, (stage, progress) => {
      snapshotProgressStage.value = stage;
      snapshotProgress.value = progress;
    });

    emit('photo-captured', {
      originalBlob: file,
      cutoutBlob,
      spec: currentSpec.value,
      bg: selectedBg.value
    });
  } catch (err: any) {
    alert('处理本地照片失败: ' + (err.message || err));
  } finally {
    isProcessingSnapshot.value = false;
    input.value = '';
  }
}

function fileToImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = reject;
    img.src = url;
  });
}
</script>
