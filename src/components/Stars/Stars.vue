<template lang="pug">
ul.flex(data-test="stars")
  StarIcon.text-yellow-400.cursor-pointer(
    v-for="star in stars"
    :key="star"
    :fill="activeStar >= star ? color : 'transparent'"
    :data-test="`rating-${star}`"
    @click="onClick(star)"
    @mouseover="activeStar = star"
    @mouseleave="onMouseleave"
  ) {{ star }}

</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import StarIcon from './StarIcon.vue'

type StarProps = {
  color: string
  ratings: number
  defaultRating: number
}

const props = withDefaults(defineProps<StarProps>(), {
  color: '#fbbf24',
  ratings: 5,
  defaultRating: 0
})
const emit = defineEmits(['click'])

const activeStar: Ref<number> = ref(0)
const stars: Ref<number[]> = ref([...Array(props.ratings)].map((_, i) => i + 1))

let _currentRating: number = props.defaultRating

function onClick(star: number): void {
  emit('click', star)
  _currentRating = star
  activeStar.value = star
}

function onMouseleave(): number {
  return (activeStar.value = _currentRating || 0)
}
</script>
