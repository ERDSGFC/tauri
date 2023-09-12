<script setup>
  function closeWindow() {
    console.log("vue close");
  }
</script>
<template>
    <div class="">
      <!-- <div class="m-auto h-8 w-10 bg-black" @click="closeWindow"></div> -->
    </div>
    <div>
      <div class="bg-red-400 h-20 text-center overflow-hidden text-base leading-20 w-96 mx-auto">
        hello word
        hello word
        hello word
        hello word
        hello word
        hello word
        hello word
        hello word
        hello word
        hello word
      </div>
      <div class="border-red-500 border-2 h-200 w-full">
        <div class="bg-red-400 h-1/6 w-34">
          第一个
          <div class="child bg-green-00"></div>
        </div>
        <div class="bg-red-700 h-1/6 w-34 relative left-2">
          第二个
          <div class="child bg-green-400 absolute top-3 h-10 w-10"></div>
        </div>
        <div class="bg-red-900 h-1/6 w-34">
          第三个
          <div class="child bg-green-400 h-20 w-10 absolute top-1 left-2"></div>
        </div>
        <div class="bg-green-300 h-1/2 w-1/3 flex flex-row justify-evenly justify-items-start">
          <div class="bg-orange-500 h-20 w-20">1</div>
          <div class="bg-orange-500 h-20 w-20">2</div>
          <div class="bg-orange-500 h-20 w-20">3</div>
        </div>
      </div>
      <div class="bg-green-900  grid gap-2 grid-cols-3 text-center">
        <div class="bg-orange-500  border-red-300 border-2 rounded-md col-span-full">标题</div>
        <div class="bg-orange-500  border-red-300 border-2 rounded-md">活动开始时间</div>
        <div class="bg-orange-500  border-red-300 border-2 rounded-md">活动过期天数</div>
        <div class="bg-orange-500  border-red-300 border-2 rounded-md">活动过期天数</div>
      </div>
    </div>
</template>