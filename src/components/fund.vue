<template>
  <section>
    <!-- Fund Section -->
    <div class="relative vector-before vector-after bg-sky-950">
      <div class="container mx-auto px-5 text-center text-white py-8">
        <div
          class="md:mt-1 mt-0 md:py-6 py-2 font-extrabold lg:text-6xl md:text-4xl text-2xl pb-9 font-sans"
        >
          Emergency
          <span class="vector relative inline-block"> Fund</span>
        </div>
        <div>
          <p class="md:pt-6 pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
            minim veniam.
          </p>

          <Button text="Learn More" varient="orange" class="mb-4" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "./Button.vue";
</script>

<style scoped>
.vector::before {
  @apply absolute lg:-bottom-4  md:-bottom-5 -bottom-4 w-full bg-no-repeat bg-contain pb-3;
  content: "";
  background-image: url(../assets/images/vector.png);
}
.vector-before::before {
  @apply absolute w-full h-2/4 bg-no-repeat bg-contain lg:-top-12 md:-top-10 -top-3;
  content: "";
  background-image: url(../assets/images/help-before.png);
}

.vector-after::after {
  @apply absolute w-full h-1/4 bg-no-repeat bg-contain md:-mt-3 -mt-2;
  content: "";
  background-image: url(../assets/images/fund-after.png);
}
</style>
