<template lang="pug">
.todo
  .todo__completed(v-if="percentage === 100")
    TodoCompeleted(:name="username" :numOfGoalsCompleted="items.length" :dateCompleted="fakeDate")

  .todo__form(v-else)
    p.todo__title To-do during today

    .todo__items
      TodoItem(v-for="item of items" :item="item" @change="$emit('change', $event)")

    .todo__progress
      ProgressBar.h-2.border-0.w-full(:value="percentage" containerClasses="bg-indigo-500" variant="with-transition")
      span.todo__tracker {{ numOfCompletedTodos }}/{{ items.length }}
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'

import TodoItem from './TodoItem.vue'
import fakeDate from '../../lib/getFakeDate'
import TodoCompeleted from './TodoCompeleted.vue'
import ProgressBar from '../ProgressBar/index.vue'

type TodoItem = {
  id: number | string
  name: string
  value: string
  isChecked: boolean
}

const props = defineProps({
  username: {
    type: String,
    required: true
  },
  items: {
    type: Array as PropType<TodoItem[]>,
    required: true
  }
})

defineEmits(['change'])

const numOfCompletedTodos = computed(() => {
  return props.items.filter(x => x.isChecked).length
})

const percentage = computed(() => {
  if (!props.items.length) return 0

  const value = numOfCompletedTodos.value
  const full = props.items.length

  return (value / full) * 100
})
</script>

<style lang="stylus" scoped>
.todo
  &__title
    color #3a4547

  &__items
    @apply my-4 space-y-3 text-sm
    color #616158

  &__progress
    @apply flex items-center gap-x-2 mt-10 max-w-sm

  &__tracker
    color #bbb9b0
</style>
