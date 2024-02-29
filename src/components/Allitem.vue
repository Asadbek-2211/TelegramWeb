<template>
  <div
    class="w-[380px] cursor-pointer mx-auto h-[80px] bg-[#212121] sideAc flex gap-4 items-center pl-4"
  >
    <img
      src="../assets/images/21104.png"
      alt=""
      class="w-[60px] rounded-[100%]"
    />
    <p class="text-[#eee]">{{ name }}</p>
  </div>
</template>
<script setup>
const props = defineProps(["name"]);
</script>
