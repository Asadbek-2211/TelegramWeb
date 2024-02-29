<template>
  <div class="w-[400px] bg-[#212121] h-screen sidebar relative">
    <div class="flex gap-2 p-4 relative">
      <button @click="boolean = !boolean">
        <i class="fa-solid fa-bars text-[#eee]"></i>
      </button>
        <MenuCom v-if="boolean"/>
      <el-input
        v-model="inp_val"
        @click="filterGroups"
        class="w-3 focus:outline-none"
        placeholder="Search"
        clearable
        :prefix-icon="Search"
      />
    </div>
    <div class="mx-auto">
      <el-tabs v-model="tab_val" class="demo-tab">
        <el-tab-pane class="text-gray-50" label="All Chats" name="all">
          <div  v-for="group in filterGroups(groups)" :key="group.id">
            <RouterLink :to="'/groups/'+ group.id">
            <Allitem :name="group.name"/>
          </RouterLink>
          </div>
          <div v-for="contact in filterGroups(contacts)" :key="contact.id" >
         <RouterLink :to="'/contacts/' + contact.id">
          <Allitem  :name="contact.name"/>
         </RouterLink>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Groups" name="groups">
          <div  v-for="group in filterGroups(groups)" :key="group.id">
            <RouterLink :to="'/groups/'+ group.id">
            <Allitem :name="group.name"/>
          </RouterLink>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Contacts" name="contacts">
          <div v-for="contact in filterGroups(contacts)" :key="contact.id" >
         <RouterLink :to="'/contacts/' + contact.id">
          <Allitem  :name="contact.name"/>
         </RouterLink>
          </div>
          </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script setup>
import { Search } from "@element-plus/icons-vue";
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";
import MenuCom from "./MenuCom.vue";
import Allitem from "./Allitem.vue";

const value = ref(true)

const inp_val = ref("");

const tab_val = ref("all");
const groups = ref([]);
const contacts = ref([])
onMounted(async () => {
  const res = await supabase.from("groups").select("*");
  const res2 = await supabase.from("contacts").select("*")
  groups.value = res.data;
  contacts.value = res2.data
  console.log(res2);
});
let boolean = ref(false)

const filterGroups = (arr = []) => {
return arr.filter((e) => e.name.toLowerCase().includes(inp_val.value.toLowerCase()))
}
</script>
<style>
.sidebar .el-input__wrapper {
  border-radius: 30px;
  background-color: #181818;
  padding: 5px 10px;
  box-shadow: none;
  border: 1px solid #2f2f2f;
}

.sidebar .el-input__inner {
  color: #eee;
}
.sidebar .el-tabs__item {
  color: #b9b9b9;
}
.sidebar .el-tabs__nav-wrap::after {
  background-color: #181818;
}
.sidebar .el-tabs__item.is-active {
  color: #8774e1;
}
.sidebar .el-tabs__active-bar {
  background-color: #8774e1;
}
.sidebar .el-tabs__nav-scroll {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sidebar .el-tabs__item:hover {
  background-color: #181818;
}

.sideBar .el-input__wrapper.is-focus {
outline: none;
}
.sidebar .el-tabs__content {
  height: 80vh;
  overflow-y: auto;
}
.sideAc {
  border-radius: 10px;
}
.sidebar .sideAc:hover {
  background-color: #2f2f2f;
}
</style>
  