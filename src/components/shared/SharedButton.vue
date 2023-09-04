<template>
  <button class="shared-button" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>

<style lang="stylus" scoped>
.shared-button
  @apply appearance-none
</style>
