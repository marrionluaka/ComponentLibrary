<template lang="pug">
.tweet-author
  span.tweet-author__name {{ name }}
  span.tweet-author__meta
    | {{ username }}
    | &middot; 
    TweetDateTime(:dateTime="dateTime")
</template>

<script setup lang="ts">
import TweetDateTime from './TweetDateTime.vue'

defineProps({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  dateTime: {
    type: String,
    required: true
  }
})
</script>

<style lang="stylus" scoped>
.tweet-author
  margin-bottom 2px

  &__name
    color #000
    font-weight bold
  &__meta
    color #71767b
    margin-left 4px
</style>
