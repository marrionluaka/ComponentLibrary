<template>
  <article>
    <template v-if="state.shouldDisplayEmojis">
      <Projector v-if="state.selectedEmoji" :emoji="state.selectedEmoji" />
      <SkinToneBar v-show="state.shouldDisplaySkinTones" data-testid="skin-tones" @select-tone="selectTone" />

      <div class="flex">
        <EmojiBar @select-emoji="selectEmoji" :selected-tone="state.selectedTone" />
        <SkinTonePicker @click="showSkinTones" :selected-tone="state.selectedTone" />
      </div>
    </template>

    <EmojiButton @click="showEmojis" />
  </article>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import { Tone } from './core'
import EmojiBar from './EmojiBar.vue'
import Projector from './Projector.vue'
import EmojiButton from './EmojiButton.vue'
import SkinToneBar from './SkinToneBar.vue'
import SkinTonePicker from './SkinTonePicker.vue'

const state = reactive({
  selectedEmoji: null,
  selectedTone: 'none',
  shouldDisplayEmojis: false,
  shouldDisplaySkinTones: false
})

function selectTone(tone: Tone) {
  Object.assign(state, { selectedTone: tone })
}

function selectEmoji(emoji: any) {
  Object.assign(state, { selectedEmoji: emoji })
}

function showEmojis() {
  Object.assign(state, { shouldDisplayEmojis: !state.shouldDisplayEmojis, shouldDisplaySkinTones: false })
}

function showSkinTones() {
  Object.assign(state, { shouldDisplaySkinTones: !state.shouldDisplaySkinTones })
}
</script>
