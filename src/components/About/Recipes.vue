<script setup lang="ts">
import { IData, IRecipe } from "~/interface";
import { chooseImageFormat } from "~/utils/blogHelpers";
import { getBlogs, pagination, sortQuery } from "~/utils/requests";


const blogsData = ref<IData[]>([]);
const errorMessage = ref<string>("");

onMounted(async () => {
  const blogs = await getBlogs(
    `${sortQuery(0, "publishedAt", "desc")}&${pagination(1, 3)}`
  );


  if (blogs.isSuccessful && blogs.data !== undefined) {
    blogsData.value = blogs.data as IData[];
    console.log(blogsData.value[0].attributes.image.data.attributes.formats.medium.url)
  } else {
    errorMessage.value = blogs.message;
  }
});
</script>

<template>
  <div class="bg-myNeutral-100 py-32">
    <h1 class="text-center text-4xl font-bold mb-20 text-neutral-700">
      Recipes
    </h1>
    <ul
      class="flex flex-col flex-wrap lg:flex-row justify-center items-center lg:items-end align-baseline"
    >
      <li v-for="blog in blogsData">
        <recipe
          :name="blog.attributes.heading"
          :image="chooseImageFormat(blog.attributes.image.data.attributes)"
          :description="blog.attributes.text"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
