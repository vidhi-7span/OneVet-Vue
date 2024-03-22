<template>
  <section>
    <!-- Client Section -->
    <div class="container mx-auto mt-24 px-5">
      <p class="text-center font-bold text-sky-950">As Seen On</p>
    </div>
    <div class="container mx-auto px-5">
      <div class="flex justify-evenly items-center flex-wrap">
        <div v-for="(_, i) in 5" :key="i">
          <img :src="`/images/client${i + 1}.png`" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
