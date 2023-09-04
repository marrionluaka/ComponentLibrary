<template>
  <button
    class="appearance-none"
    v-if="as === 'button'"
    @click="setActiveTabID(id)"
    :disabled="!!disabled"
    :class="{ active: activeTabID === id }"
  >
    <slot />
  </button>

  <div v-else>
    <slot :active="activeTabID === id" :setActiveTabID="setActiveTabID" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useTabsContext } from './tabs-context'

const props = defineProps({
  id: {
    type: [Number, String],
    required: true
  },
  as: {
    type: String,
    required: false
  },
  selected: {
    type: [String, Boolean],
    default: false
  },
  disabled: {
    type: [String, Boolean],
    default: false
  }
})

const { setActiveTabID, activeTabID } = useTabsContext('Tab')

onMounted(() => {
  props.selected && setActiveTabID(props.id)
})
</script>
