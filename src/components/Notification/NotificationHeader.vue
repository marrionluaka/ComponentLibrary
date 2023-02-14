<template lang="pug">
.header
  .header__icon
    SharedIcon.w-5(:iconName="theme.displayIconName" :iconStyle="theme.displayIconStyle")

  .header__title
    span {{ title }}

  .header__action
    button.appearance-none(@click="$emit('action-clicked')")
      SharedIcon.w-5(:iconName="theme.actionIconName" :iconStyle="theme.actionIconStyle")
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
