<template>
  <div class="todo">
    <div class="todo__completed" v-if="percentage === 100">
      <TodoCompleted :name="username" :numOfGoalsCompleted="items.length" :dateCompleted="fakeDate" />
    </div>

    <div class="todo__form" v-else>
      <p class="todo__title">Task for the day</p>
      <div class="todo__items">
        <TodoItem v-for="item of items" :key="item.id" :item="item" @change="$emit('change', $event)" />
      </div>
      <div class="todo__progress">
        <ProgressBar class="h-2 border-0 w-full" :value="percentage" containerClasses="bg-indigo-500" variant="with-transition" />
        <span class="todo__tracker">{{ numOfCompletedTodos }}/{{ items.length }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'

import TodoItem from './TodoItem.vue'
import fakeDate from '../../lib/getFakeDate'
import TodoCompleted from './TodoCompleted.vue'
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
    @apply text-sm
    color #bbb9b0
</style>
