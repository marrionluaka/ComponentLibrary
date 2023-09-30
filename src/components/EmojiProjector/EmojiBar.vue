<template>
  <article data-testid="emoji-bar">
    <ul data-testid="emoji-list">
      <li v-for="emoji in state.emojis" :key="emoji" :data-testid="emoji">
        <button @click="selectEmoji(emoji)">{{ emoji }}</button>
      </li>
    </ul>
  </article>
</template>

<script lang="ts" setup>
import { reactive, watch, PropType } from 'vue'
import { emojis, getNewEmojis, Tone } from './core'

const props = defineProps({
  selectedTone: {
    type: String as PropType<Tone>,
    default: 'none'
  }
})
const emit = defineEmits(['select-emoji'])
const state = reactive({ emojis })

watch(
  () => props.selectedTone,
  tone => {
    Object.assign(state, { emojis: getNewEmojis(state.emojis, tone) })
  }
)

function selectEmoji(emoji: string) {
  emit('select-emoji', emoji)
}
</script>
