<template>
  <div class="container mx-auto">
    <div class="px-5 text-center lg:pt-48 pt-10">
      <p
        class="font-extrabold text-sky-950 font-sans lg:text-6xl md:text-4xl text-xl"
      >
        <span
          class="vector relative inline-block lg:text-6xl md:text-4xl text-xl"
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
      snapAlign="center"
      :mouseDrag="true"
      :breakpoints="breakpoints"
      class="pb-14"
    >
      <Slide v-for="slide in 10" :key="slide" class="slide">
        <SlideBox />
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import { Carousel, Slide } from "vue3-carousel";
import SlideBox from "./slide.vue";
import "vue3-carousel/dist/carousel.css";

const breakpoints = {
  375: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  700: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 3,
    snapAlign: "center",
  },
  1280: {
    itemsToShow: 4,
    snapAlign: "center",
  },
};
</script>

<style scoped>
.slide:nth-child(odd) {
  padding-top: 100px;
}

.vector::before {
  @apply absolute md:-bottom-16 -bottom-7 w-full bg-no-repeat bg-contain h-full;
  content: "";
  background-image: url(../assets/images/vector.png);
}
</style>
