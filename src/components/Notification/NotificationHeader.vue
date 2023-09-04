<template>
  <div class="header">
    <div class="header__icon">
      <SharedIcon class="w-5" :iconName="theme.displayIconName" :iconStyle="theme.displayIconStyle"></SharedIcon>
    </div>

    <div class="header__title">
      <span>{{ title }}</span>
    </div>

    <div class="header__action">
      <button class="appearance-none" @click="$emit('action-clicked')">
        <SharedIcon class="w-5" :iconName="theme.actionIconName" :iconStyle="theme.actionIconStyle"></SharedIcon>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import { SharedIcon } from '../shared'
import { IconTheme, defaultTheme } from './themes'

defineProps({
  title: {
    type: String,
    default: 'Notifications'
  },
  theme: {
    type: Object as PropType<IconTheme>,
    default: () => defaultTheme
  }
})

defineEmits(['action-clicked'])
</script>

<style lang="stylus" scoped>
.header
  @apply flex items-center justify-between p-4
  &__icon
    color #8aba7b
  &__title
    font-weight bold
    color #565653
  &__action
    color #999

    button
      vertical-align text-top
</style>
