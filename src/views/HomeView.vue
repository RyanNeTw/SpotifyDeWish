<script setup lang="ts">
import { initCustomFormatter, ref } from 'vue';
import { useRoute } from 'vue-router'
import { search } from '@/api/spotify';
import { findArtist } from '@/api/spotify'

const response = ref([])
const route = useRoute()
const query = ref(route.query.query as string ?? '')
let regex = /(?<year>\d{4})(?<month>-\d{2})(?<day>-\d{2})/

async function init() {

  response.value = await search(query.value, 'album')
}

if(query.value.length > 0) {
  init()
} 

</script>

<template>
  <main class="px-16 pt-8 pb-32 bg-stone-900">  
    <form method="get" class="flex justify-center flex-row">
        <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
          <input v-model="query" type="search" name="query" class="form-control relative flex-auto min-w-0 block w-3/4 px-3 py-1.5 text-base font-normal text-green-800 bg-transparent border-2 border-green-700 bg-clip-padding  border-solid rounded transition ease-in-out m-0 focus:text-green-700 focus:border-green-700 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3">
          <button type="button" class="btn inline-block px-6 py-2 border-2 border-green-700 text-green-700 font-medium text-xs leading-tight uppercase rounded hover:bg-green-900 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" id="button-addon3" placeholder="Search" >Search</button>
        </div>
    </form>

    <section class="mb-3 flex flex-row gap-4">
        <button  class="text-white bg-stone-800 hover:bg-stone-700 transition p-3 rounded-3xl">Albums</button>
        <button  class="text-white bg-stone-800 hover:bg-stone-700 transition p-3 rounded-3xl">Artists</button>
    </section>

    <ul v-if="response != 0" class="flex flex-wrap gap-12">
      <li v-for="album in response.albums.items" :key="album">
        <a :href="`/albums/?query=${album.id}`" class="bg-stone-800 hover:bg-stone-700 transition-colors flex flex-col justify-center rounded-lg">
          <div :style="{backgroundImage: `url(${album.images[0].url})`}" class="bg-no-repeat bg-cover self-center images"></div> 
          <h3 class="text-white font-bold self-center">{{ album.name }}</h3>
          <h4 class="text-white self-center flex flex-row">
            <span v-for="date in regex.exec(album.release_date)?.slice(1, 2) ">
              {{ date }}
            </span>
             .{{ album.artists[0].name}}
          </h4>
        </a>
      </li>
    </ul>
  </main>
  <!-- <pre> {{ response.albums.items }}</pre>   -->
</template>



<style scoped>
  ul li a {
    width: 17rem;
    height: 20rem;
  }
  ul li a .images {
    width: 15rem;
    height: 15rem;
  }
  ul li a h3, ul li a h4{
    max-width: 15em;
  }
</style>