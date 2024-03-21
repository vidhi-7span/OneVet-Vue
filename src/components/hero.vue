<template>
  <div class="bg-sky-100 relative z-20">
    <!-- Hero Wrapper -->
    <div
      class="flex container flex-wrap justify-center items-center mx-auto pt-6 px-5"
    >
      <!-- Hero Content -->
      <div class="lg:w-2/5 w-full lg:order-none order-2 mt-28">
        <!-- Title -->
        <div class="flex">
          <p
            class="font-extrabold md:text-6xl text-4xl pb-9 text-sky-950 font-sans lg:w-96"
          >
            Connect with Your Vet
            <span class="vector relative inline-block">Anytime</span>
          </p>
        </div>

        <!-- Description -->
        <p class="leading-loose text-lg font-serif text-sky-950">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
          minim veniam.
        </p>

        <!-- List -->
        <ul
          class="lg:mt-9 md:mt-5 mt-6 flex flex-col gap-4 font-serif font-semibold list-disc list-inside text-sky-950"
        >
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
        </ul>

        <!-- Button -->
        <div class="lg:mt-14 md:mt-5 mt-7 flex items-center gap-6">
          <Button varient="orange" text="Join OneVet" />
          <img
            src="../assets/images/hero-button.png"
            class="h-24 w-28"
            alt=""
          />
        </div>
      </div>

      <!-- Hero Image -->
      <div class="hero-image lg:w-3/5 w-full lg:order-none order-1">
        <img class="-mb-20" src="../assets/images/hero.png" alt="" />
      </div>
    </div>
  </div>

  <!-- After Image -->
  <div
    class="after-img absolute w-auto left-0 right-0 z-10 -mt-16 bg-no-repeat"
  >
    <img src="../assets/images/hero-after.png" class="h-32" alt="" />
  </div>
</template>

<script setup>
import Button from "./button.vue";
</script>

<style scoped>
.vector::before {
  @apply absolute -bottom-2 w-full bg-no-repeat bg-cover pb-3;
  content: "";
  background-image: url(../assets/images/vector.png);
}
</style>
