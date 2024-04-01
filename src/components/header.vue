<template>
  <header
    class="flex container justify-between mx-auto lg:py-8 items-center px-5"
  >
    <!-- Logo -->
    <div class="flex justify-center py-5">
      <img class="cursor-pointer" src="../assets/images/logo.png" alt="" />
    </div>

    <!-- Menu -->
    <div>
      <ul
        class="lg:gap-8 font-black cursor-pointer font-serif md:text-xl text-lg text-center items-center justify-center mx-auto hidden xl:flex"
      >
        <li
          class="hover:text-orange-400"
          v-for="(item, i) in navItems"
          :key="i"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>

    <!-- Actions -->
    <div class="flex sm:gap-5 gap-1 text-xs">
      <Button varient="blue" text="Sign in" />
      <Button varient="orange" text="Get Started" />
    </div>
  </header>
</template>

<script setup>
import Button from "./Button.vue";
const navItems = [
  { index: 1, name: "About Us" },
  { index: 2, name: "Emergency Fund" },
  { index: 3, name: "Contact Us" },
];
</script>
