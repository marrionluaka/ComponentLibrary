<template lang="pug">
span {{ time }}
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { DateTime } from 'luxon'

const props = defineProps({
  dateTime: {
    type: String,
    required: true
  }
})

const time = computed(() => format(props.dateTime))

function format(dateTime: string) {
  return DateTime.fromISO(dateTime).toFormat('LLL dd')
}
</script>
