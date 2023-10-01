<template>
  <ul class="list">
    <slot />
  </ul>
</template>

<style lang="stylus" scoped>
.list
  @apply flex items-center text-2xl
  padding .35rem 0
  & > li + li
    @apply ml-1
</style>
