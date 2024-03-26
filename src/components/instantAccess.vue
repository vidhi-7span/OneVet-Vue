<template>
  <section>
    <!-- Instant Access Section -->
    <div class="bg-[#FFEADE] vector-before relative z-20">
      <div class="container px-5 mx-auto text-center py-20">
        <p
          class="font-extrabold text-sky-950 font-sans lg:text-6xl md:text-4xl text-3xl"
        >
          Instant Access
        </p>
        <p
          class="vector relative inline-block font-extrabold lg:text-6xl md:text-4xl text-3xl text-orange-400 font-sans"
        >
          No Wait. No Hassle.
        </p>
      </div>

      <div
        class="container px-5 mx-auto md:pt-24 grid md:grid-cols-2 grid-cols-1 lg:gap-28 md:gap-9 gap-8 justify- relative z-10"
      >
        <Card
          title="Traditional Vet Visit"
          url="/images/card1.png "
          class="z-20"
        >
          <template #action>
            <div></div>
          </template>
        </Card>
        <Card
          title="With OneVet Mobile App"
          url="/images/card2.png"
          button="Get Started"
        />
      </div>
    </div>
    <div class="flex justify-center md:-mt-32 -mt-12 bg-[#FFEADE] md:flex">
      <img src="../assets/images/cat.png" alt="" class="z-20" />
    </div>
  </section>

  <section>
    <!-- After Image -->
    <div
      class="after-img absolute w-auto left-0 right-0 z-10 -mt-16 bg-no-repeat"
    >
      <img src="../assets/images/access-after.png" class="h-32 w-full" alt="" />
    </div>
  </section>
</template>

<script setup>
import Card from "./card.vue";
</script>

<style scoped>
.vector::before {
  @apply absolute lg:-bottom-8  md:-bottom-5 -bottom-4 w-full bg-no-repeat md:bg-cover bg-contain  pb-3;
  content: "";
  background-image: url(../assets/images/access-vector.png);
}

.vector-before::before {
  @apply absolute w-full h-2/4 bg-no-repeat bg-contain lg:-top-14 md:-top-2 -top-4;
  content: "";
  background-image: url(../assets/images/access-before.png);
}
</style>
