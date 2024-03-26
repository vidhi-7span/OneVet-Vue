<template>
  <section>
    <!--  Membership Perks Section -->
    <div class="container px-5 text-center py-32 mx-auto">
      <p
        class="font-extrabold text-sky-950 font-sans lg:text-6xl md:text-4xl text-3xl"
      >
        OneVet Membership
        <span
          class="vector relative inline-block lg:text-6xl md:text-4xl text-3xl"
          >Perks</span
        >
      </p>
    </div>

    <div
      class="container px-5 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 md:gap-6 flex-wrap lg:gap-16 gap-6 mx-auto md:-my-10 -my-16"
    >
      <div
        v-for="(item, i) in Items"
        :key="i"
        class="flex items-start flex-col bg-sky-100 hover:bg-sky-950 hover:transition-all text-sky-950 hover:text-white lg:p-14 p-7 lg:rounded-b-[82px] lg:rounded-tr-[82px] rounded-b-3xl rounded-tr-3xl"
      >
        <img :src="`/images/perk${item.index}.png`" alt="Perks Image" />
        <P class="md:text-2xl font-serif font-bold mt-8">
          {{ item.title }}
        </P>
        <P class="font-serif mt-6">
          {{ item.desc }}
        </P>
      </div>
    </div>

    <div class="my-28 text-center">
      <Button varient="orange" text="Get Started" />
    </div>
  </section>
</template>

<script setup>
import Button from "./Button.vue";
const Items = [
  {
    index: 1,
    title: "Personalised Vet Care",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.",
  },
  {
    index: 2,
    title: "$3, 000 Emergency Fund",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.",
  },
  {
    index: 3,
    title: "Vaccination Tracker",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.",
  },
];
</script>

<style scoped>
.vector::before {
  @apply absolute md:-bottom-16 -bottom-11 w-full bg-no-repeat bg-contain h-full;
  content: "";
  background-image: url(../assets/images/vector.png);
}
</style>
