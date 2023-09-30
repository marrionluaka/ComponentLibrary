<template>
  <ul>
    <li v-for="(value, key) in skinTones" :key="key" :class="value">
      <button @click="selectTone(key)">{{ key }}</button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { Tone } from './core'
const emit = defineEmits(['select-tone'])

const skinTones: Record<Tone, string> = {
  none: 'yellow',
  white: 'white',
  creamWhite: '',
  lightBrown: '',
  brown: '',
  darkBrown: ''
}

function selectTone(tone: Tone) {
  emit('select-tone', tone)
}
</script>
