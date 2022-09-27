<script setup lang="ts">
import { PropType } from "vue";
import { chooseImageFormat } from "~/utils/blogHelpers";
import { IImage } from "../../interface";

const { id, text, image, date, heading } = defineProps({
  id: String,
  text: String,
  image: Object as PropType<IImage>,
  date: String,
  heading: String,
});
let imageFormat = ref<string | undefined>();
let {t} = useI18n();


onMounted(() => (imageFormat.value = chooseImageFormat(image)));
</script>

<template>
  <div class="flex items-center mx-10 xl:mx-104">
    <img class="w-96 mx-5 rounded-52 shadow-md" :src="imageFormat" />
    <div class="flex flex-col my-24">
      <div class="mx-12 my-5 flex justify-between">
        <p class="text-xl text-myOrange-200 font-bold">{{ heading }}</p>
        <p class="text-xl text-myOrange-200 font-bold">{{ date }}</p>
      </div>
      <p class="text-md my-2 text-neutral-500 mx-10">{{ text }}</p>

      <div class="flex flex-col items-center">
        <router-link :to="`/blogs/${id}`" replace>
          <button
            class="rounded-full mt-20 bg-myOrange-200 text-white text-xl pss=bg-myTeal-3000rounded-full shadow-xl-myOrange hover:shadow-md duration-250 mx-5 px-10 py-1 my-7"
          >
            {{t('ReadMore')}}
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
