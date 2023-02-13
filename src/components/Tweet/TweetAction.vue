<template lang="pug">
button.appearance-none.tweet-action(@click="$emit('click')")
  component.tweet-action-icon(:is="tweetIcon")
  span(v-if="count") {{ formatCount(count) }}
</template>

<script setup lang="ts">
import { computed } from 'vue'
import * as TweetIcon from './icons'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: false
  }
})

defineEmits(['click'])

const { ...icons } = TweetIcon
const tweetIcon = computed(() => (icons as any)[props.icon])

function formatCount(count: number): string {
  return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
</script>

<style lang="stylus" scoped>
.tweet-action
  display flex
  align-items center
  column-gap 12px

  &-icon
    --icon-size 16px

    fill currentColor
    height var(--icon-size)
    width var(--icon-size)
</style>
