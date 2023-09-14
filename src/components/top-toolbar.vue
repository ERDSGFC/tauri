<script setup>
import { appWindow } from "@tauri-apps/api/window";
import { ref } from "vue";
const max_flag = ref(false)

function toggleMax() {
   max_flag.value = ! max_flag.value
   appWindow.toggleMaximize()
}
function winMin() {
   appWindow.minimize()
}
function winClose() {
   appWindow.close()
}
</script>
<template>
   <div data-tauri-drag-region class="h-9 flex flex-row justify-between items-center">
      <!-- left -->
      <div class="tool-bar-left flex ml-2">
         <div class="px-1.5">设置</div>
         <div class="px-1.5">帮助</div>
      </div>
      <!-- left -->
      <div class="bg-green-500 basis-1/3 text-center">
      </div>
      <!-- right -->
      <div class="flex h-full justify-center">
         <div class="w-9 hover:bg-gray-400 text-center" @click="winMin"><i-ant-design-minus-outlined class="h-9" /></div>
         <div class="w-9 hover:bg-gray-400 text-center" @click="toggleMax">
            <i-ant-design-fullscreen-exit-outlined v-show="max_flag" class="h-9" />
            <i-ant-design-fullscreen-outlined v-show="max_flag==false" class="h-9"/>
         </div>
         <div class="w-9 hover:bg-red-700 text-center " @click="winClose"><i-ant-design-close-outlined class="h-9" /> </div>
      </div>
   </div>
</template>
<style scoped>
.tool-bar-left > div:hover  {
   --tw-bg-opacity: 1;
   background-color: rgba(156, 163, 175, var(--tw-bg-opacity));
   border-radius: 0.3rem;
}
</style>