<script setup lang="ts">
import { ref } from 'vue'
import { useMusicStore } from '@/stores/counterMusic'
import { storeToRefs } from 'pinia'

const { newMusicObject } = storeToRefs(useMusicStore())

</script>




<template>

    <section class="fixed bottom-0 w-screen bg-stone-900 flex justify-center py-8">
        <audio :src="newMusicObject.value" controls autoplay>
        </audio>

    </section>



</template>