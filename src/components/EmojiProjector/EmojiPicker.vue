<template>
  <div class="w-fit flex flex-col relative space-y-2">
    <SkinToneBar v-show="shouldDisplaySkinTones" class="self-end" data-testid="skin-tones" @select-tone="$emit('select-tone', $event)" />

    <div class="flex items-center">
      <EmojiBar @select-emoji="$emit('select-emoji', $event)" :selected-tone="selectedTone" />
      <SkinTonePicker class="ml-3" @click="$emit('show-skin-tones', $event)" :selected-tone="selectedTone" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Tone } from './core'

import EmojiBar from './EmojiBar.vue'
import SkinToneBar from './SkinToneBar.vue'
import SkinTonePicker from './SkinTonePicker.vue'

defineProps({
  shouldDisplaySkinTones: {
    type: Boolean,
    default: false
  },
  selectedTone: {
    type: String as PropType<Tone>,
    default: 'none'
  }
})

defineEmits(['show-skin-tones', 'select-tone', 'select-emoji'])
</script>
