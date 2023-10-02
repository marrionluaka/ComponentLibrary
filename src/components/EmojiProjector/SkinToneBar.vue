<template>
  <SharedListContainer class="bg-metalic-700 rounded-lg px-2">
    <li v-for="key in skinTones" :key="key">
      <SkinTonePicker @click="selectTone(key)" :selected-tone="key" />
    </li>
  </SharedListContainer>
</template>

<script lang="ts" setup>
import { Tone } from './core'
import SkinTonePicker from './SkinTonePicker.vue'
import SharedListContainer from './ShareListContainer.vue'

const emit = defineEmits(['select-tone'])

const skinTones: Tone[] = ['none', 'white', 'creamWhite', 'lightBrown', 'brown', 'darkBrown']

function selectTone(tone: Tone) {
  emit('select-tone', tone)
}
</script>
