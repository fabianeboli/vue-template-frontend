<script setup lang="ts">
import { useTestimonialStore } from '~/stores/testimonial';

const store = useTestimonialStore();

</script>

<template>
	<div class=" xl:mx-52 p-5 pb-20 bg-myNeutral-100">
		<h1 class="text-center font-bold text-4xl mt-5 text-neutral-700">Testimonials</h1>
		<ul class="flex items-center justify-center 2xl:mx-80 xl:mx-10">
			<button class=" mr-2 text-xl text-neutral-400" @click="store.setPreviousTestimonial">
				<carbon-chevron-left />
			</button>
			<Testimonial
				@click="store.setPreviousTestimonial()"
				:name="store.getPreviousTestimonial().name"
				:text="store.getPreviousTestimonial().text"
			/>
			<Testimonial
				:is-active="true"
				:name="store.getCurrentTestimonial().name"
				:text="store.getCurrentTestimonial().text"
			/>
			<Testimonial :name="store.getNextTestimonial().name" :text="store.getNextTestimonial().text" />
			<button class="ml-2 text-xl text-neutral-400" @click="store.setNextTestimonial">
				<carbon-chevron-right />
			</button>
		</ul>

		<ul class="flex justify-center">
			<li class="opacity-40 mx-2" v-for="(index) in store.testimonials.length">
				<p v-if="index === store.currentIndex + 1" class="text-orange-500">
					<carbon-dot-mark />
				</p>
				<p v-else class="text-neutral-500">
					<carbon-dot-mark />
				</p>
			</li>
		</ul>
	</div>
</template>

<style scoped>
</style>