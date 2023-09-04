<template>
  <input :value="value" @input="$emit('input', $event)" />
</template>

<script setup lang="ts">
defineProps({
  value: {
    type: String,
    required: true
  }
})

defineEmits(['input'])
</script>

<style lang="stylus" scoped>
input
  text-align: center
  height: 35px
  border: 1px solid var(--gray)
</style>

