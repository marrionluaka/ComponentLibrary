<template lang="pug">
div
  h1(class='text-3xl font-bold underline')
    | Hello world!
  a(href='https://vitejs.dev' target='_blank')
    img.logo(src='/vite.svg' alt='Vite logo')
  a(href='https://vuejs.org/' target='_blank')
    img.logo.vue(src='./assets/vue.svg' alt='Vue logo')
</template>

<style lang="stylus" scoped>
.logo
  height: 6em;
  padding: 1.5em;
  will-change: filter;
.logo:hover
  filter: drop-shadow(0 0 2em #646cffaa);

.logo.vue:hover
  filter: drop-shadow(0 0 2em #42b883aa);
</style>
