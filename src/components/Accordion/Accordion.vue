<template lang="pug">
.max-w-md(data-test="accordion")
  div(@click="isActive = !isActive" data-test="accordion-title")
    slot(name="title" v-bind="{ isOpen: isActive }")
      p Accordion Title
  slot(v-bind="{ isOpen: isActive }")
    div(:class="{ active: isActive }") Accordion Panel
</template>

<script setup lang="ts">
import { ref, Ref, PropType } from "vue"

const props = defineProps({
  isOpen: {
    type: Boolean as PropType<boolean>,
    default: true
  }
})

const isActive: Ref<boolean> = ref(props.isOpen)
</script>
