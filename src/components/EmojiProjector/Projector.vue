<template>
  <article>
    <p class="text-4xl">{{ emoji }}</p>
  </article>
</template>

<script lang="ts" setup>
defineProps({
  emoji: {
    type: String,
    required: true
  }
})
</script>
