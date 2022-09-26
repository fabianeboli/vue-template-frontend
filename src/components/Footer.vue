<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const { firstName, lastName, facebookLink, instagramLink, description, streetName, postalCode, city, phoneNumber, xcord, ycord, nameOfBusiness } = defineProps({
  firstName: String,
  lastName: String,
  facebookLink: String,
  instagramLink: String,
  description: String,
  streetName: String,
  postalCode: String,
  phoneNumber: String,
  xCord: String,
  yCord: String,
  nameOfBusiness: String
})

</script>

<template>
  <div class="bg-myBlue-200 text-neutral-100 ">
    <div class="mx-4 lg:mx-1 flex flex-col md:flex-row  items-center justify-evenly py-10">
      
      <div class="flex flex-col justify-center my-12 text-2xl ">
        <h1 class="underline underline-offset-8 font-bold text-5xl">{{ firstName }} {{ lastName }}</h1>
        <div class="flex mt-4 ">
          <a class="pr-5" :href="facebookLink">
            <carbon-logo-facebook />
          </a>
          <a :href="instagramLink">
            <carbon-logo-instagram />
          </a>
        </div>

        <div>
          <address>
            <div class="flex items-center pt-5">
              <carbon-home class="mr-3"/>
              <div class="text-neutral-400">
                <p>{{ streetName }}</p>
                <p>{{ postalCode }}, {{ city }}</p>
              </div>
            </div>
          </address>
        </div>

        <section class="mt-16 text-neutral-400">{{ description }}</section>
      </div>
      <!-- <Map class="my-10 rounded-md"/> -->
    </div>
  </div>
  <!-- <nav class="text-xl mt-6">
    <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      <carbon-campsite />
    </router-link>

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>

    <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <carbon-language />
    </a>

    <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <carbon-dicom-overlay />
    </router-link>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
      <carbon-logo-github />
    </a>
  </nav>-->
</template>
