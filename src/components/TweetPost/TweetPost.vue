<template lang="pug">
div(class="max-w-xl" data-test="tweet")
  form(@submit.prevent="$emit('on-tweet', tweetBox)")
    .flex.justify-items-end.rounded-md.border.p-3.mb-2
      textarea.w-full.resize-none.outline-none.border-0.mr-2(class="focus:ring-0" rows="4" role="textbox" data-test="tweet-box" v-model="tweetBox")
      .flex.flex-col.justify-between
        Smiley.cursor-pointer
        span(data-test="tweet-limit") {{ tweetLimit }}
    button.py-2.px-4.bg-purple-500.text-white.font-semibold.rounded-full(
      type="submit"
      data-test="tweet-submit"
      class="focus:outline-none disabled:opacity-50"
      :class="[isDisabled ? 'hover:bg-purple-500' : 'hover:bg-purple-400', { 'cursor-not-allowed': isDisabled }]"
      :disabled="isDisabled"
    ) Tweet
</template>

<script lang="ts">
import { defineComponent, watch, ref, Ref, PropType, ComputedRef, computed } from 'vue'
import Smiley from './Smiley.vue'

export default defineComponent({
  name: 'Tweet',

  components: { Smiley },

  props: {
    charLimit: {
      type: Number as PropType<number>,
      default: 280
    }
  },

  emits: ['on-tweet'],

  setup(props) {
    const tweetBox: Ref<any> = ref(null)
    const tweetLimit: Ref<number> = ref(props.charLimit)
    const calcTweetLimit = (tweet: string) => props.charLimit - tweet.length

    watch(tweetBox, () => (tweetLimit.value = calcTweetLimit(tweetBox.value)))
    const isDisabled: ComputedRef<any> = computed(() => tweetLimit.value < 0 || !tweetBox.value)

    return { tweetBox, tweetLimit, isDisabled }
  }
})
</script>
