<script setup lang="ts">
const props = defineProps({
	image: String,
	heading: String,
});
</script>

<template>
	<div class="p-14 flex flex-col items-center bg-myNeutral-200 rounded-md shadow-md">
		<img class="w-30 h-30" :src="props.image"  />
		<h1 class="mt-2 text-myOrange-300 font-bold text-xl">{{ props.heading }}</h1>
	</div>
</template>

<style scoped>
</style>