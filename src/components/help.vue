<template>
  <section>
    <!-- Help Section -->
    <div class="bg-sky-950">
      <div
        class="container mx-auto px-5 text-center mt-40 pt-6 text-white font-extrabold md:text-6xl text-4xl pb-9 font-sans"
      >
        No Matter Your Pets Problem - <br />
        We're Here To
        <span class="vector relative inline-block"> Help!</span>
      </div>

      <div class="grid grid-cols-4 gap-16 container px-5 mx-auto py-24">
        <div
          v-for="(item, i) in Items"
          :key="i"
          class="flex items-center flex-col"
        >
          <img :src="`/images/help${item.index}.png`" alt="Help Image" />
          <P class="text-white text-2xl font-serif w-40 text-center">
            {{ item.title }}
          </P>
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
  @apply absolute -bottom-8 w-full bg-no-repeat bg-contain pb-3;
  content: "";
  background-image: url(../assets/images/vector.png);
}
</style>
