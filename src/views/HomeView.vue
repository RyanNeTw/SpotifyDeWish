<script setup lang="ts">
import { instance } from '@/api';
import { search } from '@/api/spotify';
import { ref } from 'vue';

const artists = ref([]);

async function init() {
  artists.value = await search('Flume', 'artist')
}

init()
</script>

<template>
  <main class="p-16 bg-[#E1E9ED]">
   <pre>{{ artists }}</pre>
  </main>
</template>
