<template>
  <div class="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-md flex flex-col justify-end sm:justify-center items-center sm:p-4">
    <!-- 托盘卡片容器 -->
    <div class="w-full max-w-2xl bg-slate-900 border-t sm:border border-slate-800 rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
      <!-- 头部 -->
      <div class="flex items-center justify-between px-5 py-4 border-b border-slate-800">
        <div class="flex items-center space-x-2">
          <Layers class="w-5 h-5 text-blue-400" />
          <h2 class="text-base font-bold text-slate-100">待印照片托盘 ({{ items.length }})</h2>
        </div>
        <div class="flex items-center space-x-2">
          <button
            v-if="items.length > 0"
            @click="$emit('clear-all')"
            class="text-xs text-rose-400 hover:text-rose-300 px-2 py-1 transition"
          >
            清空托盘
          </button>
          <button
            @click="$emit('close')"
            class="p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- 托盘列表 -->
      <div class="flex-1 overflow-y-auto p-4 space-y-3">
        <div v-if="items.length === 0" class="py-12 flex flex-col items-center justify-center text-slate-500 space-y-2">
          <User class="w-10 h-10 stroke-[1.5]" />
          <p class="text-sm">托盘暂无照片，请先拍摄或上传照片</p>
        </div>

        <div
          v-for="(item, index) in items"
          :key="item.id"
          class="flex items-center justify-between bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 hover:border-slate-600 transition"
        >
          <!-- 缩略图预览 (带有当前底色) -->
          <div class="relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-950 border border-slate-700">
            <img :src="item.previewUrl" class="w-full h-full object-cover" />
            <span class="absolute bottom-0 inset-x-0 bg-black/60 text-[9px] text-center text-slate-300 py-0.5">
              {{ item.spec.widthMm }}×{{ item.spec.heightMm }}
            </span>
          </div>

          <!-- 成员信息与规格调整 -->
          <div class="flex-1 min-w-0 mx-3 space-y-1.5">
            <div class="flex items-center space-x-2">
              <input
                v-model="item.memberName"
                placeholder="成员姓名"
                class="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-slate-100 w-24 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
              <span class="text-xs text-slate-400">{{ item.spec.name }}</span>
            </div>

            <!-- 底色切换 -->
            <div class="flex items-center space-x-1.5 pt-0.5">
              <button
                v-for="bg in presetBgs"
                :key="bg.id"
                @click="changeItemBg(item, bg)"
                class="w-4 h-4 rounded-full border border-slate-600 transition-transform"
                :class="[bg.previewClass, item.selectedBg.id === bg.id ? 'ring-2 ring-blue-400 scale-110' : '']"
                :title="bg.name"
              ></button>
            </div>
          </div>

          <!-- 打印数量计数器与操作 -->
          <div class="flex flex-col items-end space-y-2">
            <div class="flex items-center space-x-1 bg-slate-900 rounded-lg p-1 border border-slate-700">
              <button
                @click="decreaseCount(item)"
                class="w-6 h-6 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
              >
                <Minus class="w-3.5 h-3.5" />
              </button>
              <span class="w-7 text-center text-xs font-semibold text-slate-200">{{ item.printCount }}</span>
              <button
                @click="increaseCount(item)"
                class="w-6 h-6 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
              >
                <Plus class="w-3.5 h-3.5" />
              </button>
            </div>

            <div class="flex items-center space-x-2 text-xs">
              <button
                @click="$emit('export-single', item)"
                class="text-blue-400 hover:text-blue-300"
              >
                单张导出
              </button>
              <button
                @click="$emit('remove-item', item.id)"
                class="text-rose-400 hover:text-rose-300"
              >
                删除
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部统计与拼版按钮 -->
      <div class="p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
        <div>
          <span class="text-xs text-slate-400">总待打印张数: </span>
          <span class="text-sm font-bold text-blue-400">{{ totalPrintCount }} 张</span>
        </div>
        <div class="flex items-center space-x-3">
          <button
            @click="$emit('close')"
            class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"
          >
            继续拍照
          </button>
          <button
            @click="$emit('open-packing')"
            :disabled="totalPrintCount === 0"
            class="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition flex items-center space-x-1.5"
          >
            <Printer class="w-4 h-4" />
            <span>智能混排拼版</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Layers, X, User, Minus, Plus, Printer } from 'lucide-vue-next';
import { TrayItem, BgColorOption } from '../types';
import { PRESET_BG_COLORS } from '../core/specs';
import { PrintPackingEngine } from '../core/packingAlgorithm';

const props = defineProps<{
  items: TrayItem[];
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'remove-item', id: string): void;
  (e: 'clear-all'): void;
  (e: 'export-single', item: TrayItem): void;
  (e: 'open-packing'): void;
  (e: 'update-item', item: TrayItem): void;
}>();

const presetBgs = PRESET_BG_COLORS;

const totalPrintCount = computed(() => {
  return props.items.reduce((sum, it) => sum + it.printCount, 0);
});

function increaseCount(item: TrayItem) {
  item.printCount++;
  emit('update-item', item);
}

function decreaseCount(item: TrayItem) {
  if (item.printCount > 1) {
    item.printCount--;
    emit('update-item', item);
  }
}

async function changeItemBg(item: TrayItem, bg: BgColorOption) {
  item.selectedBg = bg;
  // 重新渲染预览图
  const canvas = await PrintPackingEngine.renderItemToCanvas(item);
  item.previewUrl = canvas.toDataURL('image/jpeg', 0.9);
  emit('update-item', item);
}
</script>
