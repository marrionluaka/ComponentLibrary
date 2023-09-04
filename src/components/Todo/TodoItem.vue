<template>
  <div class="flex items-center" :data-testid="`todo-item-${item.id}`">
    <Checkbox
      :data-testid="`todo-item-${item.id}-checkbox`"
      :class="{ 'line-through': item.isChecked }"
      :id="item.id"
      :name="item.name"
      :value="item.value"
      @update:modelValue="$emit('change', $event)"
    >
      {{ item.name }}
    </Checkbox>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import Checkbox from '../Checkbox/index.vue'

defineProps({
  item: {
    type: Object as PropType<{ id: number | string; name: string; value: string; isChecked?: boolean }>,
    required: true
  }
})

defineEmits(['change'])
</script>
