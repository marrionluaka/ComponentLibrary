<script setup lang="ts">
import { ref } from 'vue'
import { SharedIcon } from '../shared'

const emit = defineEmits(['submit', 'option-menu'])
const message = ref('')
const PostRef = ref<HTMLInputElement | null>(null)

function onSubmit(e: Event) {
  if (message.value.trim() === '') return

  emit('submit', message.value)
  PostRef.value?.focus()
  message.value = ''
}
</script>

<template>
  <div class="notification-form">
    <button class="notification-form__options" @click="$emit('option-menu')">
      <SharedIcon class="w-6" iconName="PlusCircleIcon" iconStyle="outline"></SharedIcon>
    </button>
    <form class="notification-form__input-form" @submit.prevent="onSubmit">
      <input
        class="notification-form__message"
        name="post"
        type="text"
        ref="PostRef"
        v-model="message"
        placeholder="Type your message here..."
      />
      <button class="notification-form__submit" type="submit">
        <SharedIcon class="w-6" iconName="ArrowRightIcon"></SharedIcon>
      </button>
    </form>
  </div>
</template>

<style lang="stylus" scoped>
.notification-form
  @apply flex gap-x-3 text-gray-300

  &__input-form
    @apply flex gap-x-3 w-full

  &__message
    @apply w-full border-0
    color #787878

    &::placeholder
      @apply text-gray-300

  &__submit
    appearance none
    color #8aba7b
</style>
