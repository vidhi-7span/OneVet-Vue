<template>
  <section>
    <!-- Advice Section -->
    <div class="container px-5 lg:py-24 py-8 mx-auto">
      <div>
        <div class="flex justify-center">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="selectTab(tab.value)"
            :class="{ active: selectedTab === tab.value }"
            class="font-extrabold text-gray-300 font-sans lg:text-4xl md:text-xl text-lg relative cursor-pointer py-2 px-8"
          >
            {{ tab.title }}
          </button>
        </div>
        <div>
          <AdviceCard :items="getSelectedItems()" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import AdviceCard from "./adviceCard.vue";

const tabs = [
  {
    title: "Need General Pet Advice?",
    value: "general-pet-advice",
    items: [
      {
        index: 1,
        title: "1. Login to your OneVet App",
        desc: "Immediately chat with one of our licensed veterinary professionals about anything! No matter how serious or silly.",
      },
      {
        index: 2,
        title: "2. Chat from the comfort of your home",
        desc: "Our team is here to help until you feel completely comfortable with the guidance our vets have provided.",
      },
      {
        index: 3,
        title: "3. Get Back To Living",
        desc: "By avoiding the hassle of a vet trip, and getting the answers you need, you get back to what's important, being happy healthy with your pet.",
      },
    ],
  },
  {
    title: "Do You Have An Emergency?",
    value: "emergency",
    items: [
      {
        index: 1,
        title: "1. Lorem ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.",
      },
      {
        index: 2,
        title: "2. Lorem ipsum dolor sit amet, consectetur",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.",
      },
      {
        index: 3,
        title: "3. Lorem  consectetur adipiscing ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam.",
      },
    ],
  },
];

const selectedTab = ref(tabs[0].value);

const getSelectedItems = () => {
  return tabs.find((tab) => tab.value === selectedTab.value).items;
};

const selectTab = (val) => {
  selectedTab.value = val;
};
</script>

<style scoped>
button.active {
  @apply font-extrabold text-sky-950 font-sans lg:text-4xl md:text-xl text-lg;
  font-weight: bold;
}

button.active::before {
  @apply absolute -bottom-2 w-5/6 bg-no-repeat bg-contain pb-3 bg-center;
  content: "";
  background-image: url(../assets/images/vector.png);
}
</style>
