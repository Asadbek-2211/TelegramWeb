<template>
  <div
    class="w-full bg-[#181818] h-[114px] flex justify-between items-center pl-[20px]"
    v-for="group in groups"
  >
   <div class="flex items-center gap-3">
    <img
      src="../assets/images/21104.png"
      class="w-[60px] rounded-[100%]"
      alt=""
    />
    <p class="text-white">{{ group.name }}</p>
   </div>
    <el-button @click="deleteGroup()" type="danger" plain>Delete</el-button>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { supabase } from "../lib/supabaseClient";
import { computed, onMounted, ref, watch } from "vue";
import { ElMessage } from "element-plus";
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

const deleteGroup = async () => {
 await supabase
 .from("groups")
 .delete()
 .eq("id", group_id.value).then(() => { 
  ElMessage({
    type:"success",
    message:"Delete Group"
  })
  window.location.href = "/"
})
}

</script>
