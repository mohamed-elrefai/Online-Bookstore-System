<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup(){
        
    }
})
</script>

<template>
    <div class="  bg-[#101010] text-[#e8e8e8] w-full h-12 flex items-center justify-between">
        <div class=" text-xl flex justify-start ml-10 font-medium text-first_text">
            <router-link to="/">
                <h1 class="flex">
                    EBI
                </h1>
            </router-link>
        </div>
        <div class=" hidden md:flex  md:p-[20px] md:m-2 md:mr-10">
            <div class=" md:flex md:justify-end">
                <div class="m-2">
                    <router-link to="/">Home</router-link>
                </div>
                <div class="m-2 ">
                    <router-link to="/about">About us</router-link>
                </div>
                <div class="m-2">
                    <router-link to="/store">Store</router-link>
                </div>
                <div class="m-2 bg-[#202020] rounded-md hover:bg-[#303030]">
                    <router-link class="p-3 m-3" to="/signup">Join Us</router-link>
                </div>
            </div>
        </div>
    </div>
</template>