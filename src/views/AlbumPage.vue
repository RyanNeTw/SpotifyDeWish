<script setup lang="ts">
import { initCustomFormatter, ref } from 'vue';
import { useRoute } from 'vue-router'
import { useMusicStore } from '@/stores/counterMusic'
import { findAlbum } from '@/api/spotify';


const response = ref([])
const route = useRoute()
const query = ref(route.query.query as string ?? '')
const store = useMusicStore()
const { musicObject, newMusicObject, addMusic} = store

async function init() {
  response.value = await findAlbum(query.value)
  console.log(response.value)
}


async function addMusicFromLayout(music:string){
    addMusic(music)
    console.log(newMusicObject.value)
}

if(query.value.length > 0){
    init()
}

</script>



<template>

    <section class="flex flex-wrap gap-12 p-4 bg-gradient-to-b from-stone-800 to-stone-900">
        <div v-for="image in response.images?.slice(0,1)" :key="image">
            <div :style="{backgroundImage: `url(${image.url})`}" class="image bg-no-repeat bg-cover self-center"></div> 
        </div>
        <div class="flex flex-col justify-end gap-4">
            <h4 class="text-white uppercase">{{ response.album_type }}</h4>
            <h2 class="text-white text-6xl font-bold">{{ response.name }}</h2>
            <div>
                <h4 class="text-white"> 
                    <span v-for="artist in response.artists" :key="artist">
                        {{ artist.name}} 
                    </span>
                . {{ response.total_tracks }} songs</h4> 
            </div>
        </div>
    </section>

    <section class="p-8 mb-20">
        <ul>
            <li v-for="track in response.tracks.items" :key="track"  @click="addMusicFromLayout(track.preview_url)" class="flex flex-row items-center justify-between hover:bg-stone-700 transition p-4 rounded">
                <div class="flex flex-row items-center gap-8">
                    <h4 class="text-white">{{ track.track_number }}</h4>
                    <div class="flex flex-col self-start">
                        <h4 class="text-white">{{ track.name }}</h4>
                        <ul class="flex flex-row gap-4">
                            <li v-for="artist in track.artists">
                                <router-link :to="`/artist/?query=${artist.id}`" class="text-stone-600 underline hover:text-green-800">
                                    {{ artist.name}}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <h4 class="text-white" >{{ Math.floor((track.duration_ms/1000/60) << 0)}}:<span v-if="Math.floor((track.duration_ms/1000) % 60) < 10">0</span>{{ Math.floor((track.duration_ms/1000) % 60)}}</h4>
            </li>
        </ul>
    </section>
</template>


<style scoped>
    section .image {
        width: 15rem;
        height: 15rem;
    }
</style>