<template lang="pug">
.speech(:class="variant") {{ text }}
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: ''
  }
})
</script>

<style lang="stylus" scoped>
.speech
  @apply border border-gray-200 p-3 rounded-md
  color #787878

  &.author-speech
    background-color #F0F9F3
    color #707571
    border-color transparent
</style>
