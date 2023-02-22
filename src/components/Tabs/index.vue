<template lang="pug">
.tabs
  slot
</template>

<script setup lang="ts">
import { initTabsContext } from './tabs-context'
initTabsContext()
</script>
