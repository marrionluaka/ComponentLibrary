<template>
  <span>{{ time }}</span>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'
import { computed, PropType } from 'vue'
import formatWithPattern from '../../lib/format-date-pattern'

const props = defineProps({
  dateTime: {
    type: String,
    required: true
  }
})

const time = computed(() => formatWithPattern(props.dateTime, 'LLL dd'))
</script>
