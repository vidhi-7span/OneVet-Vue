<template>
  <h1 class="text-5xl">{{ msg }}</h1>
</template>

<script setup>
defineProps({
  msg: String,
});
</script>
