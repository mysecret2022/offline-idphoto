<template>
  <div class="w-full h-screen bg-slate-950 flex flex-col overflow-hidden">
    <!-- 主界面：证件照全能工作台 (支持上传/拖拽/拍摄/对齐/换底/压缩) -->
    <PhotoStudio
      :tray-count="trayItems.length"
      @photo-added-to-tray="handlePhotoAdded"
      @open-single-export="handleOpenSingleExport"
      @open-tray="isTrayOpen = true"
      @open-packing="isPackingOpen = true"
      @show-toast="showToast"
    />

    <!-- 临时照片托盘面板 (支持多成员、修改打印张数、删除) -->
    <PhotoTray
      v-if="isTrayOpen"
      :items="trayItems"
      @close="isTrayOpen = false"
      @remove-item="removeTrayItem"
      @clear-all="clearTray"
      @export-single="handleOpenSingleExport"
      @open-packing="openPackingModal"
      @update-item="handleItemUpdated"
    />

    <!-- 单张证件照精准文件大小 (KB) 二分压缩与 300 DPI 导出弹窗 -->
    <ExportModal
      v-if="exportingItem"
      :item="exportingItem"
      @close="exportingItem = null"
    />

    <!-- 智能多人多规格 6寸/A4 自动混排拼版打印工作台 (浅灰十字裁切线 + 微型脚标) -->
    <PrintLayoutModal
      v-if="isPackingOpen"
      :items="trayItems"
      @close="isPackingOpen = false"
    />

    <!-- 浮动操作提示 Toast -->
    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="transform translate-y-4 opacity-0" enter-to-class="transform translate-y-0 opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div
        v-if="toastMessage"
        class="fixed top-14 inset-x-0 mx-auto w-fit z-50 bg-emerald-600/90 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-xl backdrop-blur-md flex items-center space-x-2"
      >
        <span>✓</span>
        <span>{{ toastMessage }}</span>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { TrayItem } from './types';
import PhotoStudio from './components/PhotoStudio.vue';
import PhotoTray from './components/PhotoTray.vue';
import ExportModal from './components/ExportModal.vue';
import PrintLayoutModal from './components/PrintLayoutModal.vue';

const trayItems = ref<TrayItem[]>([]);
const isTrayOpen = ref(false);
const isPackingOpen = ref(false);
const exportingItem = ref<TrayItem | null>(null);
const toastMessage = ref<string>('');

let toastTimer: any = null;
function showToast(msg: string) {
  toastMessage.value = msg;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastMessage.value = '';
  }, 2500);
}

function handlePhotoAdded(item: TrayItem) {
  trayItems.value.push(item);
  showToast(`已成功加入托盘：${item.spec.name} (${item.printCount}张)`);
}

function handleOpenSingleExport(item: TrayItem) {
  exportingItem.value = item;
}

function removeTrayItem(id: string) {
  trayItems.value = trayItems.value.filter(it => it.id !== id);
}

function clearTray() {
  trayItems.value = [];
}

function openPackingModal() {
  isTrayOpen.value = false;
  isPackingOpen.value = true;
}

function handleItemUpdated(item: TrayItem) {
  const idx = trayItems.value.findIndex(it => it.id === item.id);
  if (idx !== -1) {
    trayItems.value[idx] = { ...item };
  }
}
</script>
