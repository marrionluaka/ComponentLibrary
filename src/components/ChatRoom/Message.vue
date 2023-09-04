<script setup lang="ts">
import { PropType } from 'vue'

import NotificationSpeech from './Speech.vue'
import type { MessageType } from '../../entities/chat'
import formatToLocalString from '../../lib/format-date-local-string'

defineProps({
  message: {
    type: Object as PropType<MessageType>,
    default: () => ({})
  },
  alternate: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="flex items-center gap-x-3" :class="{ 'flex-row-reverse': alternate }">
    <NotificationSpeech
      v-if="message.type === 'text'"
      class="text-sm"
      :text="message.content"
      :variant="alternate ? 'author-speech' : ''"
    />
    <div class="time">{{ formatToLocalString(message.createdAt) }}</div>
  </div>
</template>

<style lang="stylus" scoped>
.time
  @apply text-xs
  color #B9BDC1
</style>
