<script setup lang="ts">

import { ref } from 'vue';
import { useRoute } from 'vue-router'

import { profil } from '@/api/spotify';


const response = ref([])
const route = useRoute()


async function init(){
    response.value = await profil()
}


init()

</script>




<template>
    <header class="flex flex-row justify-between px-20 py-4 bg-stone-800 items-center ">
        <router-link  to="/" class="text-3xl text-white font-bold">Spotify</router-link>
        <router-link to="/login" class="flex flex-row items-center gap-4 slef-center bg-green-800 p-2 rounded hover:bg-green-700 transition ">
            <ul v-if="response.length != 0" class="flex flex-row items-center gap-4 slef-center">
                <h4 class="text-stone-800 font-bold text-1xl">{{ response.display_name}}</h4>
                <li v-for="image in response.images" :key="image">
                    <div :style="{backgroundImage: `url(${image.url})`}" class="bg-no-repeat bg-cover images"></div>
                </li>
            </ul> 
            <h4 v-else class="text-stone-800 font-bold text-1xl">Connexion</h4>
        </router-link>
    </header>

    
</template>


<style scoped>
.images{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
}
</style>