<script setup lang="ts">
const props = defineProps({
  checked: Boolean,
  text: String,
  disabled: Boolean,
});

const emit = defineEmits([
  'update:checked',
]);

function toggle() {
  emit('update:checked', !props.checked);
}
</script>

<template>
  <div
    class="h-5 w-5 rounded border border-[#E1E9ED] inline-flex items-center justify-center text-sm cursor-default"
    :class="{
      'bg-orange-400': checked,
    }"
    @click="toggle"
  >
    <span v-if="checked">&times;</span>
  </div>
  <p class="inline-flex">{{ text }}</p>
</template>