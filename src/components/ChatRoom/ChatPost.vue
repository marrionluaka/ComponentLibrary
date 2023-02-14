<template lang="pug">
.notification-form
  button.notification-form__options(@click="$emit('option-menu')")
    SharedIcon.w-6(iconName="PlusCircleIcon" iconStyle="outline")

  form.notification-form__input-form(@submit.prevent="onSubmit")
    input.notification-form__message(v-model="message" type="text" placeholder="Type your message here...")

    button.notification-form__submit(type="submit")
      SharedIcon.w-6(iconName="ArrowRightIcon")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SharedIcon } from '../shared'

const emit = defineEmits(['submit', 'option-menu'])
const message = ref('')

function onSubmit() {
  if (message.value.trim() === '') return

  emit('submit', message.value)
  message.value = ''
}
</script>

<style lang="stylus" scoped>
.notification-form
  @apply flex gap-x-3 text-gray-300

  &__input-form
    @apply flex gap-x-3 w-full

  &__message
    @apply w-full border-0
    color #787878

  &__submit
    appearance none
    color #8aba7b
</style>
