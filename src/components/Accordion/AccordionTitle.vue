<template lang="pug">
button.accordion-title(data-test="accordion-title" @click="$emit('click')")
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['click']
})
</script>

<style lang="stylus" scoped>
.accordion-title
  @apply w-full appearance-none bg-transparent
</style>
