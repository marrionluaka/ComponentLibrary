<template>
  <div class="progress bg-neutral-100 border border-neutral-200" data-testid="progress-container">
    <div
      class="progress__bar rounded-full h-full transition-all"
      role="progressbar"
      aria-valuemin="min"
      aria-valuemax="max"
      :aria-valuenow="value"
      :class="[containerClasses, `progress__bar--${variant}`]"
      data-testid="progress-bar"
      :style="`width: ${value}%`"
    >
      <slot>&nbsp;</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: Number,
    required: true
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  variant: {
    type: String,
    default: ''
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

    &--with-transition
      transition: width .5s ease-in-out
</style>
