<script setup lang="ts">
import { IData } from "~/interface";
import { chooseImageFormat, createDate } from "~/utils/blogHelpers";
import { getBlog } from "~/utils/requests";
const route = useRoute();
let blogData = ref<IData>();
let errorMessage = ref<string>("");
let {locale} = useI18n();

const getData = async () => {
  const blog = await getBlog(route.params.blogId.toString());
  if (blog.isSuccessful && blog.data !== undefined) {
    blogData.value = blog.data as IData;
  } else {
    errorMessage.value = blog.message;
  }
};

// const formatImage = () => {};
onMounted(() => {
  getData();
});
// console.log(blogData.value.attributes.image);
</script>

<template>
  <div class="">
    <navbar />

    <div
      v-if="blogData !== undefined"
      class="flex justify-center items-center mx-10 xl:mx-104"
    >
      <div class="flex flex-col my-24">
        <img
          class="w-11/12 mx-5 mt-14 rounded-52 shadow-md"
          :src="chooseImageFormat(blogData.attributes.image.data.attributes)"
        />
        <div class="text-2xl mx-20 my-4 flex justify-around">
          <p class="text-lg text-myOrange-200 font-bold">
            {{ blogData.attributes.heading }}
          </p>
          <p class="text-lg text-myOrange-200 font-bold">
            {{ createDate(new Date(blogData.attributes.publishedAt), locale) }}
          </p>
        </div>

        <div class="flex mx-20 my-10">
          <p class="text-neutral-700 text-md">
            {{ blogData.attributes.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
