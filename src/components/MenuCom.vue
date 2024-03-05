<template>
      <div id="exit" class="z-10  absolute top-20 bg-[#212121]  rounded-lg h-[500px] w-[300px] menu">
           <div class="pt-[50px] px-[30px]">
            <div class="flex items-center gap-4">
            <button class="text-xl text-white">
              <i class="fa-regular text-white fa-bookmark"></i>
            </button>
            <p class="text-xl text-white">Saved Messages</p>
           </div>
             <div class="flex gap-4 items-center mt-4">
              <button class="text-xl text-white">
                <i class="fa-regular text-white fa-user"></i>
              </button>
              <p class="text-xl text-white">Contacts</p>
             </div>
            <div class="flex gap-4 items-center mt-4">
              <button class="text-xl text-white">
                <i class="fa-solid text-white fa-wallet"></i>
              </button>
              <p class="text-xl text-white">Wallet</p>
            </div>
            <div class="flex gap-4 items-center mt-4">
              <button class="text-xl text-white">
                <i class="fa-solid text-white fa-film"></i>
              </button>
              <p class="text-xl text-white">My Stories</p>
            </div>
            <div class="flex gap-4 items-center mt-4">
              <button class="text-xl text-white">
                <i class="fa-solid text-white fa-gear"></i>
              </button>
              <p class="text-xl text-white">Settings</p>
            </div>
            <div class="flex gap-4 items-center mt-4">
              <button class="text-xl text-white">
                <i class="fa-regular text-white fa-moon"></i>
              </button>
              <p class="text-xl text-white">Night Mode</p>
              <el-switch v-model="value"/>
            </div>
            <div class="flex gap-3 items-center mt-4">
              <button class="text-xl text-white">
                <i class="fa-solid text-white fa-location-dot"></i>
              </button>
              <p class="text-xl text-white">Animations</p>
            <input type="range" min="0" max="1" value="0.5" step="any" class="input_range">
            </div>
            <div class="flex gap-3 items-center mt-4">
              <button class="text-xl text-white">
                <i class="fa-solid text-white fa-bug"></i>
              </button>
              <p class="text-xl text-white">Telegram Features</p>
            </div>
            <div class="flex gap-3 items-center mt-4">
              <button class="text-xl text-white">
                <i class="fa-solid text-white fa-k"></i>
              </button>
              <p class="text-xl text-white">Switch to K Version</p>
            </div>
            <div class="flex gap-3 items-center mt-4">
              <button class="text-xl text-white">
                <div class="rounded-3xl text-white">
                    <el-icon size="32px"><CirclePlus /></el-icon>
                </div>
              </button>
              <p class="text-xl text-white">Install App</p>
            </div>
           </div>
          </div>
</template>
<script setup>
import { ref } from 'vue';
import { CirclePlus } from "@element-plus/icons-vue"
const value = ref(null)
</script>
<style>
.menu {
  backdrop-filter: blur(10px) ;

}
</style>