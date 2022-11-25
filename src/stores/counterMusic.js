import { ref, computed } from 'vue'
import { defineStore } from 'pinia'



export const useMusicStore = defineStore('music', () =>{
    const musicObject = ref(null)

    const newMusicObject = computed(()=>musicObject)

    function addMusic(music){
        musicObject.value = music
    }



    return {musicObject, addMusic, newMusicObject}
})

