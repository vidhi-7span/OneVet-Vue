<template>
  <section>
    <!-- Advice Section -->
    <div class="container px-5 text-center py-28 mx-auto">
      <p class="font-extrabold md:text-6xl text-4xl text-sky-950 font-sans">
        Need
        <span class="vector relative inline-block">General Pet</span> Advice?
      </p>
    </div>
  </section>
</template>

<style scoped>
.vector::before {
  @apply absolute -bottom-16 w-full bg-no-repeat bg-contain h-full;
  content: "";
  background-image: url(../assets/images/vector.png);
}
</style>
