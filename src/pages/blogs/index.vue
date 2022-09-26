<script setup lang="ts">
import { IData} from "~/interface";
import { createDate } from "~/utils/blogHelpers";
import { getBlogs } from "../../utils/requests";

const errorMessage = ref<string>("");
let blogsData = ref<IData[]>([]);
let {locale} = useI18n();


onMounted(async () => {
  const blogs = await getBlogs();
  if (blogs.isSuccessful && blogs.data !== undefined) {
    blogsData.value = blogs.data as IData[];
  } else {
    errorMessage.value = blogs.message;
  }
});
</script>

<template>
  <div class="bg-myNeutral-100">
    <div class="flex justify-between">
      <h1 class="text-neutral-800 text-3xl mx-10">Blog</h1>
      <navbar />
    </div>
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <ul>
      <li v-for="(blog, index) in blogsData" :key="index">
        <post
          :id="blog.id"
          :text="blog.attributes.text"
          :date="createDate(new Date(blog.attributes.publishedAt), locale)"
          :heading="blog.attributes.heading"
          :image="blog.attributes.image.data.attributes"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
