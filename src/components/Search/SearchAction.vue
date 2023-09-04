<template>
  <button class="appearance-none bg-white text-left w-full shadow-sm pl-3 pr-1 py-2.5" data-test="search-action" @click="$emit('click')">
    <div class="h-11 flex flex-col justify-center">
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['click']
})
</script>
