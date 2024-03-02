<template>
  <div
    class="w-full bg-[#181818] h-[114px] flex items-center gap-3 pl-[20px]"
    v-for="group in groups"
  >
    <img
      src="../assets/images/21104.png"
      class="w-[60px] rounded-[100%]"
      alt=""
    />
    <p class="text-white">{{ group.name }}</p>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { supabase } from "../lib/supabaseClient";
import { computed, onMounted, ref, watch } from "vue";

const route = useRoute();

const groups = ref([]);

const  group_id  = computed(() => route.params.group_id);

const getGroup = async () => {
  const res = await supabase.from("groups").select("*").eq("id", group_id.value);
  groups.value = res.data;
};

onMounted(async () => {
  getGroup();
});

watch(
  () => group_id.value,
  () => {
    getGroup();
  }
);
</script>
