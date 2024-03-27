<template>
  <footer class="md:mt-36">
    <div class="container px-5 mx-auto">
      <div class="flex justify-center my-14">
        <img src="../assets/images/dark-logo.png" alt="" />
      </div>
      <div
        class="grid md:grid-cols-4 sm:grid-cols-2 lg:flex justify-evenly mb-24"
      >
        <div class="mt-8">
          <p class="mb-7 text-xl font-semibold text-sky-950 font-serif">
            Follow Us
          </p>
          <div class="flex gap-3">
            <img src="../assets/images/facebook.png" alt="facebook" />
            <img src="../assets/images/twitter.png" alt="twitter" />
          </div>
        </div>
        <div class="mt-8">
          <p class="mb-7 text-xl font-semibold text-sky-950 font-serif">
            Web Links
          </p>
          <div class="grid grid-cols-2 gap-6 text-sky-950 font-serif">
            <a class="hover:text-orange-600" href="/">Home</a>
            <a class="hover:text-orange-600" href="/">Privacy Policy</a>
            <a class="hover:text-orange-600" href="/">About Us</a>
            <a class="hover:text-orange-600" href="/">Terms of Service</a>
            <a class="hover:text-orange-600" href="/">Emergency Funds</a>
            <a class="hover:text-orange-600" href="/">Disclimer</a>
            <a class="hover:text-orange-600" href="/">Contact Us</a>
          </div>
        </div>
        <div class="mt-8">
          <p class="mb-7 text-xl font-semibold text-sky-950 font-serif">
            Contact Details
          </p>
          <div class="flex flex-col gap-4 font-serif">
            <div
              class="flex justify-start items-center gap-3 text-sky-950 text-lg"
            >
              <img src="../assets/images/contact.png" alt="facebook" />
              <p>111-222-4356</p>
            </div>
            <div
              class="flex justify-start items-center gap-3 text-sky-950 text-lg"
            >
              <img src="../assets/images/mail.png" alt="facebook" />
              <p>info@onevet.com</p>
            </div>
            <div
              class="flex justify-start items-center gap-3 text-sky-950 text-lg"
            >
              <img src="../assets/images/map.png" alt="facebook" />
              <p>4547 University St,Tennessee, 37097.</p>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <p class="mb-7 text-xl font-semibold text-sky-950 font-serif">
            SubscribeNow
          </p>
          <div class="flex gap-3 flex-col">
            <input
              type="text"
              placeholder="Enter Email Address"
              class="py-3 pl-7 text-sky-950 border-2 rounded-full border-sky-950 placeholder-sky-950 placeholder:font-serif placeholder:font-black"
            />
            <Button text="Subscribe Now" varient="orange" class="w-full" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import Button from "./Button.vue";
</script>
