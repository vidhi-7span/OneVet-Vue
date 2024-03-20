<template>
  <header class="flex container justify-between mx-auto my-9 items-center px-5">
    <!-- Logo -->
    <div class="flex justify-center py-5">
      <img class="text-center" src="../assets/logo.png" alt="" />
    </div>

    <!-- Menu -->
    <div>
      <ul
        class="gap-4 font-black cursor-pointer font-serif md:text-xl text-lg text-center items-center justify-center mx-auto hidden lg:flex"
      >
        <li class="hover:text-orange-400">About Us</li>
        <li class="hover:text-orange-400">Emergency Fund</li>
        <li class="hover:text-orange-400">Contact Us</li>
      </ul>
    </div>

    <!-- Actions -->
    <div class="flex sm:gap-5 gap-2">
      <ButtonOrange text="Sign in" />
      <ButtonBlue text="Get Started" />
    </div>
  </header>
</template>

<script setup>
import ButtonOrange from "./btn-orange.vue";
import ButtonBlue from "./btn-blue.vue";
</script>
