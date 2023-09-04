<template>
  <div class="search sm:max-w-sm">
    <div class="search-overlay" v-if="isSearchActive" data-test="search-overlay" />
    <div class="search-input flex items-center focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      <div class="transform scale-75 text-gray-500">
        <ArrowLeftIcon class="search-input-icons" v-if="isSearchActive" data-test="search-arrow" />
        <SearchIcon class="search-input-icons" v-else data-test="search-magnifying-glass" />
      </div>
      <input
        class="search-input-component focus:ring-0"
        type="text"
        v-model="searchInput"
        data-test="search"
        placeholder="Search..."
        @focus="isSearchActive = true"
        @blur="isSearchActive = false"
        @keydown="onKeydown"
      />
      <button class="search-btn appearance-none" data-test="search-close" @click="clearSearch">
        <CloseIcon class="search-close" v-if="searchInput" />
      </button>
    </div>
    <div class="search-results" data-test="search-results" :class="{ loading: searchInput && !suggestedResults.length }">
      <ul class="space-y-2 py-2" v-if="searchInput" data-test="search-results-content">
        <li>
          <SearchAction @click="onSearch" data-test="submit">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <div class="mr-2 my-1 p-2 border rounded-full border-gray-200">
                  <BookIcon class="text-gray-500"></BookIcon>
                </div>
                <p class="text-sm">Search "{{ searchInput }}" in items</p>
              </div>
              <ChevronIconRight class="transform scale-75 text-gray-500" />
            </div>
          </SearchAction>
        </li>
        <slot />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import debounce from '../../lib/debounce'
import { PropType, ref, Ref } from 'vue'

import SearchAction from './SearchAction.vue'
import { BookIcon, SearchIcon, CloseIcon, ArrowLeftIcon, ChevronIconRight } from '../shared'

defineProps({
  suggestedResults: {
    type: Array as PropType<any>,
    default: () => []
  }
})

const emit = defineEmits(['on-search', 'keydown'])

const searchInput: Ref<any> = ref(null)
const isSearchActive: Ref<boolean> = ref(false)

function clearSearch() {
  searchInput.value = null
  isSearchActive.value = false
}

function onSearch() {
  emit('on-search', searchInput.value)
  clearSearch()
}

const onKeydown = debounce((e: any) => {
  if (e.keyCode === 13) return
  emit('keydown', e.target.value)
}, 400)
</script>

<style lang="stylus" scoped>
.search
  @apply w-full flex flex-col relative z-50
  &-overlay
    @apply w-screen h-screen fixed inset-0 bg-white bg-opacity-50 inset-0
  &-input
    @apply shadow w-full border-gray-300 px-4 rounded-md h-11 z-20
    &-icons
      @apply transform scale-90
    &-component
      @apply border-0 bg-transparent p-0 pl-2 w-full text-sm
  &-close
    @apply transform scale-75
  &-btn
    @apply bg-gray-500 text-white rounded-full ml-2 transform scale-75
  &-results
    @apply bg-gray-100 shadow rounded-b-md absolute inset-x-0 top-full z-20
</style>
