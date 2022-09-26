<script setup lang="ts">
import { useDropdownStore } from "~/stores/dropdown";
import Dropdown from "./LanguageDropdown.vue";

const { t } = useI18n();

const menuItems = [
  { id: 1, path: "/", name: t("navbar.about"), isLink: false },
  { id: 2, path: "#pricing", name: t("navbar.pricing"), isLink: false },
  { id: 3, path: "#contact", name: t("navbar.contact"), isLink: false },
  { id: 4, path: "/blogs", name: t("navbar.blogs"), isLink: true },
];

const store = useDropdownStore();
</script>
<template>
  <nav
    class="z-30 fixed md:absolute right-10 md:right-52 flex justify-between items-center my-5 md:px-20 md:py-1 bg-neutral-100 rounded-full text-neutral-500 shadow-md"
  >
    <button
      class="flex md:hidden align-middle hover:bg-myTeal-300 active:bg-myTeal-300 hover:text-white active:text-white rounded-full p-4 md:p-1"
      @click="store.toggleDropdown()"
    >
      <carbon-menu />
    </button>

    <li
      v-for="{ id, path, name, isLink } in menuItems"
      :key="id"
      class="hidden md:flex hover:bg-myTeal-300 active:bg-myTeal-300 hover:text-white px-12 duration-150 rounded-xl list-none py-1"
    >
      <router-link v-if="isLink" :to="path">{{ name }}</router-link>
      <a v-else :href="'/#' + name.toLowerCase()">{{ name }}</a>
    </li>
    <Dropdown />
  </nav>
</template>

<style scoped></style>
