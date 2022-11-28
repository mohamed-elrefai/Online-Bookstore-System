<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<template>
    <div class="  bg-lightNode-first w-full h-12 flex items-center justify-between">
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
                <div class="m-2 bg-lightGreen-first h-[30px] rounded-md hover:bg-Browen-first">
                    <router-link class="p-2 m-2" to="/signin">Sign in</router-link>
                </div>
                <div class="m-2 bg-lightGreen-first rounded-md hover:bg-Browen-first">
                    <router-link class="p-2 m-2" to="/signup">Sign Up</router-link>
                </div>
            </div>
        </div>
    </div>
</template>