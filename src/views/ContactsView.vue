<template>
    <div v-for="contact in contacts"  class="w-full bg-[#181818] h-[114px] flex items-center gap-3 pl-4">
        <img src="../assets/images/21104.png" alt="" class="w-[60px] h-[60px] rounded-[100%]">
        <p class="text-white">{{ contact.name }}</p>
   </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { supabase } from "../lib/supabaseClient";
import { computed, onMounted, ref, watch } from "vue";

const route = useRoute();

const contacts = ref([]);
const  user_id  = computed(() => route.params.user_id);

const getContact = async () => {
  const res2 = await supabase.from("contacts").select("*").eq("id", user_id.value);
  contacts.value = res2.data;
};

onMounted(async () => {
  getContact();
});

watch(
  () => user_id.value,
  () => {
    getContact();
  }
);
</script>
<style>
</style>