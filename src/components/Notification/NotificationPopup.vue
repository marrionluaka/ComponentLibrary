<template lang="pug">
.popup
  header
    slot(name="header")

  slot

  footer
    slot(name="footer")
</template>

<style lang="stylus" scoped>
.popup
  @apply shadow-xl rounded-xl overflow-hidden relative mt-3

  footer
    @apply text-center bg-white w-full p-4
</style>
