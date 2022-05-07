<template lang="pug">
.checkbox
  label(:for="id" class="cursor-pointer")
    input.checkbox-input(
      type="checkbox"
      :id="id"
      :name="name"
      :value="value"
      :checked="isChecked"
      class="focus:ring-indigo-500"
      @input="$emit('update:modelValue', $event.target.value)"
    )
    slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Checkbox',

  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  },

  emits: ['update:modelValue']
})
</script>

<style lang="stylus" scoped>
.checkbox
  @apply flex items-center
  &-input
    @apply w-4 mr-2 text-indigo-600 border-gray-300 rounded cursor-pointer
</style>
