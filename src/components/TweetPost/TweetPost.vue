<template>
  <div class="max-w-xl" data-test="tweet">
    <form @submit.prevent="$emit('on-tweet', tweetBox)">
      <div class="flex justify-items-end rounded-md border p-3 mb-2">
        <textarea
          class="w-full resize-none outline-none border-0 mr-2 focus:ring-0"
          rows="4"
          role="textbox"
          data-test="tweet-box"
          v-model="tweetBox"
        />
        <div class="flex flex-col justify-between">
          <Smiley class="cursor-pointer" />
          <span data-test="tweet-limit">{{ tweetLimit }}</span>
        </div>
      </div>

      <button
        class="py-2 px-4 bg-purple-500 text-white font-semibold rounded-full focus:outline-none disabled:opacity-50"
        type="submit"
        data-test="tweet-submit"
        :class="[isDisabled ? 'hover:bg-purple-500' : 'hover:bg-purple-400', { 'cursor-not-allowed': isDisabled }]"
        :disabled="isDisabled"
      >
        Tweet
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, Ref, PropType, ComputedRef, computed } from 'vue'
import Smiley from './Smiley.vue'

const props = defineProps({
  charLimit: {
    type: Number as PropType<number>,
    default: 280
  }
})

defineEmits(['on-tweet'])

const tweetBox: Ref<any> = ref(null)
const tweetLimit: Ref<number> = ref(props.charLimit)
const calcTweetLimit = (tweet: string) => props.charLimit - tweet.length

watch(tweetBox, () => (tweetLimit.value = calcTweetLimit(tweetBox.value)))
const isDisabled: ComputedRef<any> = computed(() => tweetLimit.value < 0 || !tweetBox.value)
</script>
