<template>
  <div class="popup">
    <header>
      <slot name="header"></slot>
    </header>

    <slot />

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style lang="stylus" scoped>
.popup
  @apply shadow-xl rounded-xl overflow-hidden relative mt-3

  header
    border-bottom 1px solid #F4F4F4

  footer
    @apply text-center bg-white w-full p-4
    border-top 1px solid #F4F4F4
</style>
