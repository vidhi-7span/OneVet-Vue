<template>
  <section>
    <!-- FAQ Section -->
    <div class="vector-before vector-after bg-sky-100 relative z-20">
      <div
        class="flex container flex-wrap justify-center items-center mx-auto pt-6 px-5"
      >
        <!-- FAQ Content -->
        <div class="lg:w-2/5 w-full lg:order-none mt-28">
          <div class="hero-title flex">
            <p
              class="font-extrabold md:text-6xl text-4xl pb-9 text-sky-950 font-sans lg:w-96"
            >
              Frequently Asked
              <span class="vector relative inline-block">Questions</span>
            </p>
          </div>

          <p class="leading-loose text-lg font-serif text-sky-950 w-[397px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
            minim veniam.
          </p>

          <div class="lg:mt-8 md:mt-5 mt-7 mb-4 flex items-center gap-6">
            <Button varient="orange" text="Ask Questions" />
          </div>
        </div>
        <!-- FAQ  -->
        <div class="info lg:w-3/5 w-full lg:order-none z-20">
          <div id="accordion" class="accordion-container">
            <div
              v-for="(item, index) in items"
              :key="index"
              :class="['accordion', { 'is-open': isOpen === index }]"
              class="bg-white my-7 py-6 px-9 rounded-3xl cursor-pointer"
            >
              <div
                class="accordion-header flex gap-8"
                @click="toggleAccordion(index)"
              >
                <img
                  src="../assets/images/minus.svg"
                  alt=""
                  v-if="isOpen === index"
                />
                <img src="../assets/images/plus.svg" alt="" v-else />
                <span class="font-semibold text-lg">{{ item.title }}</span>
              </div>
              <div class="accordion-body ml-12 mt-2">
                <div class="accordion-content">
                  {{ item.text }}
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
