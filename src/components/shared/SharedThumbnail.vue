<template lang="pug">
img.thumbnail(:src="src" :alt="alt" :class="size")
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'md'
  }
})
</script>

<style lang="stylus" scoped>
.thumbnail
  &.sm
    --thumbnail-size 32px
  &.md
    --thumbnail-size 48px

  width var(--thumbnail-size)
  height var(--thumbnail-size)
  border-radius var(--thumbnail-size)
</style>
