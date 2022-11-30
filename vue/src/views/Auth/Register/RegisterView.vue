<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue'
import {City} from '../../../Types/City'
import RegisterInterface from '../../../InterFaces/Auth/Register'

export default defineComponent({
    setup() {
        const allCity = City

        return {allCity}
    },
    data(): RegisterInterface {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
            address: {
                streetAddress: "",
                city: "",
                country: ""
            },
            error: ""
        }
    },
    methods: {
        async RegisterApi(e: Event){
            e.preventDefault();
            if(this.password.length < 6){
                this.error = "Password must be at least 6"
            }else{
                this.error = ""
                const res = await axios.post('api/register', {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password,
                    phoneNumber: this.phoneNumber,
                    address:{
                        streetAddress: this.address.streetAddress,
                        city: this.address.city,
                        country: this.address.country
                    }
                })
                this.$router.push('/')                
            }            
        },
    },
})
</script>

<template>
    <div class="w-full flex flex-wrap">

        <!-- Register Section -->
        <div class="w-full md:w-1/2 flex flex-col">

            <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
                <a href="#" class="bg-black text-white font-bold text-xl p-4" alt="Logo">EBI</a>
            </div>

            <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                <p class="text-center text-3xl">Sign Up.</p>
                <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="RegisterApi">
                    <div class="md:flex md:w-full md:justify-between">
                        <div class="flex flex-col pt-2 w-full">
                            <label for="name" class="text-lg">First Name</label>
                            <input type="text" v-model="firstName" id="name" placeholder="Enter your first name"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div class="flex flex-col pt-2 w-full md:ml-1">
                            <label for="name" class="text-lg">Last Name</label>
                            <input type="text" v-model="lastName" id="name" placeholder="Enter your last name"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                    </div>

                    <div class="flex flex-col pt-2">
                        <label for="email" class="text-lg">Email</label>
                        <input type="email" id="email" v-model="email" placeholder="your@email.com"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div class=" text-red-500">
                        {{error}}
                    </div>

                    <div class="flex flex-col pt-2">
                        <label for="password" class="text-lg">Password</label>
                        <input type="password" id="password" v-model="password" placeholder="Password"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div class="flex flex-col pt-2">
                        <label for="confirm-password" class="text-lg">Phone Number</label>
                        <input type="text" id="confirm-password" v-model="phoneNumber" placeholder="Phone Number"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div class="flex flex-col pt-2">
                        <label for="confirm-password" class="text-lg">Address</label>
                        <input type="text" id="confirm-password" v-model="address.streetAddress" placeholder="Address"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div class="md:flex md:w-full md:justify-between">
                        <div class="flex flex-col pt-2 w-full ml-1">
                            <label for="City" class="text-lg">City</label>
                            <select name="" v-model="address.city" id="" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                                <div value="None">None</div>
                                <option v-for="all in allCity" :key="all.id" v-bind:value="all.governorate_name_en">{{ all.governorate_name_en }}</option>
                            </select>
                        </div>
                        <div class="flex flex-col pt-2 w-full ml-1">
                            <label for="Country" class="text-lg">Country</label>
                            <input type="text" v-model="address.country" id="name" placeholder="Country"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                    </div>

                    <input type="submit" value="Sign Up"
                        class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
                </form>
                <p class="text-center m-2">or</p>
                <button class="bg-blue-500 border-black text-white font-bold text-lg hover:bg-blue-700 p-2">Google</button>
                <div class="text-center pt-12 pb-12">
                    <p>Already have an account? <router-link to="/signin" class="underline font-semibold">Sign in here.</router-link></p>
                </div>
            </div>

        </div>

        <!-- Image Section -->
        <div class="w-1/2 shadow-2xl">
            <img class="object-cover w-full h-full hidden md:block" src="../../../assets/1.jpg"
                alt="Background" />
        </div>
    </div>
</template>