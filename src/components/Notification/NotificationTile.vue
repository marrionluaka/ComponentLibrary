<template lang="pug">
button.tile
  .flex.gap-x-4.items-center
    SharedThumbnail(:src="user.thumbnail.src" :alt="user.thumbnail.alt" :size="user.thumbnail.size")
    NotificationContent(:username="user.username" :message="message")
  SharedStatus.flex-none.mt-3(v-if="user.isOnline")
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { User } from '../../lib/createRandomUser'
import { SharedThumbnail, SharedStatus } from '../shared'
import NotificationContent from './NotificationContent.vue'

defineProps({
  user: {
    type: Object as PropType<User>,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})
</script>

<style lang="stylus" scoped>
.tile
  @apply flex gap-x-4 justify-between p-6 appearance-none text-left w-full
  background-color #FDFEFD

  &:hover
    background-color #F6FBF7

.tile:not(:last-child)
  border-bottom 1px solid #DDE8E4
</style>
