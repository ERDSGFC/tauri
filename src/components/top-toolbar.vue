<script setup>
import { appWindow } from "@tauri-apps/api/window";
import { ref, onMounted } from "vue";
const max_flag = ref(0)

function test() {
   console.log(1);
   appWindow.toggleMaximize()
}

function winMax() {
   appWindow.maximize()
}
function winMin() {
   appWindow.minimize()
}
function winClose() {
   appWindow.close()
}
onMounted(() => {
   console.log(1)
})

</script>
<template>
   <div class="h-9 flex flex-row justify-between items-center content-center">
      <!-- left -->
      <div class="bg-blue-600 tool-bar-left flex">
         <div @click="test">设置</div>
         <div>帮助</div>
      </div>
      <!-- left -->
      <div class="bg-green-500 basis-1/3 text-center">
         <ElInput></ElInput>
         中间文本
      </div>
      <!-- right -->
      <div class="flex h-full justify-center items-center">
         <div class="w-9 hover:bg-gray-800" @click="winMin">最小</div>
         <div class="w-9 hover:bg-gray-700" @click="winMax"><i-carbon-accessibility /></div>
         <div class="w-9 hover:bg-red-700" @click="winClose"><el-icon color="#fc8c23"><i-mingcute-close-fill /></el-icon> </div>
      </div>
   </div>
</template>
<style scoped>
.tool-bar-left > div:hover  {
   background-color: #3e3841;
   border-radius: 0.3rem;
}
</style>