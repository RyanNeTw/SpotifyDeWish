<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import Player from '@/components/Player.vue';
</script>

<template>
  <main class="bg-stone-900 min-h-screen">
    <Header />
    <RouterView/>
    <Player />
  </main>
</template>


<style>
body{
  overflow-x: hidden;
}
</style>