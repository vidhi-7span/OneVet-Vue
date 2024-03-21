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
        <li class="hover:text-orange-400">About Us</li>
        <li class="hover:text-orange-400">Emergency Fund</li>
        <li class="hover:text-orange-400">Contact Us</li>
      </ul>
    </div>

    <!-- Actions -->
    <div class="flex sm:gap-5 gap-2">
      <Button varient="blue" text="Sign in" />
      <Button varient="orange" text="Get Started" />
    </div>
  </header>
</template>

<script setup>
import Button from "./button.vue";
</script>
