<template>
     <div class="flex justify-center items-center gap-5">
            <input
              v-model="input_val_contact"
              type="text"
              class="border-black border-2 rounded-md w-[300px] p-3 focus:outline-none"
            />
            <button
              @click="contactAdd()"
              class="bg-blue-700 w-20 p-3 text-white rounded-md inp_btn"
            >
              Add
            </button>
          </div>
</template>
<script setup> 
import { ref } from "vue"
import { supabase } from "@/lib/supabaseClient";
import { ElMessage } from "element-plus";

const emits = defineEmits("close")
const input_val_contact = ref("")

const contactAdd = async () => {
 await supabase
  .from('contacts')
  .insert([
    { name: input_val_contact.value },
  ]).then(() => {
    emits("close")
    ElMessage({
        type: "success",
        message:"Contact added"
  })
  })
          
}



</script>