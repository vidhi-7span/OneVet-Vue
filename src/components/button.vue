<template>
  <div>
    <button
      class="sm:px-10 sm:py-3 px-4 py-2 font-black rounded-full font-serif md:text-xl text-sm"
      :class="getVarientClasses"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "Title",
  },
  varient: {
    type: String,
    default: "default",
  },
});

const getVarientClasses = computed(() => {
  switch (props.varient) {
    case "default":
      return "default";
    case "blue":
      return "bg-sky-950 hover:bg-sky-900 text-white";
    case "orange":
      return "bg-orange-400 hover:bg-orange-500 text-white";
  }
});
</script>
