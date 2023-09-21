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
      <li v-for="index in slides.length" :key="index">
        <button @click="void 0" data-testid="carousel-pagination">dot</button>
      </li>
    </ul>

    <button @click="next" data-testid="carousel-next">next</button>
    <button @click="void 0" data-testid="carousel-previous">previous</button>
  </article>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue'

type Slide = {
  src: string
  alt: string
  id: string | number
}

defineProps({
  slides: {
    type: Array as PropType<Slide[]>,
    required: true
  }
})

const currentIndex = ref<number>(0)

function next() {
  currentIndex.value = currentIndex.value + 1
}
</script>
