<template>
  <span class="status" :class="variant" />
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

type Status = 'online' | 'offline' | 'away'

defineProps({
  variant: {
    type: String as PropType<Status>,
    default: 'online'
  }
})
</script>

<style lang="stylus" scoped>
.status
  --size 7px

  height var(--size)
  width var(--size)
  border-radius 50%
  &.online
    background-color #43b724
  &.away
    background-color #999
  &.offline
    background-color #999
</style>
