<template>
  <div class="relative w-full h-full flex flex-col bg-slate-950 text-slate-100 overflow-hidden select-none">
    <!-- 顶部状态与规格导航栏 -->
    <header class="w-full z-20 flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md gap-2">
      <!-- 左侧：工作模式切换 -->
      <div class="flex items-center space-x-2">
        <div class="bg-slate-800 p-1 rounded-xl flex items-center border border-slate-700/80">
          <button
            @click="switchMode('upload')"
            class="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition"
            :class="currentMode === 'upload' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'"
          >
            <Upload class="w-3.5 h-3.5" />
            <span>上传/拖入照片</span>
          </button>
          <button
            @click="switchMode('camera')"
            class="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition"
            :class="currentMode === 'camera' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'"
          >
            <Camera class="w-3.5 h-3.5" />
            <span>自拍拍摄</span>
          </button>
        </div>

        <div class="hidden sm:flex items-center space-x-1 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2.5 py-1 rounded-full">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>100% 离线端侧处理 · 绝不上传服务器</span>
        </div>
      </div>

      <!-- 右侧：规格切换与托盘入口 -->
      <div class="flex items-center space-x-2">
        <!-- 规格选择器 -->
        <div class="flex items-center space-x-1.5 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1">
          <span class="text-xs text-slate-400">规格:</span>
          <select
            v-model="selectedSpecId"
            @change="onSpecChange"
            class="bg-transparent text-xs font-medium text-slate-100 focus:outline-none cursor-pointer"
          >
            <option v-for="spec in presetSpecs" :key="spec.id" :value="spec.id" class="bg-slate-800 text-slate-100">
              {{ spec.name }} ({{ spec.widthMm }}×{{ spec.heightMm }}mm)
            </option>
            <option value="custom" class="bg-slate-800 text-slate-100">⚙️ 自定义尺寸...</option>
          </select>
        </div>

        <!-- 待打印托盘入口 -->
        <button
          @click="$emit('open-tray')"
          class="relative flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
        >
          <Layers class="w-4 h-4 text-blue-400" />
          <span class="text-xs font-medium">托盘</span>
          <span
            v-if="trayCount > 0"
            class="ml-1 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full"
          >
            {{ trayCount }}
          </span>
        </button>

        <!-- 一键进入拼版打印 -->
        <button
          @click="$emit('open-packing')"
          :disabled="trayCount === 0"
          class="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-semibold shadow transition"
        >
          <Printer class="w-3.5 h-3.5" />
          <span class="hidden sm:inline">混排拼版</span>
        </button>
      </div>
    </header>

    <!-- 主操作区 -->
    <main class="flex-1 w-full flex flex-col md:flex-row items-center justify-between overflow-hidden p-2 sm:p-4 gap-4">
      
      <!-- 左侧/中央：画布交互视口 -->
      <section class="relative flex-1 w-full h-full min-h-[360px] flex items-center justify-center bg-slate-900/60 rounded-2xl border border-slate-800/80 overflow-hidden shadow-inner">
        
        <!-- A. 处于“上传模式”且尚未选择图片时：大号拖拽上传卡片 -->
        <div
          v-if="currentMode === 'upload' && !hasSourceImage"
          class="w-full max-w-md p-6 flex flex-col items-center justify-center text-center space-y-4 border-2 border-dashed border-slate-700 hover:border-blue-500 rounded-3xl bg-slate-900/40 transition cursor-pointer"
          @dragover.prevent="isDragging = true"
          @dragleave.prevent="isDragging = false"
          @drop.prevent="handleFileDrop"
          @click="triggerFileInput"
        >
          <input
            ref="fileInputRef"
            type="file"
            accept="image/*"
            class="hidden"
            @change="handleFileInputChange"
          />
          <div class="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <UploadCloud class="w-8 h-8" />
          </div>
          <div>
            <h3 class="text-base font-semibold text-slate-200">点击或将照片拖拽至此处</h3>
            <p class="text-xs text-slate-400 mt-1">支持 JPG / PNG / WebP 格式，也可直接使用 <kbd class="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">Ctrl + V</kbd> 粘贴</p>
          </div>
          <div class="text-[11px] text-slate-500 bg-slate-800/60 px-4 py-2 rounded-xl border border-slate-700/60 space-y-0.5 text-left w-full">
            <p class="font-medium text-slate-400">💡 拍摄或选图建议：</p>
            <p>1. 建议正面免冠，双肩自然平齐</p>
            <p>2. 光线明亮均匀，头发不遮挡眉毛与双耳</p>
            <p>3. 任何背景均可，系统会自动进行发丝级抠图换底</p>
          </div>
        </div>

        <!-- B. 处于“相机拍照模式”：实时自拍摄像头取景框 -->
        <div
          v-else-if="currentMode === 'camera'"
          class="relative flex flex-col items-center justify-center w-full h-full"
        >
          <!-- 隐藏原生视频 -->
          <video ref="cameraVideoRef" playsinline autoplay muted class="hidden"></video>

          <!-- 严格比例取景容器 -->
          <div
            class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/80 transition-all duration-300"
            :style="{
              width: viewfinderStyle.width,
              height: viewfinderStyle.height,
              aspectRatio: `${currentSpec.widthPx} / ${currentSpec.heightPx}`
            }"
          >
            <!-- 实时背景复合 Canvas -->
            <canvas ref="cameraCanvasRef" class="w-full h-full object-cover"></canvas>

            <!-- 证件照引导辅助线 -->
            <svg
              v-if="showGuideLines"
              class="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 140"
              preserveAspectRatio="none"
            >
              <line x1="15" y1="12" x2="85" y2="12" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.8" />
              <text x="50" y="9" font-size="3.5" fill="#93c5fd" text-anchor="middle">头顶留白区</text>
              <ellipse cx="50" cy="46" rx="24" ry="30" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.85" />
              <line x1="30" y1="44" x2="70" y2="44" stroke="#38bdf8" stroke-width="0.6" stroke-dasharray="2,2" opacity="0.6" />
              <path d="M 12 128 Q 30 92, 50 94 Q 70 92, 88 128" fill="none" stroke="#60a5fa" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.8" />
              <text x="50" y="100" font-size="3.5" fill="#93c5fd" text-anchor="middle">双肩对齐基准</text>
            </svg>
          </div>

          <!-- 相机快门控制栏 -->
          <div class="flex items-center space-x-4 mt-4">
            <button
              @click="toggleCameraFacing"
              class="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
              title="翻转镜头"
            >
              <RefreshCw class="w-5 h-5" />
            </button>
            <button
              @click="takeSnapshot"
              :disabled="isMatting"
              class="p-2 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-500/30 active:scale-90 transition disabled:opacity-50"
            >
              <div class="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center bg-transparent">
                <div class="w-10 h-10 rounded-full bg-white"></div>
              </div>
            </button>
          </div>
        </div>

        <!-- C. 处于“图片编辑模式”：支持拖拽平移、缩放对齐的交互视口 -->
        <div
          v-else
          class="relative flex flex-col items-center justify-center w-full h-full p-2"
          @wheel.prevent="handleWheelZoom"
        >
          <!-- 规格容器窗口 -->
          <div
            ref="viewportContainerRef"
            class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/80 cursor-grab active:cursor-grabbing transition-all duration-200"
            :style="{
              width: viewfinderStyle.width,
              height: viewfinderStyle.height,
              aspectRatio: `${currentSpec.widthPx} / ${currentSpec.heightPx}`
            }"
            @mousedown="startPan"
            @touchstart="startTouchPan"
          >
            <!-- 渲染主画布 -->
            <canvas ref="editorCanvasRef" class="w-full h-full block"></canvas>

            <!-- 证件照规范辅助定位虚线 -->
            <svg
              v-if="showGuideLines"
              class="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 140"
              preserveAspectRatio="none"
            >
              <line x1="15" y1="12" x2="85" y2="12" stroke="#60a5fa" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.8" />
              <text x="50" y="9" font-size="3.5" fill="#93c5fd" text-anchor="middle">头顶留白线</text>
              <ellipse cx="50" cy="46" rx="24" ry="30" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.85" />
              <line x1="30" y1="44" x2="70" y2="44" stroke="#38bdf8" stroke-width="0.6" stroke-dasharray="2,2" opacity="0.6" />
              <path d="M 12 128 Q 30 92, 50 94 Q 70 92, 88 128" fill="none" stroke="#60a5fa" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.8" />
              <text x="50" y="100" font-size="3.5" fill="#93c5fd" text-anchor="middle">双肩对准线</text>
              <line x1="50" y1="5" x2="50" y2="135" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="2,4" opacity="0.4" />
            </svg>
          </div>

          <!-- 画布浮动状态指示 -->
          <div class="flex items-center space-x-3 mt-3 text-xs text-slate-400">
            <span>🖱️ 拖拽平移画面</span>
            <span>·</span>
            <span>🔍 缩放大小: {{ zoomPercent }}%</span>
            <button @click="resetTransform" class="text-blue-400 hover:text-blue-300 underline text-[11px] ml-1">
              居中复位
            </button>
          </div>
        </div>

        <!-- 全局 AI 抠图进度蒙版 -->
        <div v-if="isMatting" class="absolute inset-0 z-40 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
          <Loader2 class="w-10 h-10 text-blue-500 animate-spin mb-3" />
          <h4 class="text-sm font-semibold text-slate-100">{{ mattingStage || 'AI 正在进行发丝级抠图...' }}</h4>
          <p class="text-xs text-slate-400 mt-1">本地端侧加速中，完全无需联网</p>
          <div class="w-48 bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div class="bg-blue-500 h-full transition-all duration-200" :style="{ width: `${mattingProgress}%` }"></div>
          </div>
        </div>
      </section>

      <!-- 右侧：控制面板 (规格信息、换底色、微调、单张下载、加入拼版) -->
      <aside class="w-full md:w-80 lg:w-96 flex flex-col justify-between bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 overflow-y-auto max-h-[85vh]">
        
        <!-- 规格信息卡片 -->
        <div class="bg-slate-800/70 border border-slate-700/70 rounded-xl p-3 space-y-1">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-200">{{ currentSpec.name }}</span>
            <span class="text-[11px] text-blue-400 font-mono">300 DPI</span>
          </div>
          <div class="flex items-center justify-between text-xs text-slate-400">
            <span>物理尺寸: {{ currentSpec.widthMm }} × {{ currentSpec.heightMm }} mm</span>
            <span>分辨率: {{ currentSpec.widthPx }} × {{ currentSpec.heightPx }} px</span>
          </div>
          <p class="text-[11px] text-slate-500">{{ currentSpec.description }}</p>
        </div>

        <!-- 1. AI 智能抠图换底模块 -->
        <div class="space-y-2.5 bg-slate-800/40 border border-slate-800 rounded-xl p-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-1.5">
              <Scissors class="w-4 h-4 text-blue-400" />
              <span class="text-xs font-semibold text-slate-200">AI 智能抠图与人物换底</span>
            </div>
            <div class="flex items-center space-x-1.5">
              <span
                v-if="cutoutBlob"
                class="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full flex items-center space-x-1"
              >
                <Check class="w-3 h-3" />
                <span>人像已分离</span>
              </span>
              <span
                v-else-if="isMatting"
                class="text-[10px] text-amber-400 animate-pulse flex items-center space-x-1"
              >
                <Loader2 class="w-3 h-3 animate-spin" />
                <span>AI 计算中...</span>
              </span>
              <button
                v-if="hasSourceImage && !isMatting"
                @click="performMatting(true)"
                class="text-[10px] text-blue-400 hover:text-blue-300 underline"
                title="重新运行本地 AI 发丝级抠图算法"
              >
                {{ cutoutBlob ? '重新抠图' : '一键AI抠图' }}
              </button>
            </div>
          </div>

          <!-- 底色选择按钮网格 -->
          <div class="grid grid-cols-4 gap-1.5">
            <button
              v-for="bg in bgColors"
              :key="bg.id"
              @click="applyBgColor(bg)"
              class="flex flex-col items-center justify-center p-1.5 rounded-xl border transition-all text-[11px]"
              :class="selectedBg.id === bg.id ? 'border-blue-500 bg-blue-950/50 text-blue-300 font-semibold shadow' : 'border-slate-800 hover:border-slate-700 bg-slate-800/60 text-slate-400'"
            >
              <span class="w-6 h-6 rounded-full mb-1 flex items-center justify-center shadow-sm" :class="bg.previewClass">
                <Check v-if="selectedBg.id === bg.id" class="w-3.5 h-3.5" :class="bg.id === 'bg_white' ? 'text-slate-900' : 'text-white'" />
              </span>
              <span class="truncate w-full text-center text-[10px]">{{ bg.name }}</span>
            </button>
          </div>
        </div>

        <!-- 2. 核心功能：AI 智能人像国标对齐 (自动头顶留白与人脸居中) -->
        <button
          v-if="hasSourceImage"
          @click="triggerAutoAlignment"
          class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/20 transition active:scale-95 group border border-blue-400/30"
        >
          <div class="flex items-center space-x-2 text-left">
            <Sparkles class="w-4 h-4 text-amber-300 animate-pulse" />
            <div>
              <div class="text-xs font-bold leading-tight flex items-center space-x-1">
                <span>AI 智能人脸国标对齐</span>
              </div>
              <div class="text-[10px] text-blue-100 opacity-90">头顶留白约8.5%，居中黄金比例</div>
            </div>
          </div>
          <span class="text-[11px] bg-white/20 group-hover:bg-white/30 px-2 py-0.5 rounded-full font-medium transition">一键对齐</span>
        </button>

        <!-- 3. 人像微调控制 (缩放滑块支持大范围放大与缩小、旋转、辅助线开关) -->
        <div v-if="hasSourceImage" class="space-y-3 bg-slate-800/40 border border-slate-800 rounded-xl p-3">
          <div class="flex items-center justify-between text-xs">
            <span class="font-medium text-slate-300">缩放大小 (可放大/缩小)</span>
            <button @click="resetTransform" class="text-[11px] text-blue-400 hover:text-blue-300 underline">
              复位 100%
            </button>
          </div>

          <!-- 滑块与缩小/放大按钮 -->
          <div class="flex items-center space-x-2">
            <button
              @click="zoomOut"
              class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
              title="缩小"
            >
              <ZoomOut class="w-3.5 h-3.5" />
            </button>
            <input
              v-model.number="zoomPercent"
              type="range"
              min="15"
              max="300"
              step="1"
              @input="onZoomSliderChange"
              class="flex-1 accent-blue-500 cursor-pointer"
            />
            <button
              @click="zoomIn"
              class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
              title="放大"
            >
              <ZoomIn class="w-3.5 h-3.5" />
            </button>
            <span class="w-10 text-right text-xs text-slate-300 font-mono">{{ zoomPercent }}%</span>
          </div>

          <div class="flex items-center justify-between pt-1">
            <button
              @click="rotateImage(-90)"
              class="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"
            >
              <RotateCcw class="w-3.5 h-3.5" />
              <span>左转90°</span>
            </button>
            <button
              @click="rotateImage(90)"
              class="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"
            >
              <RotateCw class="w-3.5 h-3.5" />
              <span>右转90°</span>
            </button>
            <label class="flex items-center space-x-1 text-xs text-slate-400 cursor-pointer">
              <input type="checkbox" v-model="showGuideLines" class="rounded bg-slate-800 border-slate-700 text-blue-500" />
              <span>参考线</span>
            </label>
          </div>
        </div>

        <!-- 3. 核心输出操作栏 -->
        <div class="space-y-2 pt-2 border-t border-slate-800">
          <div class="grid grid-cols-2 gap-2">
            <!-- 单张导出 / 精确压缩 -->
            <button
              @click="openSingleExport"
              :disabled="!hasSourceImage || isMatting"
              class="w-full flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs font-semibold border border-slate-700 transition"
            >
              <Download class="w-4 h-4 text-emerald-400" />
              <span>导出单张(压缩)</span>
            </button>

            <!-- 加入待印托盘 -->
            <button
              @click="addToTray"
              :disabled="!hasSourceImage || isMatting"
              class="w-full flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition"
            >
              <PlusCircle class="w-4 h-4" />
              <span>加入待印托盘</span>
            </button>
          </div>

          <button
            v-if="hasSourceImage"
            @click="triggerFileInput"
            class="w-full py-1.5 text-center text-xs text-slate-400 hover:text-slate-200 transition"
          >
            换一张照片...
          </button>
        </div>
      </aside>
    </main>

    <!-- 自定义规格弹窗 -->
    <div v-if="showCustomModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div class="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-sm p-5 space-y-4">
        <h3 class="text-sm font-bold text-slate-100">自定义证件照尺寸</h3>
        <div class="space-y-3 text-xs">
          <div>
            <label class="block text-slate-400 mb-1">规格名称</label>
            <input v-model="customForm.name" placeholder="例如：某报名考试特殊尺寸" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100" />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-slate-400 mb-1">宽度 (mm)</label>
              <input v-model.number="customForm.widthMm" type="number" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100" />
            </div>
            <div>
              <label class="block text-slate-400 mb-1">高度 (mm)</label>
              <input v-model.number="customForm.heightMm" type="number" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-100" />
            </div>
          </div>
          <p class="text-[11px] text-slate-400">自动以 300 DPI 换算分辨率：{{ calculatedCustomPx }}</p>
        </div>
        <div class="flex justify-end space-x-2 pt-2">
          <button @click="showCustomModal = false" class="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs">取消</button>
          <button @click="confirmCustomSpec" class="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold">确认并应用</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted, nextTick } from 'vue';
import {
  Upload, Camera, UploadCloud, RefreshCw, Layers, Printer, Download,
  PlusCircle, Check, RotateCcw, RotateCw, Loader2, Sparkles, ZoomIn, ZoomOut, Scissors
} from 'lucide-vue-next';
import { PhotoSpec, BgColorOption, TrayItem } from '../types';
import { PRESET_PHOTO_SPECS, PRESET_BG_COLORS, createCustomSpec, mmToPx } from '../core/specs';
import { RealtimeSegmenter } from '../core/realtimeSegmenter';
import { hdMattingEngine } from '../core/hdMattingEngine';
import { computeGoldenRatioAlignment } from '../core/faceAlignment';

const props = defineProps<{
  trayCount: number;
}>();

const emit = defineEmits<{
  (e: 'photo-added-to-tray', item: TrayItem): void;
  (e: 'open-single-export', item: TrayItem): void;
  (e: 'open-tray'): void;
  (e: 'open-packing'): void;
  (e: 'show-toast', msg: string): void;
}>();

// 状态定义
const currentMode = ref<'upload' | 'camera'>('upload');
const presetSpecs = ref<PhotoSpec[]>(PRESET_PHOTO_SPECS);
const selectedSpecId = ref<string>(PRESET_PHOTO_SPECS[0].id);
const currentSpec = ref<PhotoSpec>(PRESET_PHOTO_SPECS[0]);
const bgColors = ref<BgColorOption[]>(PRESET_BG_COLORS);
const selectedBg = ref<BgColorOption>(PRESET_BG_COLORS[2]); // 默认标准蓝

const showGuideLines = ref(true);
const isDragging = ref(false);
const isMatting = ref(false);
const mattingProgress = ref(0);
const mattingStage = ref('');

// 图片数据
const fileInputRef = ref<HTMLInputElement | null>(null);
const sourceImage = ref<HTMLImageElement | null>(null);
const originalBlob = ref<Blob | null>(null);
const cutoutBlob = ref<Blob | null>(null); // 透明人像 Blob
const hasSourceImage = computed(() => !!sourceImage.value);

// 画布引用
const editorCanvasRef = ref<HTMLCanvasElement | null>(null);
const viewportContainerRef = ref<HTMLDivElement | null>(null);

// 相机引用
const cameraVideoRef = ref<HTMLVideoElement | null>(null);
const cameraCanvasRef = ref<HTMLCanvasElement | null>(null);
const isCameraActive = ref(false);
const cameraFacing = ref<'user' | 'environment'>('user');
let cameraStream: MediaStream | null = null;
let cameraAnimFrame: number | null = null;
const realtimeSegmenter = new RealtimeSegmenter();
let lastCameraMask: ImageBitmap | HTMLCanvasElement | null = null;

// 画布变换状态 (拖拽平移与缩放)
const zoomPercent = ref<number>(100);
const baseFitScale = ref<number>(1.0);
const transform = reactive({
  scale: 1,
  x: 0,
  y: 0,
  rotation: 0 // 度数
});

let isPanning = false;
let startPanX = 0;
let startPanY = 0;
let initialTransformX = 0;
let initialTransformY = 0;

// 自定义规格表单
const showCustomModal = ref(false);
const customForm = reactive({
  name: '自定义规格',
  widthMm: 35,
  heightMm: 45
});
const calculatedCustomPx = computed(() => {
  const w = mmToPx(customForm.widthMm);
  const h = mmToPx(customForm.heightMm);
  return `${w} × ${h} px`;
});

// 计算自适应取景框大小
const viewfinderStyle = computed(() => {
  const spec = currentSpec.value;
  const ratio = spec.widthPx / spec.heightPx;
  return {
    width: ratio < 1 ? `calc(58vh * ${ratio})` : '78vw',
    height: ratio < 1 ? '58vh' : `calc(78vw / ${ratio})`,
  };
});

onMounted(() => {
  window.addEventListener('paste', handleWindowPaste);
  window.addEventListener('mousemove', onPanMove);
  window.addEventListener('mouseup', endPan);
  window.addEventListener('touchmove', onTouchPanMove);
  window.addEventListener('touchend', endPan);
});

onUnmounted(() => {
  window.removeEventListener('paste', handleWindowPaste);
  window.removeEventListener('mousemove', onPanMove);
  window.removeEventListener('mouseup', endPan);
  window.removeEventListener('touchmove', onTouchPanMove);
  window.removeEventListener('touchend', endPan);
  stopCamera();
});

// 模式切换
async function switchMode(mode: 'upload' | 'camera') {
  currentMode.value = mode;
  if (mode === 'camera') {
    await startCamera();
  } else {
    stopCamera();
    await nextTick();
    redrawEditor();
  }
}

// 规格切换
function onSpecChange() {
  if (selectedSpecId.value === 'custom') {
    showCustomModal.value = true;
    return;
  }
  const spec = presetSpecs.value.find(s => s.id === selectedSpecId.value);
  if (spec) {
    currentSpec.value = spec;
    triggerAutoAlignment();
  }
}

function confirmCustomSpec() {
  const custom = createCustomSpec(customForm.name, customForm.widthMm, customForm.heightMm, 'mm');
  presetSpecs.value.push(custom);
  selectedSpecId.value = custom.id;
  currentSpec.value = custom;
  showCustomModal.value = false;
  resetTransform();
}

// 文件选择与拖拽处理
function triggerFileInput() {
  fileInputRef.value?.click();
}

function handleFileInputChange(e: Event) {
  const input = e.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    loadFile(input.files[0]);
  }
  input.value = '';
}

function handleFileDrop(e: DragEvent) {
  isDragging.value = false;
  if (e.dataTransfer?.files && e.dataTransfer.files[0]) {
    loadFile(e.dataTransfer.files[0]);
  }
}

function handleWindowPaste(e: ClipboardEvent) {
  if (!e.clipboardData) return;
  const items = e.clipboardData.items;
  for (let i = 0; i < items.length; i++) {
    if (items[i].type.startsWith('image/')) {
      const file = items[i].getAsFile();
      if (file) {
        loadFile(file);
        break;
      }
    }
  }
}

// 加载图片文件并自动初始化
async function loadFile(file: File | Blob) {
  originalBlob.value = file;
  cutoutBlob.value = null; // 重置抠图缓存
  currentCutoutImg = null;

  const url = URL.createObjectURL(file);
  const img = new Image();
  img.onload = async () => {
    sourceImage.value = img;
    currentMode.value = 'upload';
    resetTransform();
    await nextTick();
    redrawEditor();

    // 如果选中的不是“原图背景”，自动触发智能抠图
    if (selectedBg.value.value !== 'original') {
      await performMatting();
    }
  };
  img.src = url;
}

// 执行本地端侧发丝级抠图
async function performMatting(force: boolean = false) {
  if (!sourceImage.value || isMatting.value) return;
  if (!force && cutoutBlob.value) return;

  isMatting.value = true;
  mattingProgress.value = 10;
  mattingStage.value = '正在加载 AI 抠图引擎...';

  try {
    const canvas = document.createElement('canvas');
    canvas.width = sourceImage.value.naturalWidth;
    canvas.height = sourceImage.value.naturalHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('无法创建离屏图层');
    ctx.drawImage(sourceImage.value, 0, 0);

    const blob = await hdMattingEngine.segmentHighDefinition(canvas, (stage, progress) => {
      mattingStage.value = stage;
      mattingProgress.value = progress;
    });

    // 预载入抠图结果为 Image，确保在 Canvas 绘制时不闪烁、零延迟
    const imgUrl = URL.createObjectURL(blob);
    const newCutoutImg = new Image();
    await new Promise((resolve, reject) => {
      newCutoutImg.onload = resolve;
      newCutoutImg.onerror = reject;
      newCutoutImg.src = imgUrl;
    });

    currentCutoutImg = newCutoutImg;
    cutoutBlob.value = blob;
    emit('show-toast', '本地 AI 发丝级抠图已完成');
  } catch (err: any) {
    console.error('抠图失败:', err);
    emit('show-toast', '抠图提示: 请保持原图或重新调整');
  } finally {
    isMatting.value = false;
    await triggerAutoAlignment();
    await nextTick();
    redrawEditor();
  }
}

// 切换背景颜色
async function applyBgColor(bg: BgColorOption) {
  selectedBg.value = bg;
  if (bg.value !== 'original') {
    if (!cutoutBlob.value && sourceImage.value) {
      await performMatting();
    } else {
      redrawEditor();
    }
  } else {
    redrawEditor();
  }
}

// AI 智能人像国标对齐 (依据头顶留白 8.5% 与人脸黄金比例)
async function triggerAutoAlignment() {
  if (!sourceImage.value) return;
  const targetBlob = cutoutBlob.value || originalBlob.value;
  if (!targetBlob) return;

  try {
    const result = await computeGoldenRatioAlignment(sourceImage.value, targetBlob, currentSpec.value);
    transform.scale = result.scale;
    transform.x = result.x;
    transform.y = result.y;
    transform.rotation = 0;
    if (baseFitScale.value > 0) {
      zoomPercent.value = Math.round((result.scale / baseFitScale.value) * 100);
    }
    await nextTick();
    redrawEditor();
    if (result.success) {
      emit('show-toast', `已按国家证件照标准自动对齐（头顶留白约8.5%，人脸垂直居中）`);
    }
  } catch (err) {
    console.warn('自动对齐计算失败，恢复默认居中:', err);
    resetTransform();
  }
}

// 重置位置与缩放至黄金对齐比例
function resetTransform() {
  if (!sourceImage.value) return;
  const spec = currentSpec.value;
  const imgW = sourceImage.value.naturalWidth;
  const imgH = sourceImage.value.naturalHeight;

  // 默认使人像贴合画面
  const scaleW = spec.widthPx / imgW;
  const scaleH = spec.heightPx / imgH;
  baseFitScale.value = Math.max(scaleW, scaleH);
  zoomPercent.value = 100;

  transform.scale = baseFitScale.value * 1.05;
  transform.rotation = 0;
  transform.x = (spec.widthPx - imgW * transform.scale) / 2;
  transform.y = (spec.heightPx - imgH * transform.scale) * 0.45; // 居中略微偏上

  redrawEditor();
}

// 缩放控制核心函数（基于取景框中心平滑缩放）
function applyZoomPercent(percent: number) {
  if (!sourceImage.value) return;
  const spec = currentSpec.value;
  const imgW = sourceImage.value.naturalWidth;
  const imgH = sourceImage.value.naturalHeight;

  const oldScale = transform.scale;
  const targetScale = baseFitScale.value * (percent / 100);
  if (targetScale <= 0) return;

  // 保持图像中心位置平滑缩放
  const imgCenterX = transform.x + (imgW * oldScale) / 2;
  const imgCenterY = transform.y + (imgH * oldScale) / 2;

  transform.scale = targetScale;
  transform.x = imgCenterX - (imgW * targetScale) / 2;
  transform.y = imgCenterY - (imgH * targetScale) / 2;

  redrawEditor();
}

function onZoomSliderChange() {
  applyZoomPercent(zoomPercent.value);
}

function zoomIn() {
  const next = Math.min(300, zoomPercent.value + 5);
  zoomPercent.value = next;
  applyZoomPercent(next);
}

function zoomOut() {
  const next = Math.max(15, zoomPercent.value - 5);
  zoomPercent.value = next;
  applyZoomPercent(next);
}

function handleWheelZoom(e: WheelEvent) {
  const step = e.deltaY < 0 ? 5 : -5;
  const next = Math.min(300, Math.max(15, zoomPercent.value + step));
  zoomPercent.value = next;
  applyZoomPercent(next);
}

function rotateImage(deg: number) {
  transform.rotation = (transform.rotation + deg) % 360;
  redrawEditor();
}

// 鼠标/触控平移交互
function startPan(e: MouseEvent) {
  isPanning = true;
  startPanX = e.clientX;
  startPanY = e.clientY;
  initialTransformX = transform.x;
  initialTransformY = transform.y;
}

function onPanMove(e: MouseEvent) {
  if (!isPanning) return;
  const dx = e.clientX - startPanX;
  const dy = e.clientY - startPanY;
  transform.x = initialTransformX + dx;
  transform.y = initialTransformY + dy;
  redrawEditor();
}

function startTouchPan(e: TouchEvent) {
  if (e.touches.length === 1) {
    isPanning = true;
    startPanX = e.touches[0].clientX;
    startPanY = e.touches[0].clientY;
    initialTransformX = transform.x;
    initialTransformY = transform.y;
  }
}

function onTouchPanMove(e: TouchEvent) {
  if (!isPanning || e.touches.length !== 1) return;
  const dx = e.touches[0].clientX - startPanX;
  const dy = e.touches[0].clientY - startPanY;
  transform.x = initialTransformX + dx;
  transform.y = initialTransformY + dy;
  redrawEditor();
}

function endPan() {
  isPanning = false;
}

// 核心重绘函数
let currentCutoutImg: HTMLImageElement | null = null;
async function redrawEditor() {
  if (!editorCanvasRef.value || !sourceImage.value) return;

  const canvas = editorCanvasRef.value;
  const spec = currentSpec.value;
  canvas.width = spec.widthPx;
  canvas.height = spec.heightPx;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;

  // 1. 绘制背景
  ctx.clearRect(0, 0, w, h);
  if (selectedBg.value.value === 'original') {
    // 保留原背景，直接整体绘制原图
    renderImageLayer(ctx, sourceImage.value);
    return;
  }

  // 纯色 / 渐变底色
  if (selectedBg.value.value !== 'transparent') {
    if (selectedBg.value.isGradient && selectedBg.value.gradientStops) {
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, selectedBg.value.gradientStops[0]);
      grad.addColorStop(1, selectedBg.value.gradientStops[1]);
      ctx.fillStyle = grad;
    } else {
      ctx.fillStyle = selectedBg.value.value;
    }
    ctx.fillRect(0, 0, w, h);
  }

  // 2. 绘制人像层
  if (currentCutoutImg) {
    renderImageLayer(ctx, currentCutoutImg);
  } else if (cutoutBlob.value) {
    const url = URL.createObjectURL(cutoutBlob.value);
    const img = new Image();
    img.onload = () => {
      currentCutoutImg = img;
      renderImageLayer(ctx, img);
    };
    img.src = url;
  } else {
    // 尚未抠图时先展示原图作为占位
    renderImageLayer(ctx, sourceImage.value);
  }
}

function renderImageLayer(ctx: CanvasRenderingContext2D, img: HTMLImageElement) {
  ctx.save();
  // 绕中心进行旋转平移
  const centerX = transform.x + (img.naturalWidth * transform.scale) / 2;
  const centerY = transform.y + (img.naturalHeight * transform.scale) / 2;
  ctx.translate(centerX, centerY);
  ctx.rotate((transform.rotation * Math.PI) / 180);
  ctx.drawImage(
    img,
    -(img.naturalWidth * transform.scale) / 2,
    -(img.naturalHeight * transform.scale) / 2,
    img.naturalWidth * transform.scale,
    img.naturalHeight * transform.scale
  );
  ctx.restore();
}

// 相机自拍逻辑
async function startCamera() {
  stopCamera();
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: cameraFacing.value,
        width: { ideal: 1920 },
        height: { ideal: 1080 }
      },
      audio: false
    });
    cameraStream = stream;
    if (cameraVideoRef.value) {
      cameraVideoRef.value.srcObject = stream;
      await cameraVideoRef.value.play();
      isCameraActive.value = true;
      await realtimeSegmenter.init();
      realtimeSegmenter.setOnResult((mask) => {
        lastCameraMask = mask;
      });
      runCameraLoop();
    }
  } catch (e) {
    console.warn('相机权限获取失败:', e);
    isCameraActive.value = false;
  }
}

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(t => t.stop());
    cameraStream = null;
  }
  if (cameraAnimFrame) cancelAnimationFrame(cameraAnimFrame);
  isCameraActive.value = false;
}

async function toggleCameraFacing() {
  cameraFacing.value = cameraFacing.value === 'user' ? 'environment' : 'user';
  await startCamera();
}

function runCameraLoop() {
  const loop = () => {
    if (cameraVideoRef.value && cameraCanvasRef.value && cameraVideoRef.value.readyState >= 2) {
      const canvas = cameraCanvasRef.value;
      const video = cameraVideoRef.value;
      if (canvas.width !== currentSpec.value.widthPx || canvas.height !== currentSpec.value.heightPx) {
        canvas.width = currentSpec.value.widthPx;
        canvas.height = currentSpec.value.heightPx;
      }
      realtimeSegmenter.sendFrame(video);
      if (lastCameraMask && selectedBg.value.value !== 'original') {
        realtimeSegmenter.renderComposite(
          canvas,
          video,
          lastCameraMask,
          selectedBg.value,
          cameraFacing.value === 'user'
        );
      } else {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.save();
          if (cameraFacing.value === 'user') {
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
          }
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          ctx.restore();
        }
      }
    }
    cameraAnimFrame = requestAnimationFrame(loop);
  };
  cameraAnimFrame = requestAnimationFrame(loop);
}

// 相机抓拍快门
async function takeSnapshot() {
  if (!cameraVideoRef.value || isMatting.value) return;
  const video = cameraVideoRef.value;
  const snapCanvas = document.createElement('canvas');
  snapCanvas.width = video.videoWidth || currentSpec.value.widthPx;
  snapCanvas.height = video.videoHeight || currentSpec.value.heightPx;
  const ctx = snapCanvas.getContext('2d');
  if (!ctx) return;

  if (cameraFacing.value === 'user') {
    ctx.translate(snapCanvas.width, 0);
    ctx.scale(-1, 1);
  }
  ctx.drawImage(video, 0, 0, snapCanvas.width, snapCanvas.height);

  snapCanvas.toBlob(async (blob) => {
    if (!blob) return;
    stopCamera();
    await loadFile(blob);
  }, 'image/jpeg', 0.98);
}

// 生成合成后的当前照片 Blob
async function generateComposedBlob(): Promise<{ composedBlob: Blob; previewUrl: string }> {
  if (!editorCanvasRef.value) throw new Error('画布未就绪');
  return new Promise((resolve, reject) => {
    editorCanvasRef.value!.toBlob((blob) => {
      if (blob) {
        resolve({
          composedBlob: blob,
          previewUrl: editorCanvasRef.value!.toDataURL('image/jpeg', 0.9)
        });
      } else {
        reject(new Error('导出失败'));
      }
    }, 'image/jpeg', 0.98);
  });
}

// 加入待印托盘
async function addToTray() {
  if (!originalBlob.value || !sourceImage.value) return;
  try {
    const { composedBlob, previewUrl } = await generateComposedBlob();
    const item: TrayItem = {
      id: `tray_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      memberName: `成员 ${props.trayCount + 1}`,
      originalBlob: originalBlob.value,
      cutoutBlob: cutoutBlob.value || originalBlob.value,
      previewUrl,
      spec: { ...currentSpec.value },
      printCount: 4, // 默认 4 张
      selectedBg: { ...selectedBg.value },
      createdAt: Date.now()
    };

    emit('photo-added-to-tray', item);
    emit('show-toast', `已将 ${currentSpec.value.name} 证件照加入待印托盘`);
  } catch (err) {
    console.error('加入托盘失败:', err);
  }
}

// 单张精准压缩与导出
async function openSingleExport() {
  if (!originalBlob.value || !sourceImage.value) return;
  try {
    const { composedBlob, previewUrl } = await generateComposedBlob();
    const item: TrayItem = {
      id: `export_${Date.now()}`,
      memberName: '证件照',
      originalBlob: originalBlob.value,
      cutoutBlob: cutoutBlob.value || originalBlob.value,
      previewUrl,
      spec: { ...currentSpec.value },
      printCount: 1,
      selectedBg: { ...selectedBg.value },
      createdAt: Date.now()
    };
    emit('open-single-export', item);
  } catch (err) {
    console.error('打开单张导出失败:', err);
  }
}
</script>
