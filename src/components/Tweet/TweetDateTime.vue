<template lang="pug">
span {{ time }}
</template>

<script setup lang="ts">
import { computed } from 'vue'
import formatWithPattern from '../../lib/format-date-pattern'

const props = defineProps({
  dateTime: {
    type: String,
    required: true
  }
})

const time = computed(() => formatWithPattern(props.dateTime, 'LLL dd'))
</script>
