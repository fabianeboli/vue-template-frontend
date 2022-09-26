<script setup lang="ts">

const { name, text, isActive, isHidden } = defineProps({
	name: String,
	text: String,
	isActive: { type: Boolean, default: false },
	isHidden: { type: Boolean, default: false },
});

</script>

<template>
	<div
		v-if="isActive"
		class="flex flex-col justify-center items-center bg-myNeutral-200 py-10 my-10 mx-10 shadow-lg rounded-md"
	>
		<p class="text-center text-neutral-500 w-52 md:w-96 lg:w-full px-5 ">{{ text }}</p>
		<h3 class="font-bold text-myOrange-300 text-center mt-5 text-xl">{{ name }}</h3>
	</div>

	<div
		v-if="!isActive && !isHidden"
		class="hidden lg:flex flex-col justify-center 
		items-center flex-nowrap bg-neutral-100 p-2 px-8 
		rounded-lg shadow-md"
	>
		<carbon-user-avatar-filled color="#B8C4BD" height="85" width="85" />
		<h5 class="text-myOrange-300 font-bold mt-5">{{ name }}</h5>
	</div>
</template>

<style scoped>
</style>