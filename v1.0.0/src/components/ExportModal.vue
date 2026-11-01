<template>
  <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
    <div class="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden flex flex-col shadow-2xl">
      <!-- 头部 -->
      <div class="flex items-center justify-between px-5 py-3.5 border-b border-slate-800">
        <h3 class="text-sm font-bold text-slate-100 flex items-center space-x-2">
          <span>单张证件照导出与合规压缩</span>
        </h3>
        <button @click="$emit('close')" class="text-slate-400 hover:text-white p-1">
          <X class="w-5 h-5" />
        </button>
      </div>

      <div class="p-5 space-y-4 overflow-y-auto max-h-[75vh]">
        <!-- 预览图区 -->
        <div class="flex justify-center bg-slate-950 p-4 rounded-xl border border-slate-800 relative">
          <img
            :src="resultPreviewUrl || item.previewUrl"
            class="max-h-56 object-contain rounded shadow-lg border border-slate-700"
          />
          <div class="absolute bottom-6 right-6 bg-slate-900/90 border border-slate-700 px-2 py-1 rounded text-[11px] text-blue-400 font-mono">
            300 DPI 物理打印标记已注入
          </div>
        </div>

        <!-- 规格信息卡片 -->
        <div class="grid grid-cols-3 gap-2 text-center text-xs">
          <div class="bg-slate-800/60 p-2.5 rounded-xl border border-slate-800">
            <span class="block text-slate-400 text-[10px]">物理尺寸</span>
            <span class="font-semibold text-slate-200">{{ item.spec.widthMm }} × {{ item.spec.heightMm }} mm</span>
          </div>
          <div class="bg-slate-800/60 p-2.5 rounded-xl border border-slate-800">
            <span class="block text-slate-400 text-[10px]">像素分辨率</span>
            <span class="font-semibold text-slate-200">{{ item.spec.widthPx }} × {{ item.spec.heightPx }} px</span>
          </div>
          <div class="bg-slate-800/60 p-2.5 rounded-xl border border-slate-800">
            <span class="block text-slate-400 text-[10px]">实际体积</span>
            <span class="font-semibold text-emerald-400">{{ compressedSizeKb ? `${compressedSizeKb} KB` : '计算中...' }}</span>
          </div>
        </div>

        <!-- 目标文件体积 (KB) 精准二分压缩控制 -->
        <div class="bg-slate-800/40 p-3.5 rounded-xl border border-slate-800 space-y-3">
          <div class="flex items-center justify-between">
            <label class="text-xs font-semibold text-slate-300">目标文件大小限制 (KB)</label>
            <span class="text-xs text-blue-400 font-mono font-medium">≤ {{ targetKb }} KB</span>
          </div>

          <!-- 预设常用报名考试限制 -->
          <div class="flex items-center space-x-2">
            <button
              v-for="preset in [20, 30, 50, 100, 200]"
              :key="preset"
              @click="setTargetKb(preset)"
              class="px-2.5 py-1 rounded-lg text-xs font-medium transition"
              :class="targetKb === preset ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-slate-200'"
            >
              {{ preset }}K
            </button>
          </div>

          <!-- 滑块精确调节 -->
          <input
            v-model.number="targetKb"
            type="range"
            min="10"
            max="300"
            step="5"
            @change="recompress"
            class="w-full accent-blue-500 cursor-pointer"
          />

          <!-- 压缩收敛指标 -->
          <div v-if="compressionStats" class="text-[11px] text-slate-400 flex items-center justify-between pt-1">
            <span>二分逼近质量: {{ Math.round(compressionStats.quality * 100) }}%</span>
            <span>迭代收敛: {{ compressionStats.iterations }} 次</span>
          </div>
        </div>

        <!-- 微调美化控制 (亮度与对比度) -->
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs text-slate-400">
            <span>画面亮度</span>
            <span>{{ brightness }}%</span>
          </div>
          <input
            v-model.number="brightness"
            type="range"
            min="80"
            max="120"
            @change="recompress"
            class="w-full accent-blue-500 cursor-pointer"
          />
        </div>
      </div>

      <!-- 底部操作按钮 -->
      <div class="p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-end space-x-3">
        <button
          @click="$emit('close')"
          class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"
        >
          取消
        </button>
        <button
          @click="downloadFinalImage"
          :disabled="isCompressing"
          class="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5 disabled:opacity-50"
        >
          <Download class="w-4 h-4" />
          <span>{{ isCompressing ? '压缩计算中...' : '下载无损 300 DPI 照' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { X, Download } from 'lucide-vue-next';
import { TrayItem } from '../types';
import { PrintPackingEngine } from '../core/packingAlgorithm';
import { compressCanvasToTargetKb, CompressResult } from '../core/compressor';

const props = defineProps<{
  item: TrayItem;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const targetKb = ref<number>(50); // 默认 50KB (国考、各类报名最常用)
const brightness = ref<number>(100);
const isCompressing = ref(false);
const compressedSizeKb = ref<number>(0);
const compressionStats = ref<CompressResult | null>(null);
const resultPreviewUrl = ref<string>('');
let finalBlob: Blob | null = null;

onMounted(() => {
  recompress();
});

function setTargetKb(kb: number) {
  targetKb.value = kb;
  recompress();
}

async function recompress() {
  isCompressing.value = true;
  try {
    // 1. 生成带有底色的基准 Canvas
    const baseCanvas = await PrintPackingEngine.renderItemToCanvas(props.item);

    // 2. 若有亮度微调，应用滤镜
    let canvasToCompress = baseCanvas;
    if (brightness.value !== 100) {
      const adjustedCanvas = document.createElement('canvas');
      adjustedCanvas.width = baseCanvas.width;
      adjustedCanvas.height = baseCanvas.height;
      const ctx = adjustedCanvas.getContext('2d');
      if (ctx) {
        ctx.filter = `brightness(${brightness.value}%)`;
        ctx.drawImage(baseCanvas, 0, 0);
        canvasToCompress = adjustedCanvas;
      }
    }

    // 3. 执行二分动态体积压缩并写入 300 DPI JFIF
    const result = await compressCanvasToTargetKb(canvasToCompress, {
      targetKb: targetKb.value,
      toleranceKb: 2,
      maxIterations: 6,
      dpi: 300
    });

    compressionStats.value = result;
    compressedSizeKb.value = result.sizeKb;
    finalBlob = result.blob;

    if (resultPreviewUrl.value) {
      URL.revokeObjectURL(resultPreviewUrl.value);
    }
    resultPreviewUrl.value = URL.createObjectURL(result.blob);
  } catch (err) {
    console.error('二分压缩错误:', err);
  } finally {
    isCompressing.value = false;
  }
}

function downloadFinalImage() {
  if (!finalBlob) return;
  const url = URL.createObjectURL(finalBlob);
  const a = document.createElement('a');
  a.href = url;
  const fileName = `${props.item.memberName || '证件照'}_${props.item.spec.name}_300DPI_${compressedSizeKb.value}KB.jpg`;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
</script>
