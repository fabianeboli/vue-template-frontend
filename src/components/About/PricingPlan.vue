<script setup lang="ts">
const { heading, price, points } = defineProps({
  heading: String,
  price: String,
  points: Array,
});
</script>

<template>
  <router-link
    :to="`/visits/${heading?.replaceAll(' ', '').toLowerCase()}`"
    replace
  >
    <div
      class="flex  cursor-pointer flex-col justify-center items-center pt-10 bg-myTeal-500 shadow-xl hover:shadow-md duration-300 rounded-md"
    >
      <h2 class="text-neutral-100 text-3xl">{{ heading }}</h2>
      <h2
        class="text-center text-myBlue-300 bg-myTeal-100 rounded-md shadow-sm shadow-myTeal-100 mt-10 mb-5 text-2xl py-1 px-14"
      >
        {{ price }}
      </h2>
      <ul class="my-2">
        <li class="text-myNeutral-200 my-4 text-xl" v-for="point in points">
          {{ point }}
        </li>
      </ul>
      <button
        class="text-myTeal-100 bg-myBlue-100 mt-3 w-full md:px-32 py-2 shadow-md hover:shadow-none text-2xl rounded-b-md font-bold"
      >
        Order
      </button>
    </div>
  </router-link>
</template>

<style scoped>
ul {
  list-style: none;
}

ul li::before {
  content: "\2022";
  color: rgb(19, 222, 161);
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
</style>
