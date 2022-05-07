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

<script lang="ts">
import { defineComponent, PropType, ref, Ref } from 'vue'
import StarIcon from './StarIcon.vue'

export default defineComponent({
  name: 'Stars',

  components: { StarIcon },

  props: {
    color: {
      type: String as PropType<string>,
      default: '#fbbf24'
    },
    ratings: {
      type: Number as PropType<number>,
      default: 5
    },
    defaultRating: {
      type: Number as PropType<number>,
      default: 0
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    const activeStar: Ref<number> = ref(0)
    const stars: Ref<number[]> = ref([...Array(props.ratings)].map((_, i) => i + 1))

    let _currentRating: number = props.defaultRating

    const onClick = (star: number): void => {
      emit('click', star)
      _currentRating = star
      activeStar.value = star
    }

    const onMouseleave = (): number => (activeStar.value = _currentRating || 0)

    return { stars, activeStar, onClick, onMouseleave }
  }
})
</script>
