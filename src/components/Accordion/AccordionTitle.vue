<template>
  <button class="accordion-title" data-test="accordion-title" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>

<style lang="stylus" scoped>
.accordion-title
  @apply w-full appearance-none bg-transparent
</style>
