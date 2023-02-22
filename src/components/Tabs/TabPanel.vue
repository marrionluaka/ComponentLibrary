<template lang="pug">
div(v-if="activeTabID === id")
  slot
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
