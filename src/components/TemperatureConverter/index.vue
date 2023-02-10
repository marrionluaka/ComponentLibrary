<template lang="pug">
.temperature
  .temperature__control
    TextInput(:value="celsiusInput" @input="convertToFahrenheit" data-testid="celsius")
    Label Celsius

  .temperature__equals =

  .temperature__control
    TextInput(:value="fahrenheitInput" @input="convertToCelsius" data-testid="fahrenheit")
    Label Fahrenheit
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import Label from './Label.vue'
import TextInput from './TextInput.vue'
import { getValue, toCelsius, toFahrenheit } from './temperature-module'

const celsiusInput = ref<string>('')
const fahrenheitInput = ref<string>('')

const convertToFahrenheit = convert(fahrenheitInput, toFahrenheit)
const convertToCelsius = convert(celsiusInput, toCelsius)

function convert(inputRef: Ref<string>, calc: (value: number) => number) {
  return function (e: InputEvent) {
    inputRef.value = getValue((e.target as HTMLInputElement).value, calc)
  }
}
</script>

<style lang="stylus" scoped>
.temperature
  --gray: #dadce0
  --spacing: 4px

  display: flex
  text-align: center
  font-family: sans-serif
  column-gap: var(--spacing)

  &__equals
    color: #aaa
    margin-top: var(--spacing)
</style>
