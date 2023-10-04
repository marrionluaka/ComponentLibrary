<template>
  <button class="w-10 p-2 text-white bg-gray-700 rounded-full" @click="$emit('click')" type="button">
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineEmits(['click'])
</script>
