<template>
  <section ref="SectionRef">
    <div
      class="chatMessage flex gap-x-3"
      v-for="(chatMessage, index) in chatMessages"
      :key="chatMessage.id"
      :class="{ 'flex-row-reverse': index % 2 !== 0 }"
    >
      <SharedThumbnail :src="chatMessage.user.thumbnail.src" :alt="chatMessage.user.thumbnail.alt" size="sm" />
      <div class="flex flex-col gap-y-3">
        <NotificationMessage
          v-for="message in chatMessage.messages"
          :key="message.createdAt"
          :message="message"
          :alternate="index % 2 !== 0"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PropType, ref, nextTick, watch, toRef } from 'vue'

import { SharedThumbnail } from '../shared'
import NotificationMessage from './Message.vue'
import type { Message } from '../../entities/chat'

const props = defineProps({
  chatMessages: {
    type: Array as PropType<Message[]>,
    default: () => []
  }
})

const SectionRef = ref<HTMLElement | null>(null)

watch(toRef(props, 'chatMessages'), () => {
  nextTick(() => {
    const section = SectionRef.value
    section?.scroll({ top: section.scrollHeight, behavior: 'smooth' })
  })
})
</script>

<style lang="stylus" scoped>
section
  @apply space-y-6 p-6 overflow-y-scroll
  border-color #F4F4F4
</style>
