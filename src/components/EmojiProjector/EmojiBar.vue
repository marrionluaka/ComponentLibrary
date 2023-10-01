<template>
  <article data-testid="emoji-bar" class="emoji-bar">
    <ul data-testid="emoji-list" class="emoji-list">
      <li v-for="emoji in state.emojis" :key="emoji" :data-testid="emoji">
        <SharedButton @click="selectEmoji(emoji)">
          {{ emoji }}
        </SharedButton>
      </li>
    </ul>
  </article>
</template>

<script lang="ts" setup>
import { reactive, watch, PropType } from 'vue'
import SharedButton from './ShareButton.vue'
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
  },
  { immediate: true }
)

function selectEmoji(emoji: string) {
  emit('select-emoji', emoji)
}
</script>

<style lang="stylus" scoped>
.emoji-bar
  @apply px-3 rounded-full
  background-color rgb(60, 64, 67)

.emoji-list
  @apply flex items-center text-2xl
  padding .35rem 0
  & > li + li
    @apply ml-1
</style>
