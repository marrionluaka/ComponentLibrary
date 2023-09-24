<template>
  <article
    class="carousel"
    :style="`--width: ${props.width}px; --height: ${props.height}px;`"
    data-testid="carousel"
    @mouseover="stopAutoplay"
    @mouseleave="startAutplay"
  >
    <ul ref="carouselItemsRef" class="carousel-items">
      <li
        v-for="({ src, alt, id }, index) in slides"
        :key="id"
        :data-testid="`carousel-image-${id}`"
        :class="['carousel-item', { selected: index === currentIndex }]"
      >
        <img :src="src" :alt="alt" />
      </li>
    </ul>

    <div class="carousel-buttons">
      <button class="carousel-btn carousel-btn--prev" @click="previous" data-testid="carousel-previous">previous</button>
      <button class="carousel-btn carousel-btn--next" @click="next" data-testid="carousel-next">next</button>
    </div>

    <ul class="carousel-pagination">
      <li v-for="(_, index) in slides.length" :key="index">
        <button :class="{ selected: index === currentIndex }" @click="selectPage(index)" data-testid="carousel-pagination" />
      </li>
    </ul>
  </article>
</template>

<script lang="ts" setup>
import { PropType, onMounted, onUnmounted, ref, watch } from 'vue'

type Slide = {
  src: string
  alt: string
  id: string | number
}

const props = defineProps({
  slides: {
    type: Array as PropType<Slide[]>,
    required: true
  },
  height: {
    type: Number,
    default: 600
  },
  width: {
    type: Number,
    default: 800
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  delay: {
    type: Number,
    default: 3000
  }
})

const emit = defineEmits(['next', 'previous', 'page-selected'])

const carouselItemsRef = ref<HTMLElement | null>(null)
const currentIndex = ref<number>(0)
let carouselInterval: NodeJS.Timer | null = null

watch(currentIndex, scrollThrough)

onMounted(startAutplay)

onUnmounted(() => {
  carouselInterval && clearInterval(carouselInterval)
})

function selectPage(index: number) {
  currentIndex.value = index
  emit('page-selected', index)
}

function next() {
  currentIndex.value = ++currentIndex.value % props.slides.length
  emit('next', currentIndex.value)
}

function previous() {
  if (currentIndex.value === 0) {
    currentIndex.value = props.slides.length - 1
  } else {
    currentIndex.value = currentIndex.value - 1
  }
  emit('previous', currentIndex.value)
}

function scrollThrough() {
  carouselItemsRef.value?.scrollTo({ left: currentIndex.value * props.width, behavior: 'smooth' })
}

function startAutplay() {
  if (!props.autoplay) return
  carouselInterval = setInterval(next, props.delay)
}

function stopAutoplay() {
  if (!props.autoplay) return
  carouselInterval && clearInterval(carouselInterval)
}
</script>

<style lang="stylus" scoped>
.carousel
  @apply relative
  height: var(--height)
  width: var(--width)

  &-items
    @apply flex overflow-hidden;
    height: var(--height)
    width: var(--width)

  &-item
    @apply grow shrink-0 basis-full
    height: var(--height)
    width: var(--width)

  &-buttons
    @apply bg-gray-700

  &-btn
    @apply absolute border p-2 rounded-full text-white
    top 50%
    transform: translateY(-50%)
    &--prev
      left: 30px;
    &--next
      right: 30px;

  &-pagination
    @apply flex absolute justify-between items-center text-white bottom-3
    left 50%
    transform translateX(-50%)
    & button
      @apply border p-1 rounded-full text-white
      &.selected
        @apply bg-white
    & > li + li
      @apply ml-4
</style>
