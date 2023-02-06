<template lang="pug">
.tweet
  TweetThumbnail(
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
        @click="$emit('on-comment-clicked')"
      )
      TweetAction(
        icon="RetweetIcon"
        :count="tweet.actions.retweets"
        @click="$emit('on-retweet-clicked')"
      )
      TweetAction(
        icon="LikeIcon"
        :count="tweet.actions.likes"
        @click="$emit('on-like-clicked')"
      )
      TweetAction(icon="ShareIcon" @click="$emit('on-share-clicked')")
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'
import type { PropType } from 'vue'

import TweetAuthor from './TweetAuthor.vue'
import TweetAction from './TweetAction.vue'
import TweetContent from './TweetContent.vue'
import TweetThumbnail from './TweetThumbnail.vue'

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

withDefaults(defineProps<{ tweet: Tweet }>(), {
  tweet: {
    author: {
      name: 'John Doe',
      username: '@johndoe',
      date: DateTime.now(),
      thumbnail: {
        src: 'https://xsgames.co/randomusers/avatar.php?g=male',
        alt: 'User thumbnail'
      }
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum neque sed dui tincidunt, convallis dictum nibh convallis.',
    actions: {
      comments: 1094,
      retweets: 5,
      likes: 8402
    }
  }
})
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
