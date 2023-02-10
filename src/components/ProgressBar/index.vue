<template lang="pug">
.progress.bg-neutral-100.border.border-neutral-200(data-testid="progress-container")
  .progress__bar.rounded-full(
    role="progressbar"
    aria-valuemin="MIN"
    aria-valuemax="MAX"
    :aria-valuenow="clampedValue"
    :class="containerClasses"
    data-testid="progress-bar" :style="`width: ${clampedValue}%`"
  ) {{ clampedValue }}%
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    required: true
  },
  containerClasses: {
    type: String,
    default: 'bg-lime-600'
  }
})
const MIN = 0
const MAX = 100
const clampedValue = computed(() => Math.min(Math.max(MIN, props.value), MAX))
</script>

<style lang="stylus" scoped>
.progress
  @apply rounded-full overflow-hidden
  &__bar
    @apply text-white text-center
</style>
