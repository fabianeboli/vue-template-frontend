<script setup lang="ts">
const activeMenu = ref<boolean>(true);
const { locale } = useI18n();
console.log("locale " + locale.value);
enum Language {
  english = "en",
  polish = "pl",
}

const switchLanguage = (chosenLanguage: Language) => {
  if (chosenLanguage === Language.english) {
    localStorage.setItem("locale", `${Language.english}`);
  }
  if (chosenLanguage === Language.polish) {
    localStorage.setItem("locale", `${Language.polish}`);
  }
  location.reload();
};
</script>

<template>
  <button
    class="hidden md:flex hover:bg-myTeal-300 active:bg-myTeal-300 hover:text-white px-12 duration-150 rounded-xl list-none py-1"
    @click="activeMenu = !activeMenu"
  >
    Language
  </button>
  <div
    :class="[
      activeMenu ? 'opacity-0' : 'opacity-100 ',
      'transition-opacity duration-500 relative',
    ]"
  >
    <ul class="absolute top-7 right-7 bg-neutral-100 rounded-md shadow-lg z-10">
      <li
        class="language"
        @click="
          switchLanguage(Language.english);
          activeMenu = !activeMenu;
        "
      >
        english
      </li>
      <li
        class="language"
        @click="
          switchLanguage(Language.polish);
          activeMenu = !activeMenu;
        "
      >
        polski
      </li>
    </ul>
  </div>
</template>

<style scoped>
.language {
  @apply px-10 py-2  w-full my-1  hover:bg-myTeal-300 active:bg-myTeal-200 active:text-neutral-600 hover:cursor-pointer;
}
</style>
