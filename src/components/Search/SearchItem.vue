<template lang="pug">
a(class="block border-b border-gray-200 px-3 py-2" :href="src" data-test="search-link")
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true
    }
  }
})
</script>
