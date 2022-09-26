<script setup lang="ts">
import Navbar from '../Navbar/Navbar.vue'

const email = ref<string>('')

const handleSubmit = () => {

}
</script>

<template>
  <div class="bg-landing-page-gradient-background w-full h-screen bg-cover">
    <dropdown />

    <div class="">
      <navbar />
    </div>
    <div class="flex flex-col md:flex-row justify-start absolute">
      <div
        class="mx-5 mt-5 md:-m-0 md:absolute md:top-20 md:left-20 2xl:top-40 2xl:left-52 md:px-44 md:pb-20 text-center bg-myNeutral-400 shadow-inner-xl rounded-md"
      >
        <h1 class="text-5xl pt-12 text-myTeal-300 font-bold">Firstname Lastname</h1>
        <h3 class="text-3xl p-12  text-myTeal-400 font-bold">Dietician</h3>

        <p class="mx-5 md:mx-0 pb-12 text-myTeal-700">
          Sint enim eu fugiat veniam sint cillum id minim. Incididunt veniam in velit anim est. Commodo in culpa anim aliquip.
          Consequat ullamco nostrud consequat excepteur enim labore ea. Adipisicing fugiat dolore in quis do mollit. Elit mollit id magna nostrud amet ullamco ad nisi voluptate ea proident.
        </p>
      </div>

      <div class="m-10 md:m-0 md:absolute top-96 lg:top-102 
      xl:left-104 2xl:top-120 2xl:left-120 px-5 py-7 sm:px-14 sm:py-10 bg-myNeutral-300 shadow-md rounded-md">
        <h1 class="text-3xl text-center font-bold text-myOrange-200">Sign up the newsletter</h1>
        <p class="py-10 text-myOrange-500">receive blog posts and new recipes</p>
        <form class="flex flex-col justify-center">
          <input
            class="text-myOrange-400 my-6 rounded-md shadow-inner bg-myOrange-100 p-1"
            type="text"
            placeholder="email"
            name="email"
            @v-model="email"
          />
          <button
            class="px-5 py-2 mx-12 bg-myOrange-200 text-white font-bold rounded-full shadow-sm shadow-myOrange-200 hover:shadow-sm"
            type="submit"
            @click.prevent="handleSubmit"
          >Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
