<template>
  <div class="w-[400px] bg-[#212121] h-screen sidebar relative">
    <div class="flex gap-2 p-4 relative">
      <button @click="menu">
        <i class="fa-solid fa-bars text-[#eee]"></i>
      </button>
          <div id="exit" class="hidden   z-10  absolute top-20 bg-white  rounded-lg h-[500px] w-[300px] menu">
           <div class="pt-[50px] px-[30px]">
            <div class="flex items-center gap-4">
            <button class="text-xl ">
              <i class="fa-regular fa-bookmark"></i>
            </button>
            <p class="text-xl">Saved Messages</p>
           </div>
             <div class="flex gap-4 items-center mt-4">
              <button class="text-xl">
                <i class="fa-regular fa-user"></i>
              </button>
              <p class="text-xl">Contacts</p>
             </div>
            <div class="flex gap-4 items-center mt-4">
              <button class="text-xl bg-white">
                <i class="fa-solid fa-wallet"></i>
              </button>
              <p class="text-xl">Wallet</p>
            </div>
            <div class="flex gap-4 items-center mt-4">
              <button class="text-xl">
                <i class="fa-solid fa-film"></i>
              </button>
              <p class="text-xl">My Stories</p>
            </div>
            <div class="flex gap-4 items-center mt-4">
              <button class="text-xl">
                <i class="fa-solid fa-gear"></i>
              </button>
              <p class="text-xl">Settings</p>
            </div>
            <div class="flex gap-4 items-center mt-4">
              <button class="text-xl">
                <i class="fa-regular fa-moon"></i>
              </button>
              <p class="text-xl">Night Mode</p>
              <el-switch v-model="value"/>
            </div>
            <div class="flex gap-3 items-center mt-4">
              <button class="text-xl">
                <i class="fa-solid fa-location-dot"></i>
              </button>
              <p class="text-xl">Animations</p>
            <input type="range" min="0" max="1" value="0.5" step="any" class="input_range">
            </div>
            <div class="flex gap-3 items-center mt-4">
              <button class="text-xl">
                <i class="fa-solid fa-bug"></i>
              </button>
              <p class="text-xl">Telegram Features</p>
            </div>
            <div class="flex gap-3 items-center mt-4">
              <button class="text-xl">
                <i class="fa-solid fa-k"></i>
              </button>
              <p class="text-xl">Switch to K Version</p>
            </div>
            <div class="flex gap-3 items-center mt-4">
              <button class="text-xl">
                <div class="bg-black rounded-3xl w-7">
                  <i class="fa-solid fa-plus text-white"></i>
                </div>
              </button>
              <p class="text-xl">Install App</p>
            </div>
           </div>
          </div>
      <el-input
        v-model="inp_val"
        @click="filterGroups"
        class="w-3 focus:outline-none"
        placeholder="Search"
        :prefix-icon="Search"
      />
    </div>
    <div class="mx-auto">
      <el-tabs v-model="tab_val" class="demo-tab">
        <el-tab-pane class="text-gray-50" label="All Chats" name="all">
            <div v-for="group in groups" :key="group.id" class="w-[400px] h-[80px] bg-[#181818]  sideAc flex gap-4 items-center pl-4">
              <img src="../assets/images/21104.png" alt="" class="w-[60px] rounded-[100%]">
            <p class="text-[#eee]">{{ group.name }}</p>
            </div>
            <div v-for="contact in contacts" :key="contact.id" class="w-[400px] h-100px pl-4 py-3 bg-[#181818] sideAc flex gap-4 items-center">
            <img src="../assets/images/21104.png" alt="" class="w-[60px] rounded-[100%]">
            <p class="text-[#eee]">{{ contact.name }}</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Groups" name="groups">
          <div v-for="group in groups" :key="group.id" class="w-[400px] h-[80px] bg-[#181818] sideAc flex gap-4 items-center pl-4">
              <img src="../assets/images/21104.png" alt="" class="w-[60px] rounded-[100%]">
              <p class="text-[#eee]">{{ group.name }}</p>
            </div>
        </el-tab-pane>
        <el-tab-pane label="Contacts" name="contacts">
          <div v-for="contact in contacts" :key="contact.id" class="w-[400px] h-100px bg-[#181818] sideAc flex gap-4 items-center pl-4 py-3">
          <img src="../assets/images/21104.png" alt="" class="w-[60px] rounded-[100%]">
            <p class="text-[#eee]">{{ contact.name }}</p>
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
let boolean = false
const menu = () => {
if( boolean == true) {
  exit.classList.toggle("block")
  boolean = false
}
else{
  exit.classList.toggle("hidden")
  boolean = true
}
}
const filterGroups = () => {
const filteredGroups = filter.groups((g) => {
  g.name.toLowerCase().includes(inp_val.value.toLocaleLowerCase)
} )
}


const contactsImg = [
  {
    id:1,
    url:"https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg"
  },
  {
    id:2,
    url:"https://images.unsplash.com/photo-1595925889916-2a1d773a0613?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    id:3,
    url:"https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE5fHx8ZW58MHx8fHx8&w=1000&q=80"
  },
  {
    id:4,
    url:"https://images.unsplash.com/photo-1661800931710-fd56de6825fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&w=1000&q=80"
  },
  {
    id:5,
    url:"https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym13JTIwY2FyfGVufDB8fDB8fHww"
  },
  {
    id:6,
    url:"https://i.pinimg.com/736x/d3/07/5c/d3075c6841d54debf95bac628eb4ee8b.jpg"
  },
  {
    id:7,
    url:"https://i.pinimg.com/736x/51/8f/64/518f64ae46729c5672bd590a6ebedd98.jpg"
  },
]
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
.sideAc {
  border: 1px solid black;
  color: black;
  font-size: 18px;
}
.sideBar .el-input__wrapper.is-focus {
outline: none;
}
</style>
