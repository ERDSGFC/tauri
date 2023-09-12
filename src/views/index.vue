<script setup>
import { ref } from 'vue'
// When using the Tauri API npm package:
// import { invoke } from '@tauri-apps/api/tauri'
import { appWindow } from '@tauri-apps/api/window';
import {  } from '@tauri-apps/api/app';
const count = ref(0)

function increment() {
  count.value++
//   invoke('close')
//   appWindow.close()
    appWindow.close();
}
</script>

<template>
  <div>
    <button @click="increment" class="bg-red-200 w-15 mt-2 ml-2">
      {{ count }}
    </button>
  </div>  
</template>