<template>
  <section>
    <!-- FAQ Section -->
    <div class="vector-before vector-after bg-sky-100 relative z-20">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-2 lg:gap-32 pt-6 px-5 frequent">
          <!-- FAQ Content -->
          <div class="lg:order-none lg:mt-28">
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
              eiusmod tempor incididunt ut labore et dolore magna aliquat enim
              ad minim veniam.
            </p>

            <div class="lg:mt-8 md:mt-1 mt-7 mb-4 flex items-center gap-6">
              <Button varient="orange" text="Ask Questions" />
            </div>
          </div>

          <!-- FAQ  -->
          <div class="lg:order-none z-20">
            <div id="accordion" class="accordion-container">
              <div
                v-for="(item, index) in items"
                :key="index"
                :class="['accordion', { 'is-open': isOpen === index }]"
                class="bg-white md:my-7 my-5 md:py-6 py-4 md:px-9 px-5 rounded-3xl cursor-pointer"
              >
                <div
                  class="accordion-header flex md:gap-8 gap-4"
                  @click="toggleAccordion(index)"
                >
                  <img
                    src="../assets/images/minus.svg"
                    alt=""
                    v-if="isOpen === index"
                  />
                  <img src="../assets/images/plus.svg" alt="" v-else />
                  <span class="font-semibold md:text-lg text-sm">{{
                    item.title
                  }}</span>
                </div>
                <div class="accordion-body md:ml-12 ml-8 mt-2">
                  <div class="accordion-content md:text-lg text-sm">
                    {{ item.text }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "./Button.vue";
import { ref } from "vue";

const items = ref([
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.",
  },
]);

const isOpen = ref(null);

const toggleAccordion = (index) => {
  if (isOpen.value === index) {
    isOpen.value = null;
  } else {
    isOpen.value = index;
  }
};
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
.accordion:not(.is-open) .accordion-body {
  display: none;
}
</style>
