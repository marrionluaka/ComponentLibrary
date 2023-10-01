<template>
  <button @click="onClick" type="button" :class="{ active: state.active }">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const emit = defineEmits(['click'])
const state = reactive<{ active: boolean }>({ active: false })

function onClick() {
  emit('click')
  state.active = !state.active
}
</script>

<style lang="stylus" scoped>
button
  @apply flex items-center justify-center w-10 h-10 p-2 bg-transparent rounded-full

  &:hover
	  @apply bg-gray-500
  &.active
	  @apply bg-gray-700
</style>
