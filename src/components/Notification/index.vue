<template lang="pug">
.max-w-sm(ref="NotificationRef")
  NotificationButton.notification-btn(:count="state.count" :active="active" @click="toggleActive()")

  NotificationPopup(v-if="active")
    template(v-slot:header)
      NotificationHeader

    section.h-72.overflow-y-scroll
      NotificationTile(v-for="user in users" :user="user" message="commented on your photo")

    template(v-slot:footer)
      button.appearance-none(@click="" style="color: #8aba7b;") See all activities
</template>

<script setup lang="ts">
import { PropType, reactive, ref } from 'vue'

import type { User } from '../../entities/user'
import NotificationTile from './NotificationTile.vue'
import NotificationButton from './NotificationButton.vue'
import NotificationPopup from './NotificationPopup.vue'
import NotificationHeader from './NotificationHeader.vue'

import { useToggle } from '../../composables/useToggle'
import { useClickOutside } from '../../composables/useClickOutside'

const props = defineProps({
  users: {
    type: Array as PropType<User[]>,
    required: true
  }
})
const emit = defineEmits(['click'])

const NotificationRef = ref<HTMLElement | null>(null)
const state = reactive({ count: props.users.length })

const { active, toggleActive } = useToggle(() => emit('click'))
useClickOutside({ ref: NotificationRef, callback: () => toggleActive(false) })
</script>

<style lang="stylus" scoped>
.notification-btn
  background-color #8aba7b
  color white
</style>
