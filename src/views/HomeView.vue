<template>
  <div class="container mx-auto">
    <div class="flex gap-2">
      <button class="border-none">
        <i class="fa-solid fa-bars"></i>
      </button>
         <el-input
        v-model="input2"
        class="input_search"
        placeholder="Type something"
        :prefix-icon="Search" />
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";
import { Calendar, Search } from '@element-plus/icons-vue'
onMounted(async () => {
  let { data: groups, error } = await supabase.from("groups").select("*");
  console.log(groups);
});
</script>
<style>
</style>
