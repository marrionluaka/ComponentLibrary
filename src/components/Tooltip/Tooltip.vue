<template lang="pug">
.tooltip(data-test="tooltip" @mouseover="isShowing = true" @mouseleave="isShowing = false")
  .tooltip-content(v-show="isShowing" :class="position" data-test="tooltip-content") {{ content }}
  slot
</template>

<script lang="ts">
import { defineComponent, PropType, ref, Ref } from 'vue'

type Position = 'top' | 'right' | 'bottom' | 'left'

export default defineComponent({
  name: 'Tooltip',

  props: {
    content: {
      type: String,
      required: true
    },
    position: {
      type: String as PropType<Position>,
      default: 'bottom'
    }
  },

  setup() {
    const isShowing: Ref<boolean> = ref(false)
    return { isShowing }
  }
})
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
