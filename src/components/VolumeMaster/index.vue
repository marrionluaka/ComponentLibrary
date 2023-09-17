<template>
  <article>
    <input ref="rangeSliderRef" data-test="volume-range" type="range" min="0" :max="maxVolume" value="50" id="slider" @change="handleVolumeChange" />
    <div>
      <span>0%</span>
      <p data-test="volume-value">Volume: {{ displayVolume }}%</p>
      <span data-test="volume-max">{{ maxVolume }}%</span>
    </div>
    <button data-test="volume-reset" :disabled="shouldDisableResetButton" @click="handleVolumeReset"><i>icon</i> Reset to 100% volume</button>
  </article>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

type Props = {
  volume: number
  max: number
}

const props = withDefaults(defineProps<Props>(), {
  volume: 1,
  max: 6
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
