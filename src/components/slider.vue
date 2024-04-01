<template>
  <div class="container px-5 text-center md:pt-48 pt-20 mx-auto">
    <p
      class="font-extrabold text-sky-950 font-sans lg:text-6xl md:text-4xl text-3xl"
    >
      <span
        class="vector relative inline-block lg:text-6xl md:text-4xl text-3xl"
        >Love</span
      >
      from our Members
    </p>
  </div>
  <Carousel
    :itemsToShow="4"
    :wrapAround="true"
    :transition="500"
    :autoplay="2000"
    :mouseDrag="true"
    class="pb-14"
  >
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
}

.vector::before {
  @apply absolute md:-bottom-16 -bottom-11 w-full bg-no-repeat bg-contain h-full;
  content: "";
  background-image: url(../assets/images/vector.png);
}
</style>
