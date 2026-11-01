<template>
  <div class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 overflow-hidden">
    <!-- 顶部导航与相纸设置 -->
    <header class="w-full flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3 shadow-lg">
      <div class="flex items-center space-x-3">
        <Printer class="w-5 h-5 text-blue-400" />
        <h2 class="text-sm sm:text-base font-bold text-slate-100">智能多人混排拼版工作台</h2>
      </div>

      <div class="flex items-center space-x-3">
        <!-- 纸张选择 -->
        <select
          v-model="selectedPaperId"
          @change="repack"
          class="bg-slate-800 border border-slate-700 text-xs text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option v-for="paper in papers" :key="paper.id" :value="paper.id">
            {{ paper.name }}
          </option>
        </select>

        <button
          @click="$emit('close')"
          class="p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
        >
          <X class="w-5 h-5" />
        </button>
      </div>
    </header>

    <!-- 中部拼版高分辨率画布视口 -->
    <main class="flex-1 w-full my-3 flex items-center justify-center overflow-auto p-2">
      <div v-if="isPacking" class="flex flex-col items-center justify-center text-slate-400 space-y-2">
        <Loader2 class="w-8 h-8 animate-spin text-blue-500" />
        <span class="text-xs">正在计算最优拼版装箱...</span>
      </div>

      <div
        v-else-if="pages.length > 0"
        class="relative flex flex-col items-center max-h-full max-w-full"
      >
        <!-- 纸张缩略居中渲染容器 (以 300 DPI 纸张比例展示) -->
        <div class="bg-white rounded-lg shadow-2xl p-1 border-2 border-slate-700 overflow-hidden flex items-center justify-center">
          <canvas
            ref="displayCanvasRef"
            class="max-h-[60vh] max-w-[85vw] object-contain shadow-inner"
          ></canvas>
        </div>

        <!-- 多页切换控制 (若超出单页) -->
        <div v-if="pages.length > 1" class="flex items-center space-x-3 mt-3 bg-slate-900/90 px-3 py-1.5 rounded-full border border-slate-800">
          <button
            @click="prevPage"
            :disabled="currentPageIdx === 0"
            class="px-2 py-0.5 rounded text-xs text-slate-300 disabled:opacity-30 hover:bg-slate-800"
          >
            上一页
          </button>
          <span class="text-xs font-medium text-slate-400">
            第 {{ currentPageIdx + 1 }} / {{ pages.length }} 页
          </span>
          <button
            @click="nextPage"
            :disabled="currentPageIdx === pages.length - 1"
            class="px-2 py-0.5 rounded text-xs text-slate-300 disabled:opacity-30 hover:bg-slate-800"
          >
            下一页
          </button>
        </div>
      </div>
    </main>

    <!-- 底部功能面板：排版选项、辅助线开关与一键导出 -->
    <footer class="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
      <!-- 选项开关 -->
      <div class="flex items-center space-x-4 text-xs text-slate-300">
        <label class="flex items-center space-x-1.5 cursor-pointer">
          <input
            type="checkbox"
            v-model="options.showCutLines"
            @change="repack"
            class="rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0"
          />
          <span>浅灰十字裁切线 (#CCCCCC)</span>
        </label>

        <label class="flex items-center space-x-1.5 cursor-pointer">
          <input
            type="checkbox"
            v-model="options.showFootnote"
            @change="repack"
            class="rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0"
          />
          <span>姓名/规格微型脚标</span>
        </label>
      </div>

      <!-- 操作按钮群 -->
      <div class="flex items-center space-x-3">
        <button
          @click="printDirectly"
          class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition flex items-center space-x-1.5"
        >
          <Printer class="w-4 h-4" />
          <span>系统原生打印</span>
        </button>

        <button
          @click="downloadCurrentPage"
          class="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5"
        >
          <Download class="w-4 h-4" />
          <span>下载 300 DPI 冲印原图 (第 {{ currentPageIdx + 1 }} 页)</span>
        </button>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, nextTick } from 'vue';
import { Printer, X, Download, Loader2 } from 'lucide-vue-next';
import { TrayItem, PaperSpec, PrintPackingOptions } from '../types';
import { PRESET_PAPERS } from '../core/specs';
import { PrintPackingEngine, PackedPage } from '../core/packingAlgorithm';

const props = defineProps<{
  items: TrayItem[];
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const papers = ref<PaperSpec[]>(PRESET_PAPERS);
const selectedPaperId = ref<string>(PRESET_PAPERS[0].id); // 默认标准 6 寸横版

const options = reactive<PrintPackingOptions>({
  paper: PRESET_PAPERS[0],
  marginMm: 4,
  gapMm: 3,
  showCutLines: true,
  showFootnote: true,
  cutLineOffsetPx: 4,
  cutLineLengthPx: 14
});

const isPacking = ref(false);
const pages = ref<PackedPage[]>([]);
const currentPageIdx = ref(0);
const displayCanvasRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  repack();
});

async function repack() {
  const paper = papers.value.find(p => p.id === selectedPaperId.value) || PRESET_PAPERS[0];
  options.paper = paper;

  isPacking.value = true;
  try {
    pages.value = await PrintPackingEngine.generatePrintPages(props.items, options);
    currentPageIdx.value = 0;
    await nextTick();
    updateDisplayCanvas();
  } catch (err) {
    console.error('混排拼版错误:', err);
  } finally {
    isPacking.value = false;
  }
}

function updateDisplayCanvas() {
  if (pages.value.length === 0 || !displayCanvasRef.value) return;
  const page = pages.value[currentPageIdx.value];
  const targetCanvas = displayCanvasRef.value;
  targetCanvas.width = page.canvas.width;
  targetCanvas.height = page.canvas.height;
  const ctx = targetCanvas.getContext('2d');
  if (ctx) {
    ctx.drawImage(page.canvas, 0, 0);
  }
}

function prevPage() {
  if (currentPageIdx.value > 0) {
    currentPageIdx.value--;
    updateDisplayCanvas();
  }
}

function nextPage() {
  if (currentPageIdx.value < pages.value.length - 1) {
    currentPageIdx.value++;
    updateDisplayCanvas();
  }
}

async function downloadCurrentPage() {
  if (pages.value.length === 0) return;
  const page = pages.value[currentPageIdx.value];
  const blob = await PrintPackingEngine.exportPageAs300DpiBlob(page.canvas);

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `证件照混排打印_${options.paper.name}_第${currentPageIdx.value + 1}页_300DPI.jpg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function printDirectly() {
  if (pages.value.length === 0) return;
  const page = pages.value[currentPageIdx.value];
  const dataUrl = page.canvas.toDataURL('image/jpeg', 1.0);

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('请允许弹出窗口以调用原生打印');
    return;
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>打印证件照拼版</title>
        <style>
          @page {
            size: ${options.paper.widthMm}mm ${options.paper.heightMm}mm;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          img {
            width: ${options.paper.widthMm}mm;
            height: ${options.paper.heightMm}mm;
            display: block;
          }
        </style>
      </head>
      <body>
        <img src="${dataUrl}" onload="window.print();window.close();" />
      </body>
    </html>
  `);
  printWindow.document.close();
}
</script>
