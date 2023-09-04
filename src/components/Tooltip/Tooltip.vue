<template>
  <div class="tooltip" data-test="tooltip" @mouseover="isShowing = true" @mouseleave="isShowing = false">
    <div class="tooltip-content" v-show="isShowing" :class="position" data-test="tooltip-content">{{ content }}</div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, Ref } from 'vue'

type Position = 'top' | 'right' | 'bottom' | 'left'

defineProps({
  content: {
    type: String,
    required: true
  },
  position: {
    type: String as PropType<Position>,
    default: 'bottom'
  }
})

const isShowing: Ref<boolean> = ref(false)
</script>

<style lang="stylus" scoped>
.tooltip
  position relative
  display inline-block
  &-content
    @apply absolute bg-gray-900 text-white
    &.top
      @apply -top-7
    &.right
      @apply -right-12
    &.bottom
      @apply -bottom-7
    &.left
      @apply -left-12
</style>
