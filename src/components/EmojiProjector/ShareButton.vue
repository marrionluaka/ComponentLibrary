<template>
  <button @click="$emit('click')" type="button">
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineEmits(['click'])
</script>

<style lang="stylus" scoped>
button
  @apply flex items-center justify-center w-10 h-10 p-2 bg-transparent rounded-full

  &:hover
	  @apply bg-gray-500
</style>
