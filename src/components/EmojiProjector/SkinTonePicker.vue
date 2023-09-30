<template>
  <div data-testid="tone-picker" :class="selectedTone">
    <button @click="$emit('click')">button</button>
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

defineEmits(['click'])
</script>
