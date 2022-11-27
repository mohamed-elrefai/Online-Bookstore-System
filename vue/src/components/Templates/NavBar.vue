<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<template>
    <div class=" bg-gray-100 w-full h-10 flex items-center justify-between">
        <div class=" text-xl flex justify-start ml-10 font-medium text-first_text">
            <router-link to="/">
                <h1 class="flex">
                    <span class="mt-[6px] mr-2">
                        <Logo />
                    </span>
                    EBI
                </h1>
            </router-link>
        </div>
        <div class=" flex  p-[20px] m-2 mr-10">
            <div class=" flex justify-end">
                <div class="m-2">
                    <router-link to="/project">Projects</router-link>
                </div>
                <div class="m-2">
                    <router-link to="/skill">Skills</router-link>
                </div>
            </div>
        </div>
    </div>
</template>