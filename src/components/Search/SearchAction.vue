<template lang="pug">
button.appearance-none.bg-white.text-left.w-full.shadow-sm.pl-3.pr-1(class="py-2.5" data-test="search-action" @click="$emit('click')")
  .h-11.flex.flex-col.justify-center
    slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['click']
})
</script>
