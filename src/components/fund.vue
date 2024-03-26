<template>
  <section>
    <!-- Fund Section -->
    <div class="bg-sky-950">
      <div
        class="relative vector-before container mx-auto px-5 text-center text-white py-8"
      >
        <div
          class="mt-8 py-10 font-extrabold lg:text-6xl md:text-4xl text-2xl pb-9 font-sans"
        >
          Emergency
          <span class="vector relative inline-block"> Fund</span>
        </div>
        <div>
          <p class="pt-6 pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
            minim veniam.
          </p>

          <Button text="Learn More" varient="orange" />
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
  @apply absolute lg:-bottom-8  md:-bottom-5 -bottom-4 w-full bg-no-repeat bg-contain pb-3;
  content: "";
  background-image: url(../assets/images/vector.png);
}
</style>
