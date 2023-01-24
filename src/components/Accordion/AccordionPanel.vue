<template lang="pug">
.accordion-panel(:class="{ active: isOpen }" data-test="accordion-panel")
  .p-2
    slot
</template>

<script lang="ts">
import type { PropType } from 'vue'

defineProps({
  isOpen: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})
</script>

<style lang="stylus" scoped>
.accordion-panel
  @apply p-0 max-h-0 overflow-hidden transition-all ease-in-out
  &.active
    @apply max-h-screen transition-all
</style>
