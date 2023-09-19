<template>
  <article class="max-w-md bg-black text-white p-4 rounded-lg">
    <input
      ref="rangeSliderRef"
      type="range"
      :value="displayVolume"
      min="0"
      :max="maxVolume"
      class="w-full"
      data-test="volume-range"
      @change="handleVolumeChange"
    />
    <article class="flex justify-between mb-3">
      <span>0%</span>
      <p data-test="volume-value">Volume: {{ displayVolume }}%</p>
      <span data-test="volume-max">{{ maxVolume }}%</span>
    </article>
    <button
      data-test="volume-reset"
      :disabled="shouldDisableResetButton"
      class="flex items-center px-4 py-2 rounded-md bg-gray-800 text-white w-full text-left"
      @click="handleVolumeReset"
    >
      <ArrowPathIcon class="w-4 mr-1" />
      <p>Reset to 100% volume</p>
    </button>
  </article>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ArrowPathIcon } from '@heroicons/vue/24/solid'

import validateVolumeBounds from './lib/validate-max-volume-bounds'
import validateMaxVolumeBounds from './lib/validate-max-volume-bounds'

const props = withDefaults(defineProps<{ volume: number; max: number }>(), {
  volume: {
    type: Number,
    required: true,
    default: 1,
    validator: validateVolumeBounds
  },
  max: {
    type: Number,
    required: true,
    default: 6,
    validateMaxVolumeBounds
  }
})

const emit = defineEmits(['update-volume', 'reset-volume'])

const rangeSliderRef = ref<HTMLInputElement | null>(null)
const displayVolume = ref(Number(props.volume.toFixed(2)) * 100)
const maxVolume = computed(() => props.max * 100)
const shouldDisableResetButton = computed(() => displayVolume.value === 100)

function handleVolumeChange(e: Event) {
  const volume = (e.target as HTMLInputElement).value

  displayVolume.value = Number(volume)
  emit('update-volume', volume)
}

function handleVolumeReset() {
  if (!rangeSliderRef.value) return

  rangeSliderRef.value.value = '100'
  displayVolume.value = 100
  emit('reset-volume')
}
</script>

<style lang="stylus" scoped>
button[disabled]
  @apply opacity-50
</style>
