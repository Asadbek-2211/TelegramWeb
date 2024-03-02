<template>
  <div class="flex">
    <SideBar />
   <div class="flex-1">
    <RouterView />
   </div>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
</script>
<style>
body {
  height: 100vh;
  background-image: url(./assets/images/mainbg.png);
  background-color: rgb(162, 113, 208);
  overflow: hidden;
}

</style>
