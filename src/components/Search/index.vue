<template lang="pug">
.search(class="sm:max-w-sm")
  .search-overlay(v-if="isSearchActive" data-test="search-overlay")
  .search-input.flex.items-center(class="focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm")
    .transform.scale-75.text-gray-500
        ArrowLeftIcon.search-input-icons(v-if="isSearchActive" data-test="search-arrow")
        SearchIcon.search-input-icons(v-else data-test="search-magnifying-glass")
    input.search-input-component(
      type="text"
      v-model="searchInput"
      data-test="search"
      placeholder="Search..."
      class="focus:ring-0"
      @focus="isSearchActive = true"
      @blur="isSearchActive = false"
      @keydown.enter.prevent="onKeydown"
    )
    button.search-btn.appearance-none(data-test="search-close" @click="clearSearch")
      CloseIcon.search-close(v-if="searchInput")

  .search-results(data-test="search-results" :class="{ loading: searchInput && !suggestedResults.length }")
    ul.space-y-2.py-2(v-if="searchInput" data-test="search-results-content")
      li
        SearchAction(@click="onSearch" data-test="submit")
          .flex.justify-between.items-center
            .flex.items-center
              .mr-2.my-1.p-2.border.rounded-full.border-gray-200
                BookIcon.text-gray-500
              p.text-sm Search "{{ searchInput }}" in items
            ChevronIconRight.transform.scale-75.text-gray-500
      slot
</template>

<script lang="ts">
import debounce from '../../lib/debounce'
import { defineComponent, PropType, ref, Ref } from 'vue'

import { BookIcon, SearchIcon, CloseIcon, ArrowLeftIcon, ChevronIconRight } from '../shared'
import SearchAction from './SearchAction.vue'

export default defineComponent({
  name: 'Search',

  components: { SearchAction, BookIcon, ChevronIconRight, SearchIcon, CloseIcon, ArrowLeftIcon },

  props: {
    suggestedResults: {
      type: Array as PropType<any>,
      default: () => []
    }
  },

  emits: ['on-search', 'keydown'],

  setup(_, { emit }) {
    const searchInput: Ref<any> = ref(null)
    const isSearchActive: Ref<boolean> = ref(false)

    const clearSearch = () => {
      searchInput.value = null
      isSearchActive.value = false
    }

    const onSearch = () => {
      emit('on-search', searchInput.value)
      clearSearch()
    }

    const onKeydown = debounce((e: any) => {
      console.log('got here')
      emit('keydown', e.target.value)
    }, 400)

    return { searchInput, isSearchActive, onSearch, onKeydown, clearSearch }
  }
})
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
