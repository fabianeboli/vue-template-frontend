<script setup lang="ts">

const { reverse, heading, image, text } = defineProps({
	heading: String,
	image: String,
	text: String,
	reverse: { type: Boolean, default: false }
});


</script>

<template>
	<section 
	:class="[reverse && 'lg:flex-row-reverse', 
	'my-20 mx-1 xl:mx-24 xl:py-24 flex flex-col lg:flex-row items-center justify-between']">
		<div class="flex flex-col">
			<h2
				:class="[
				reverse && 'md:self-end lg:text-right',
				'my-14 md:my-1 mx-1 md:mx-0 text-neutral-100 font-bold text-2xl ']"
			>{{ heading }}</h2>
			<p
				:class="[
				reverse && 'md:self-end lg:text-right',
				'mx-1 md:mx-0 my-5 md:my-0 text-neutral-200 xl:pt-14 xl:w-60% text-lg']"
			>{{ text }}</p>
		</div>
		<img :src="image" class="my-20 lg:my-0 lg:mx-10" />
	</section>
</template>

<style scoped>
span {
	@apply bg-myTeal-100;
}
</style>