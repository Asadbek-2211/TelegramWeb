<template>
  <div class="w-[400px] bg-[#212121] h-screen sidebar relative">
    <div class="flex gap-2 p-4 relative">
      <button @click="boolean = !boolean">
        <i class="fa-solid fa-bars text-[#eee]"></i>
      </button>
      <MenuCom v-if="boolean" />
      <el-input
        v-model="inp_val"
        @click="filterGroups"
        class="w-3 focus:outline-none"
        placeholder="Search"
        clearable
        :prefix-icon="Search"
      />
    </div>
    <div class="flex items-center justify-center gap-3">
      <div v-for="contact in contacts" :key="contact.id">
        <div>
          <img
            src="../assets/images/21104.png"
            class="w-[60px] h-[60px] rounded-[100%] border-yellow-300 border-2"
            alt=""
          />
          <p class="text-white">{{ contact.name.slice(0, 5) + "..." }}</p>
        </div>
      </div>
    </div>
    <div class="mx-auto">
      <el-tabs v-model="tab_val" class="demo-tab">
        <el-tab-pane class="text-gray-50" label="All Chats" name="all">
          <div
            v-for="group in filterGroups(groups)"
            :key="group.id"
            v-if="groups.length"
          >
            <RouterLink :to="'/groups/' + group.id">
              <Allitem :name="group.name" />
            </RouterLink>
          </div>
          <div class="mx-auto" v-for="i in 20" v-else>
            <div
              class="w-[380px] h-[80px] mb-[10px] pl-[24px] flex items-center gap-3"
            >
              <div class="bg-[#181818] w-[60px] h-[60px] rounded-[100%]"></div>
              <div>
                <div class="w-[100px] h-[12px] rounded-lg bg-[#181818]"></div>
                <div
                  class="w-[200px] h-[12px] rounded-lg bg-[#181818] mt-4"
                ></div>
              </div>
              <div class="w-[60px] h-[12px] bg-[#181818] rounded-lg"></div>
            </div>
          </div>
          <div v-for="contact in filterGroups(contacts)" :key="contact.id">
            <RouterLink :to="'/contacts/' + contact.id">
              <Allitem :name="contact.name" />
            </RouterLink>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Groups" name="groups">
          <div v-for="group in filterGroups(groups)" :key="group.id">
            <RouterLink :to="'/groups/' + group.id">
              <Allitem :name="group.name" />
            </RouterLink>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Contacts" name="contacts">
          <div v-for="contact in filterGroups(contacts)" :key="contact.id">
            <RouterLink :to="'/contacts/' + contact.id">
              <Allitem :name="contact.name" />
            </RouterLink>
          </div>
        </el-tab-pane>
      </el-tabs>
      <el-button ref="buttonRef" v-click-outside="onClickOutside">
        <i class="fa-solid fa-plus"></i>
      </el-button>
      <el-popover
        ref="popoverRef"
        :virtual-ref="buttonRef"
        trigger="click"
        virtual-triggering
        clearable
      >
        <button class="flex items-center px-2 gap-3 btn_1">
          <i class="fa-solid fa-volume-off"></i>
          <p>New Channel</p>
        </button>

        <button
          @click="dialog_val = true"
          class="flex items-center gap-3 px-2 my-3 btn_2"
        >
          <i class="fa-solid fa-user-group"></i>
          <p>New Group</p>
        </button>
        <el-dialog v-model="dialog_val" align-center class="!w-96">
          <AddGroup @close="(dialog_val = false),getGroups()" />
        </el-dialog>
        <button
          @click="d_val_2 = true"
          class="flex items-center gap-3 px-2 btn_3"
        >
          <i class="fa-regular fa-user"></i>
          <p>New Chat</p>
        </button>
        <el-dialog v-model="d_val_2" align-center class="!w-96">
         <AddContact @close="(d_val_2 = false),getContacts()"/>
        </el-dialog>
      </el-popover>
    </div>
  </div>
</template>
<script setup>
import { Search } from "@element-plus/icons-vue";
import { ref, onMounted, unref } from "vue";
import { supabase } from "../lib/supabaseClient";
import MenuCom from "./MenuCom.vue";
import Allitem from "./Allitem.vue";
import { ClickOutside as vClickOutside } from "element-plus";
import AddGroup from "./AddGroup.vue";
import AddContact from "./AddContact.vue";

const dialog_val = ref(false);
const d_val_2 = ref(false);
const buttonRef = ref();
const popoverRef = ref();
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.();
};

const value = ref(true);

const inp_val = ref("");

const tab_val = ref("all");
const groups = ref([]);
const contacts = ref([]);

const getGroups = async () => {
  const res = await supabase.from("groups").select("*");
  groups.value = res.data.reverse()
};
const getContacts = async () => {
  const res2 = await supabase.from("contacts").select("*");
  contacts.value = res2.data.reverse();
};
onMounted(async () => {
  getGroups();
  getContacts();
});
let boolean = ref(false);

const filterGroups = (arr = []) => {
  return arr.filter((e) =>
    e.name.toLowerCase().includes(inp_val.value.toLowerCase())
  );
};
const input_val_group = ref("");
const newGroupAdd = () => {
  const new_group = {
    id: new Date().getTime(),
    name: input_val_group.value,
  };
  groups.value.push(new_group);
};
const input_val_contact = ref("");
const newContactAdd = () => {
  const new_contact = {
    id: new Date().getTime(),
    name: input_val_contact.value,
  };
  contacts.value.push(new_contact);
};
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
.sidebar .router-link-active div {
  background: #8774e1 !important;
}
.sidebar .el-button {
  position: absolute;
  bottom: 15px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  padding: 5px;
  background-color: #9584eb;
  border: none;
  color: white;
}
.sidebar .el-button:hover {
  background-color: #8774e1;
  color: white;
}
.el-popper.is-light.el-popover {
  background-color: #181818;
  border: none;
  color: white;
}
.el-popper.is-light.el-popover::before {
  background-color: #181818;
  border: none;
}
.el-popper.is-light .el-popper__arrow::before {
  background-color: #181818;
}
.el-popper.is-light .el-popper__arrow {
  width: 1200px;
}
.inp_btn:hover {
  background-color: rgb(0, 136, 255);
}
.btn_1:hover {
  background-color: #212121;
  border-radius: 5px;
}
.btn_2:hover {
  background-color: #212121;
  border-radius: 5px;
}
.btn_3:hover {
  background-color: #212121;
  border-radius: 5px;
}
</style>
