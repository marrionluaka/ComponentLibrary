<template lang="pug">
article.tweet
  SharedThumbnail(
    :src="tweet.author.thumbnail.src"
    :alt="tweet.author.thumbnail.alt"
  )

  div
    TweetAuthor(
      :name="tweet.author.name"
      :username="tweet.author.username"
      :dateTime="tweet.author.date"
    )
    TweetContent {{ tweet.content }}
    .tweet__actions
      TweetAction(
        icon="CommentIcon"
        :count="tweet.actions.comments"
        @click="$emit('comment')"
      )
      TweetAction(
        icon="RetweetIcon"
        :count="tweet.actions.retweets"
        @click="$emit('retweet')"
      )
      TweetAction(
        icon="LikeIcon"
        :count="tweet.actions.likes"
        @click="$emit('like')"
      )
      TweetAction(icon="ShareIcon" @click="$emit('share')")
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import tweetData from './data'
import TweetAuthor from './TweetAuthor.vue'
import TweetAction from './TweetAction.vue'
import TweetContent from './TweetContent.vue'
import { SharedThumbnail } from '../shared'

type Author = {
  name: string
  username: string
  date: Date
  thumbnail: {
    src: string
    alt: string
  }
}

type Actions = {
  comments: number
  retweets: number
  likes: number
}

type Tweet = {
  author: Author
  content: string
  actions: Actions
}

withDefaults(defineProps<{ tweet: Tweet }>(), { tweet: tweetData as any })

defineEmits(['comment', 'retweet', 'like', 'share'])
</script>

<style lang="stylus" scoped>
.tweet
  --spacing 12px

  max-width 750px
  background #fff
  border 1px solid #cfd9de
  border-radius 16px
  display flex
  font-size 15px
  padding var(--spacing)
  column-gap var(--spacing)

  &__actions
    color #536471
    font-size 13px
    display flex
    justify-content space-between
    margin-top var(--spacing)
    max-width 425px
</style>
