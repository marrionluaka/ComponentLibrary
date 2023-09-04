<template>
  <div class="text-center">
    <div class="mb-6 text-3xl">👏</div>
    <p class="mb-3">Congratulations, {{ name }}!</p>
    <p>You have achieved great results in {{ date }}!</p>
    <p>
      {{ goals }} goals were successfully completed
      <span class="text-lg">💪</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import formatWithPattern from '../../lib/format-date-pattern'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  dateCompleted: {
    type: String,
    required: true
  },
  numOfGoalsCompleted: {
    type: Number,
    required: true
  }
})

const goals = computed(() => {
  return `${props.numOfGoalsCompleted}/${props.numOfGoalsCompleted}`
})

const date = computed(() => {
  return formatWithPattern(props.dateCompleted)
})
</script>

<style lang="stylus" scoped></style>
