<template lang="pug">
img.thumbnail(:src="src" :alt="alt")
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
  }
})
</script>

<style lang="stylus" scoped>
.thumbnail
  --thumbnail-size 48px

  width var(--thumbnail-size)
  height var(--thumbnail-size)
  border-radius var(--thumbnail-size)
</style>
