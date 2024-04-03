<template>
  <div class="bg-white lg:py-9 md:py-7 py-5 lg:px-20 md:px-10 px-5 rounded-3xl">
    <p class="lg:text-3xl text-xl font-bold text-sky-950 text-center">
      {{ title }}
    </p>
    <div class="flex justify-center mt-16">
      <img :src="url" />
    </div>
    <div class="flex justify-center mt-6">
      <slot name="action">
        <button
          class="bg-sky-950 hover:bg-sky-900 text-white sm:px-10 sm:py-3 px-4 py-2 font-black rounded-full font-serif md:text-xl text-sm"
        >
          {{ button }}
        </button>
      </slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Card Title",
  },
  url: {
    type: String,
    default: "Card Image",
  },
  button: {
    type: String,
  },
});
</script>
