<template>
  <article>
    <ul>
      <li
        v-for="({ src, alt, id }, index) in slides"
        :key="id"
        :data-testid="`carousel-image-${id}`"
        :class="{ selected: index === currentIndex }"
      >
        <img :src="src" :alt="alt" />
      </li>
    </ul>

    <ul>
      <li v-for="(_, index) in slides.length" :key="index">
        <button @click="selectPage(index)" data-testid="carousel-pagination">dot</button>
      </li>
    </ul>

    <button @click="next" data-testid="carousel-next">next</button>
    <button @click="previous" data-testid="carousel-previous">previous</button>
  </article>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue'

type Slide = {
  src: string
  alt: string
  id: string | number
}

const props = defineProps({
  slides: {
    type: Array as PropType<Slide[]>,
    required: true
  }
})

const emit = defineEmits(['next', 'previous', 'page-selected'])

const currentIndex = ref<number>(0)

function selectPage(index: number) {
  currentIndex.value = index
  emit('page-selected', index)
}

function next() {
  currentIndex.value = ++currentIndex.value % props.slides.length
  emit('next')
}

function previous() {
  if (currentIndex.value === 0) {
    currentIndex.value = props.slides.length - 1
  } else {
    currentIndex.value = currentIndex.value - 1
  }
  emit('previous')
}
</script>
