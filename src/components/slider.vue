<template>
  <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
    <Slide v-for="slide in 10" :key="slide" class="slide">
      <SlideBox />
    </Slide>
  </Carousel>
</template>

<script setup>
import { Carousel, Slide } from "vue3-carousel";
import SlideBox from "./slide.vue";
import "vue3-carousel/dist/carousel.css";
</script>

<style scoped>
.slide:nth-child(odd) {
  padding-top: 100px;
  margin: 0 40px;
}
</style>
