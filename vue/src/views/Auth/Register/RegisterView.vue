<script lang="ts">
import { defineComponent } from 'vue'
import RegisterInterface from '../../../InterFaces/Auth/Register'
export default defineComponent({
    data(): RegisterInterface {
        return {
            firstName: "",
            lastName: "string",
            email: "string",
            password: "string"
        }
    },
    methods: {
        async RegisterApi(e: Event){
            e.preventDefault();
            
            console.log(this.firstName)
        }
    },
})
</script>

<template>
    {{firstName}}
    <form @submit="RegisterApi">
        <input type="text" class=" bg-black text-white" v-model="firstName">
        <button>send</button>
    </form>
</template>