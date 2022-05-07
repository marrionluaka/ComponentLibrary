<template lang="pug">
.max-w-md(data-test="accordion")
  div(@click="isActive = !isActive" data-test="accordion-title")
    slot(name="title" v-bind="{ isOpen: isActive }")
      p Accordion Title
  slot(v-bind="{ isOpen: isActive }")
    div(:class="{ active: isActive }") Accordion Panel
</template>

<script lang="ts">
import { defineComponent, PropType, ref, Ref } from 'vue'

export default defineComponent({
  name: 'Accordion',

  props: {
    isOpen: {
      type: Boolean as PropType<boolean>,
      default: true
    }
  },

  setup(props) {
    const isActive: Ref<boolean> = ref(props.isOpen)
    return { isActive }
  }
})
</script>
