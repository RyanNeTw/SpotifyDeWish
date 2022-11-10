<script setup lang="ts">
const props = defineProps({
  modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue'])

function toggle() {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <div
    class="flex w-10 h-5 border rounded-3xl px-px items-center"
    @click="toggle">
    <div
      class="transition-all ease-in-out duration-300"
      :class="[modelValue ? 'flex-grow' : 'flex-grow-0']"
    ></div>
    <div class="bg-black h-4 w-4 rounded-full"></div>
  </div>
</template> 