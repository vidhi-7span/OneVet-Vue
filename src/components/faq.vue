<template>
  <section>
    <!-- FAQ Section -->
    <div class="vector-before vector-after bg-sky-100 relative z-20">
      <div
        class="flex container flex-wrap justify-center items-center mx-auto pt-6 px-5"
      >
        <!-- FAQ Content -->
        <div class="lg:w-2/5 w-full lg:order-none order-2 mt-28">
          <div class="hero-title flex">
            <p
              class="font-extrabold md:text-6xl text-4xl pb-9 text-sky-950 font-sans lg:w-96"
            >
              Frequently Asked
              <span class="vector relative inline-block">Questions</span>
            </p>
          </div>

          <p class="leading-loose text-lg font-serif text-sky-950">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
            minim veniam.
          </p>

          <div class="lg:mt-8 md:mt-5 mt-7 mb-4 flex items-center gap-6">
            <Button varient="orange" text="Ask Questions" />
          </div>
        </div>

        <!-- FAQ Image -->
        <div class="lg:w-3/5 w-full lg:order-none order-1">
          <img class="-mb-20" src="@/assets/images/faq.png" alt="" />
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
  @apply absolute -bottom-4 w-full bg-no-repeat bg-contain pb-3;
  content: "";
  background-image: url(../assets/images/access-vector.png);
}

.vector-before::before {
  @apply absolute w-full h-2/4 bg-no-repeat bg-contain lg:-top-12 md:-top-10 -top-3;
  content: "";
  background-image: url(../assets/images/faq-before.png);
}

.vector-after::after {
  @apply absolute w-full h-1/4 bg-no-repeat bg-contain md:-mt-4 -mt-2;
  content: "";
  background-image: url(../assets/images/hero-after.png);
}
</style>
