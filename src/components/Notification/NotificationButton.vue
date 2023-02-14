<template lang="pug">
SharedButton.notification-btn(@click="$emit('click', $event)" :class="{ active: active }")
  SharedIcon.w-5(:iconName="iconName" :iconStyle="iconStyle")
  span.notification-btn__count(v-if="count > 0") {{ getNotificationCount(count) }}
</template>

<script setup lang="ts">
import { SharedButton, SharedIcon } from '../shared'

const props = defineProps({
  active: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number,
    default: 0
  },
  iconName: {
    type: String,
    default: 'BellIcon'
  },
  iconStyle: {
    type: String,
    default: 'solid'
  }
})

defineEmits(['click'])

function getNotificationCount(count: number): string {
  return props.count >= 9 ? '9+' : String(count)
}

</script>

<style lang="stylus" scoped>
.notification-btn
  @apply p-2 rounded-full relative

  &.active
    svg
      transform rotate(338deg)

  &__count
    @apply flex items-center justify-center absolute text-white w-6 h-6 rounded-full border-2 border-white text-xs
    background #fe7c71
    top -8px
    right -11px
</style>
