<template>
  <section>
    <!-- Instant Access Section -->
    <div class="bg-[#FFEADE] vector-before relative">
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
        class="container px-5 mx-auto md:py-24 grid md:grid-cols-2 grid-cols-1 lg:gap-28 md:gap-9 gap-8 justify-center"
      >
        <Card title="Traditional Vet Visit" url="/images/card1.png">
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
