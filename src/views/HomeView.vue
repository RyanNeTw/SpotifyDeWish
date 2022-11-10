<script setup lang="ts">
import { ref } from 'vue';
import { search } from '@/api/spotify';

const response = ref([]);

async function init() {
  response.value = await search('Flume', 'artist')
}

init()
</script>

<template>
  <main class="p-16">
   <pre>{{ response }}</pre>
  </main>
</template>
