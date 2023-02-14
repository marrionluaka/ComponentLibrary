<template lang="pug">
button.shared-button(@click="$emit('click', $event)")
  slot
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>

<style lang="stylus" scoped>
.shared-button
  @apply appearance-none
</style>
