<template>
  <section>
    <!--  Advice Card -->
    <div
      class="container px-5 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 md:gap-6 flex-wrap lg:gap-16 gap-6 mx-auto md:-my-10 lg:mt-24 md:mt-16 mt-11 md:mb-16"
    >
      <div
        v-for="(item, i) in items"
        :key="i"
        class="px-5 bg-sky-100 hover:bg-sky-950 hover:transition-all text-sky-950 hover:text-white lg:p-9 p-5 lg:rounded-bl-3xl lg:rounded-t-3xl rounded-bl-3xl rounded-t-3xl md:even:mt-36 items-start"
      >
        <img
          :src="`/images/tap${item.index}.png`"
          alt=" Image"
          class="lg:-mt-16 md:-mt-10 -mt-10 lg:-ml-16 md:-ml-10 -ml-6 lg:h-20 md:h-12 h-11"
        />
        <p class="lg:text-2xl font-serif font-bold">
          {{ item.title }}
        </p>
        <p class="font-serif mt-1">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { items } = defineProps({
  items: {
    type: Array,
  },
});
</script>

<style scoped>
.vector::before {
  @apply absolute md:-bottom-16 -bottom-11 w-full bg-no-repeat bg-contain h-full;
  content: "";
  background-image: url(../assets/images/vector.png);
}
</style>
