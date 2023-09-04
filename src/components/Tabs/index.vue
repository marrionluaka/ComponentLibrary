<template>
  <div class="tabs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { initTabsContext } from './tabs-context'
initTabsContext()
</script>
