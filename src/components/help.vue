<template>
  <section>
    <!-- Help Section -->
    <div class="relative vector-before bg-sky-950">
      <div class="container mx-auto">
        <div
          class="px-5 text-center mt-8 py-24 text-white font-extrabold lg:text-6xl md:text-4xl text-2xl pb-9 font-sans"
        >
          No Matter Your Pets Problem - <br />
          We're Here To
          <span class="vector relative inline-block"> Help!</span>
        </div>

        <div
          class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-16 md:gap-12 gap-10 flex-wrap px-5 mx-auto lg:pb-32 md:pb-14 pb-7 lg:pt-24 md:pt-10"
        >
          <div
            v-for="(item, i) in Items"
            :key="i"
            class="flex items-center flex-col"
          >
            <img :src="`/images/help${item.index}.png`" alt="Help Image" />
            <P
              class="text-white md:text-2xl font-serif md:w-40 w-32 text-center mt-6"
            >
              {{ item.title }}
            </P>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const Items = [
  { index: 1, title: "Behavioral Issues" },
  { index: 2, title: "Nutrition" },
  { index: 3, title: "Gut Health" },
  { index: 4, title: "Oral Care" },
  { index: 5, title: "Respiratory Issues" },
  { index: 6, title: "Mobility" },
  { index: 7, title: "Injuries" },
  { index: 8, title: "Anything That Keeps You Up" },
];
</script>

<style scoped>
.vector::before {
  @apply absolute lg:-bottom-8  md:-bottom-5 -bottom-4 w-full bg-no-repeat bg-contain pb-3;
  content: "";
  background-image: url(../assets/images/vector.png);
}

.vector-before::before {
  @apply absolute w-full h-2/4 bg-no-repeat bg-contain lg:-top-12 md:-top-10 -top-3;
  content: "";
  background-image: url(../assets/images/help-before.png);
}
</style>
