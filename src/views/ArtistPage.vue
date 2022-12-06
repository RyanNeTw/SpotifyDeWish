<script setup lang="ts">
import { initCustomFormatter, ref } from 'vue';
import { useRoute } from 'vue-router'
import { useMusicStore } from '@/stores/counterMusic'
import { findArtist } from '@/api/spotify';
import { findArtistTopTracks } from '@/api/spotify'

const response = ref([])
const topTracks = ref([])
const route = useRoute()
const query = ref(route.query.query as string ?? '')
const store = useMusicStore()
const { musicObject, newMusicObject, addMusic} = store

async function init() {
  response.value = await findArtist(query.value)
  topTracks.value = await findArtistTopTracks(query.value)
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
        <section :style="{backgroundImage: `url(${response.images[0].url})`}" class="image bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start p-4">
            <div class="flex flex-col">
                <h1 class="text-5xl uppercase font-bold ">{{ response.name}}</h1>
                <h4 class="text-2xl self-center"> {{ response.followers.total }} Followers</h4>
            </div>
        </section>


        <section class="p-8 flex flex-col gap-8 mb-20">
            <h3 class="font-bold text-3xl text-white">Populaire</h3>
            <ul class="flex flex-col">
                <li v-for="(track, item) in topTracks.tracks.slice(0, 5)" :key="track" @click="addMusicFromLayout(track.preview_url)" class="flex flex-row items-center justify-between hover:bg-stone-700 transition p-4 rounded">
                    <div class="flex flex-row items-center gap-8">
                        <h4 class="text-white">{{ item + 1 }}</h4>
                        <div :style="{backgroundImage: `url(${track.album.images[0].url})`}" class="imageAlbum bg-cover"></div>
                        <h4 class="text-white">{{ track.name }}</h4>
                    </div>
                    <h4 class="text-white">{{ Math.floor((track.duration_ms/1000/60) << 0) }}:{{Math.floor((track.duration_ms/1000) % 60)}}</h4>
                </li>
            </ul>
        </section>

    


</template>



<style scoped>
    .image{
        width: 100vw;
        height: 40vh;
    }
    .imageAlbum{
        width: 4rem;
        height: 4rem;
    }
</style>