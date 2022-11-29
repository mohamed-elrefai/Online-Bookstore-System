<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';

export default defineComponent({
    data(){
        return{
            email: "",
            password: ""
        }
    },
    methods: {
        async LoginApi(e: Event){
            e.preventDefault()
            const res = await axios.post('/api/login', {
                email: this.email,
                password: this.password
            })
            console.log(res)
        }
    },
})
</script>

<template>
    <div class="w-full flex flex-wrap">
    
        <!-- Register Section -->
        <div class="w-full md:w-1/2 flex flex-col">
    
            <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
                <a href="/" class="bg-black text-white font-bold text-xl p-4" alt="Logo">EBI</a>
            </div>
    
            <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                <p class="text-center text-3xl">Sign In.</p>
                <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="LoginApi">

                    <div class="flex flex-col pt-2">
                        <label for="email" class="text-lg">Email</label>
                        <input type="email" id="email" v-model="email" placeholder="your@email.com"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
    
                    <div class="flex flex-col pt-2">
                        <label for="password" class="text-lg">Password</label>
                        <input type="password" id="password" v-model="password" placeholder="Password"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
    
                    <input type="submit" value="Sign in"
                        class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
                </form>
                <p class="text-center m-2">or</p>
                <button class="bg-blue-500 border-black text-white font-bold text-lg hover:bg-blue-700 p-2">Google</button>
                <div class="text-center pt-12 pb-12">
                    <p>Don't have an account? <router-link to="/signup" class="underline font-semibold">Sign Up here.</router-link></p>
                </div>
            </div>
    
        </div>
    
        <!-- Image Section -->
        <div class="w-1/2 shadow-2xl">
            <img class="object-cover w-full h-screen hidden md:block" src="../../../assets/3.jpg"
                alt="Background" />
        </div>
    </div>
</template>