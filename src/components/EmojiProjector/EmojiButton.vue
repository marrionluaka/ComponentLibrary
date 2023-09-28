<template>
  <button @click="onClick" type="button" :class="{ active: state.active }">
    <FaceSmileIcon />
  </button>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { FaceSmileIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['click'])
const state = reactive<{ active: boolean }>({ active: false })

function onClick() {
  emit('click')
  state.active = !state.active
}
</script>

<style lang="stylus" scoped>
button
	@apply w-10 p-2 text-white bg-gray-700 rounded-full
.active
	@apply bg-blue-600
</style>
