<template>
  <article>
    <input ref="rangeSliderRef" type="range" value="50" min="0" :max="maxVolume" data-test="volume-range" @change="handleVolumeChange" />
    <div>
      <span>0%</span>
      <p data-test="volume-value">Volume: {{ displayVolume }}%</p>
      <span data-test="volume-max">{{ maxVolume }}%</span>
    </div>
    <button data-test="volume-reset" :disabled="shouldDisableResetButton" @click="handleVolumeReset">
      <i>icon</i> Reset to 100% volume
    </button>
  </article>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import validateVolumeBounds from './lib/validate-max-volume-bounds'
import validateMaxVolumeBounds from './lib/validate-max-volume-bounds'

type Props = {
  volume: number
  max: number
}

const props = withDefaults(defineProps<Props>(), {
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

const emit = defineEmits(['volume-update', 'volume-reset'])

const rangeSliderRef = ref<HTMLInputElement | null>(null)
const displayVolume = ref(props.volume * 100)
const maxVolume = computed(() => props.max * 100)
const shouldDisableResetButton = computed(() => displayVolume.value === 100)

function handleVolumeChange(e: Event) {
  const volume = (e.target as HTMLInputElement).value

  displayVolume.value = Number(volume)
  emit('volume-update', volume)
}

function handleVolumeReset() {
  if (!rangeSliderRef.value) return

  rangeSliderRef.value.value = '100'
  displayVolume.value = 100
  emit('volume-reset')
}
</script>
