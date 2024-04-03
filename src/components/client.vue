<template>
  <section>
    <!-- Client Section -->
    <div class="container mx-auto">
      <div class="mt-28 px-5">
        <p class="text-center font-bold text-sky-950">As Seen On</p>
      </div>
      <div class="px-5">
        <div class="flex justify-evenly items-center flex-wrap">
          <div v-for="(_, i) in 5" :key="i">
            <img :src="`/images/client${i + 1}.png`" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
