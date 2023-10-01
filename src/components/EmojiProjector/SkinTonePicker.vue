<template>
  <div>
    <SharedButton @click="$emit('click')">
      <SkinToneDot :selected-tone="selectedTone" />
    </SharedButton>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Tone } from './core'
import SharedButton from './ShareButton.vue'
import SkinToneDot from './SkinToneDot.vue'

defineProps({
  selectedTone: {
    type: String as PropType<Tone>,
    default: 'none'
  }
})

defineEmits(['click'])
</script>
