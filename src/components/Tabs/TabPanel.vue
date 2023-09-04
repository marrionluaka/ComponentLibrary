<template>
  <div v-if="activeTabID === id">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useTabsContext } from './tabs-context'

defineProps({
  id: {
    type: [Number, String],
    required: true
  }
})

const { activeTabID } = useTabsContext('TabPanel')
</script>
