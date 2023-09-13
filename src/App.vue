<script setup>
import { onMounted, ref, reactive } from 'vue'
import topToolbar from '@/components/top-toolbar.vue';

onMounted(() => {
  document.onkeydown = (e) => {
    console.log(e)
  }
})

</script>

<template>
  <div id="win-root" class="relative min-h-screen">
    <topToolbar/>
    <div id="content" class="bg-red-200">
    <router-view></router-view>
    </div>
    <div id="footer" class="bg-gray-700 h-8 w-full absolute bottom-0 ">
    </div>
  </div>
</template>

<style scoped>

#footer {
}
</style>
