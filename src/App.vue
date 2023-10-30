<script setup>

import { ref } from 'vue'

const className = ref('mt-10')

const changeMargin = () => {
  className.value = 'mt-20'
}


</script>

<template>
  <!-- <div class="btn  btn-green " :class="className" @click="changeMargin">
    我來測試margin
  </div>

  <h1 class="header rotate-45 inline-block ">測試H1</h1>

  <div class="bg-brand-primary">bg-test</div> -->

  <div class="abc-red-100">123456789</div>
  <div class="abc-blue">123456789</div>

  <div class="btn-green">shortCut test</div>

  <div class="i-mdi-alarm text-orange-400 block w-10 h-10" />
  <div class="i-logos-vue w-15 h-15 " />

  <div class="hv:text-red">xltest</div>


  <div class="text-app-js-900">5555</div>
</template>

<style scoped>

</style>