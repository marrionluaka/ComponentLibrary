<template>
  <article>
    <input data-test="volume-range" type="range" min="0" max="100" value="50" id="slider" />
    <div data-test="volume-value">Volume: {{ displayVolume }}%</div>
  </article>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

type Props = {
  volume: number
  max: number
}

const props = withDefaults(defineProps<Props>(), {
  volume: 1,
  max: 6
})

const displayVolume = computed(() => props.volume * 100)
</script>
