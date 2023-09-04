<script setup lang="ts">
import { ref, Ref, PropType } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean as PropType<boolean>,
    default: true
  }
})

const isActive: Ref<boolean> = ref(props.isOpen)
</script>

<template>
  <div class="max-w-md" data-test="accordion">
    <div @click="isActive = !isActive" data-test="accordion-title">
      <slot name="title" v-bind="{ isOpen: isActive }">
        <p>Accordion Title</p>
      </slot>
    </div>
    <slot v-bind="{ isOpen: isActive }">
      <div :class="{ active: isActive }">Accordion Panel</div>
    </slot>
  </div>
</template>
