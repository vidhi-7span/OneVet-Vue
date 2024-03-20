<template>
  <div>
    <button
      class="bg-sky-950 hover:bg-sky-900 text-white sm:px-10 sm:py-3 px-6 py-3 font-black rounded-full font-serif sm:text-xl"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  text: String,
});
</script>
