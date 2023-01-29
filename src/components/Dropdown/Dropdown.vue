<template lang="pug">
.dropdown(ref="dropdown" data-test="dropdown" :class="{ open: isOpen }")
  .dropdown__selected(data-test="dropdown-selected" @click="isOpen = !isOpen")
    slot(name="currentOption")
      | {{ defaultOption }}

  ul.dropdown__items
    li.pb-1(v-for="option in options" :key="option.value")
      button.appearance-none.bg-transparent.w-full.text-left(
        :data-test="`dropdown-item-${option.value}`"
        @click="closeDropdown(option)"
        @mouseover="activeItem = option.value"
      )
        slot(:option="getOption(option)")
          | {{ option.display }}
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, Ref, PropType } from 'vue'

export interface IOption {
  display: string
  value: string | number
}

const props = defineProps({
  currentOption: {
    type: String,
    default: 'Select an option'
  },
  options: {
    type: Array as PropType<IOption[]>,
    required: true
  }
})

const emit = defineEmits(['on-selected'])

const dropdown: Ref<any> = ref(null)
const isOpen: Ref<boolean> = ref(false)
const activeItem: Ref<string> = ref('')
const selectedItem: Ref<string | number> = ref('')
const defaultOption: Ref<string> = ref(props.currentOption)

onMounted(() => window.addEventListener('click', onClickOutside))
onUnmounted(() => window.removeEventListener('click', onClickOutside))

function closeDropdown({ value, display }: IOption) {
  isOpen.value = false
  selectedItem.value = value
  defaultOption.value = display
  emit('on-selected', value)
}

function getOption(option: IOption) {
  return {
    ...option,
    isActive: activeItem.value === option.value,
    isSelected: selectedItem.value === option.value
  }
}

function onClickOutside(e: Event) {
  if (!(dropdown.value == e.target || dropdown.value.contains(e.target))) isOpen.value = false
}
</script>

<style lang="stylus" scoped>
.dropdown
  @apply flex flex-col m-0 relative cursor-pointer
  max-width 400px
  &.open
    .dropdown__items
      @apply absolute overflow-y-scroll opacity-100 left-1/2
      max-height 240px
      left 0

  &__selected
    @apply py-3 bg-transparent capitalize

  &__items
    @apply absolute max-h-0 w-full opacity-0 transition-all overflow-hidden order-1 p-1
    top 50px
</style>
