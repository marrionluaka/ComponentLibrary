<template lang="pug">
.flex.items-center.gap-x-3(:class="{ 'flex-row-reverse': alternate }")
  NotificationSpeech.text-sm(:text="message.content" :variant="alternate ? 'author-speech' : ''")
  .time {{ formatToLocalString(message.createdAt) }}
</template>

<script setup lang="ts">
import { PropType } from 'vue'

import NotificationSpeech from './Speech.vue'
import type { Message } from '../../entities/chat'
import formatToLocalString from '../../lib/format-date-local-string'

defineProps({
  message: {
    type: Object as PropType<Message['messages']>,
    default: () => []
  },
  alternate: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="stylus" scoped>
.time
  @apply text-xs
  color #B9BDC1
</style>