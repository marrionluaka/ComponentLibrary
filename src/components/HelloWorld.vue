<template lang="pug">
section
  h2 Books
  div(v-if="requestState.state === 'pending'")
    p Loading...
  div(v-else-if="requestState.state === 'error'")
    p Error
  div(v-else)
    ul
      li(v-for="book in books" :key="book.id")
        a(:href="book.link" target="_blank")
          p {{ book.title }}
          img(:src="book.imgSrc" :alt="book.title")
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import useFetch, { RequestSuccess } from '../useFetch'

type BookViewModel = {
  id: string
  title: string
  link: string
  imgSrc?: string
}

type Book = {
  id: string
  volumeInfo: {
    title: string
    infoLink: string
    imageLinks?: {
      smallThumbnail: string
      thumbnail: string
    }
  }
}

type BookInfo = {
  items: Book[]
}

const [requestState, setRequestState] = useFetch<BookInfo>()

onMounted(async () => {
  await setRequestState('https://www.googleapis.com/books/v1/volumes?q=haskell')
})

const books = computed<BookViewModel[]>(() => {
  return (requestState.value as RequestSuccess<BookInfo>).data?.items.map(
    (b: Book) =>
      ({
        id: b.id,
        title: b.volumeInfo.title,
        link: b.volumeInfo.infoLink,
        imgSrc: b.volumeInfo.imageLinks?.thumbnail
      } as BookViewModel)
  )
})
</script>
