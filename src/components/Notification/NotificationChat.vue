<template>
  <div class="max-w-sm inline-block" ref="NotificationRef">
    <NotificationButton class="notification-btn" :active="active" iconName="ChatBubbleLeftIcon" @click="toggleActive()" />

    <NotificationPopup v-if="active">
      <template #header>
        <NotificationHeader :theme="chatTheme" title="Chat"></NotificationHeader>
      </template>

      <ChatRoom class="h-72" :chatMessages="messages"></ChatRoom>

      <template #footer>
        <ChatPost @submit="$emit('submit', $event)"></ChatPost>
      </template>
    </NotificationPopup>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue'

import { chatTheme } from './themes'
import ChatRoom from '../ChatRoom/index.vue'
import ChatPost from '../ChatRoom/ChatPost.vue'
import NotificationPopup from './NotificationPopup.vue'
import NotificationButton from './NotificationButton.vue'
import NotificationHeader from './NotificationHeader.vue'

import type { Message } from '../../entities/chat'
import { useToggle } from '../../composables/useToggle'
import { useClickOutside } from '../../composables/useClickOutside'

const props = defineProps({
  messages: {
    type: Array as PropType<Message[]>,
    default: () => []
  }
})

const emit = defineEmits(['click', 'submit'])

const NotificationRef = ref<HTMLElement | null>(null)
const { active, toggleActive } = useToggle(() => emit('click'))
useClickOutside({ ref: NotificationRef, callback: () => toggleActive(false) })
</script>

<style lang="stylus" scoped>
.notification-btn
  @apply bg-indigo-500 text-white
</style>
