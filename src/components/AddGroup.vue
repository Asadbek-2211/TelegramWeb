<template>
        <div class="flex justify-center items-center gap-5">
            <input
              v-model="input_val_group"
              type="text"
              class="border-black border-2 rounded-md w-[300px] p-3 focus:outline-none"
            />
            <button
              @click="addGroup"
              class="bg-blue-700 w-20 p-3 text-white rounded-md  inp_btn"
            >
              Add
            </button>
          </div>
</template>
<script setup>
import { supabase } from "@/lib/supabaseClient";
import { ref }  from "vue"
import { ElMessage } from "element-plus"

const emits = defineEmits("close")
const  input_val_group = ref("")

const addGroup = async() => {
await supabase.from("groups")
.insert([
    {name: input_val_group.value}
]).then(() => {
    emits("close")
    ElMessage({
        type:'success',
        message: "Group added",
    })
})
}
</script>