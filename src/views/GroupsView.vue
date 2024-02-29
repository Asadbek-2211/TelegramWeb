<template>
   <div  class="w-full bg-[#181818] h-[114px] flex items-center gap-3 pl-[20px]" v-for="group in groups">
    <img src="../assets/images/21104.png" class="w-[60px] rounded-[100%] " alt="">
    <p  class="text-white">{{ group.name }}</p>
   </div>
</template>
<script setup>
import { supabase } from "../lib/supabaseClient";
import { onMounted,ref } from "vue";

const groups = ref([]);
onMounted(async () => {
  const res = await supabase.from("groups").select("*")
  .eq('id' , 10)
  groups.value = res.data;
  console.log(groups);
});
</script>