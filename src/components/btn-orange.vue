<template>
  <div>
    <button
      class="bg-orange-400 hover:bg-orange-500 text-white sm:px-10 sm:py-3 px-6 py-3 font-black rounded-full font-serif sm:text-xl"
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
