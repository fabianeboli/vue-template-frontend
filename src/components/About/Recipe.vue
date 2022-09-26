<script setup lang="ts">
const { image, name, description } = defineProps({
  image: String,
  name: String,
  description: String,
});
</script>

<template>
  <div class="flex flex-col items-center xl:-mx-14 2xl:mx-3 xl:px-10">
    <img class="rounded-52 shadow-md max-w-xs my-10" :src="image" />
    <h3 class="text-center text-2xl text-myOrange-200 font-bold py-6 mx-10">
      {{ name }}
    </h3>
    <p class="text-neutral-500 px-10 xl:mx-10 my-10 text-center w-96">
      {{ description }}
    </p>
    <button
      class="py-2 px-16 my-5 mx-10 bg-myOrange-200 duration-300 rounded-full hover:shadow-lg text-white font-bold shadow-xl-myOrange mb-40 lg:mb-0"
    >
      Read more
    </button>
  </div>
</template>

<style scoped></style>
