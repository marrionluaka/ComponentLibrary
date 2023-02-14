<template lang="pug">
.tile-content
  span.tile-content__username {{ username }}
  span.tile-content__message {{ message }}
</template>

<script setup lang="ts">
defineProps({
  username: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})
</script>

<style lang="stylus" scoped>
.tile-content
  font-size 14px

  &__username
    @apply font-semibold mr-1
    color #565653
  &__message
    color #95A291
</style>
