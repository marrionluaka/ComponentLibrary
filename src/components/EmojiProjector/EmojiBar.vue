<template>
  <article data-testid="emoji-bar" class="emoji-bar">
    <SharedListContainer data-testid="emoji-list">
      <li v-for="emoji in state.emojis" :key="emoji" :data-testid="emoji">
        <SharedButton @click="selectEmoji(emoji)">
          {{ emoji }}
        </SharedButton>
      </li>
    </SharedListContainer>
  </article>
</template>

<script lang="ts" setup>
import { reactive, watch, PropType } from 'vue'
import { emojis, getNewEmojis, Tone } from './core'

import SharedButton from './ShareButton.vue'
import SharedListContainer from './ShareListContainer.vue'

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
  },
  { immediate: true }
)

function selectEmoji(emoji: string) {
  emit('select-emoji', emoji)
}
</script>

<style lang="stylus" scoped>
.emoji-bar
  @apply rounded-full
  background-color rgb(60, 64, 67)
</style>
