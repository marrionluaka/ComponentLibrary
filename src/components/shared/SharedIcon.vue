<template>
  <component :is="icon" />
</template>

<script setup lang="ts">
import * as IconSolid from '@heroicons/vue/24/solid'
import * as IconOutline from '@heroicons/vue/24/outline'

const props = defineProps({
  iconName: {
    type: String,
    required: true
  },
  iconStyle: {
    type: String,
    default: 'solid'
  }
})

const { ...outlineIcons } = IconOutline
const { ...solidIcons } = IconSolid
const icon = props.iconStyle === 'solid' ? solidIcons[props.iconName] : outlineIcons[props.iconName]
</script>
