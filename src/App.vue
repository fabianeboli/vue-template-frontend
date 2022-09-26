<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
const {locale} = useI18n();
locale.value = localStorage.getItem("locale") ?? 'en';



useHead({
  title: 'Dietician',
  meta: [
    { name: 'description', content: 'Dietician page' },
  ],
})

</script>

<template>
  <router-view />
</template>
