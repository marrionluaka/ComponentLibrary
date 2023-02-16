<template lang="pug">
.progress.bg-neutral-100.border.border-neutral-200(data-testid="progress-container")
  .progress__bar.rounded-full.h-full(
    role="progressbar"
    aria-valuemin="min"
    aria-valuemax="max"
    :aria-valuenow="value"
    :class="containerClasses"
    data-testid="progress-bar" :style="`width: ${value}%`"
  )
    slot
      | &nbsp;
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: Number,
    required: true
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  containerClasses: {
    type: String,
    default: 'bg-lime-600'
  }
})
</script>

<style lang="stylus" scoped>
.progress
  @apply rounded-full overflow-hidden
  &__bar
    @apply text-white text-center
</style>
