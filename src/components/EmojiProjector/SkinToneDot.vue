<template>
  <div :class="`tone-ring tone-ring--${selectedTone}`">
    <span :class="`tone-dot tone-dot--${selectedTone}`" />
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Tone } from './core'

defineProps({
  selectedTone: {
    type: String as PropType<Tone>,
    default: 'none'
  }
})
</script>

<style lang="stylus" scoped>
.tone
  &-ring
    @apply flex items-center justify-center rounded-full w-6 h-6 border-2 bg-opacity-50
    &--none
      @apply border-tone-none
    &--white
      @apply border-tone-white
    &--creamWhite
      @apply border-tone-creamWhite
    &--lightBrown
      @apply border-tone-lightBrown
    &--brown
      @apply border-tone-brown
    &--darkBrown
      @apply border-tone-darkBrown

  &-dot
    @apply rounded-full w-4 h-4
    &--none
      @apply bg-tone-none
    &--white
      @apply bg-tone-white
    &--creamWhite
      @apply bg-tone-creamWhite
    &--lightBrown
      @apply bg-tone-lightBrown
    &--brown
      @apply bg-tone-brown
    &--darkBrown
      @apply bg-tone-darkBrown
</style>
