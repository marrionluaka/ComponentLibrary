<template>
  <div class="checkbox">
    <label class="cursor-pointer" :for="id">
      <input
        class="checkbox-input focus:ring-indigo-500"
        type="checkbox"
        :id="id"
        :name="name"
        :value="value"
        :checked="isChecked"
        @change.stop="$emit('update:modelValue', $event?.target?.value)"
      />
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps({
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
})

defineEmits(['update:modelValue'])
</script>

<style lang="stylus" scoped>
.checkbox
  @apply flex items-center
  &-input
    @apply w-4 mr-2 text-indigo-600 border-gray-300 rounded cursor-pointer
</style>
