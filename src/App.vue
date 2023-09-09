<script setup>
import { useUserStore } from '@/stores/user.js';

const user = useUserStore()

console.log(user);

</script>

<template>
  <div>
    hello word
  </div>
</template>

<style scoped>
</style>
