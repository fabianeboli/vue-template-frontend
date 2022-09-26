<script setup lang="ts">
import { IDescription } from '~/interface';
const {t} = useI18n();

const descriptions: IDescription[] = [
	{
		heading: t('about.descriptions[0].heading'),
		image: "/image/Vector.svg",
		text: t('about.descriptions[0].text')
	},
	{
		heading: t('about.descriptions[1].heading'),
		image: "/image/Vector2.svg",
		text: t('about.descriptions[1].text')
	},
	{
		heading: t('about.descriptions[2].heading'),
		image: "/image/Vector3.svg",
		text: t('about.descriptions[2].text')
	},
]
</script>

<template>
	<div class>
		<ul class="2xl:mx-64 py-32">
			<li v-for="({ heading, image, text }, index) in descriptions">
				<description :reverse="index % 2 == 0" :heading="heading" :image="image" :text="text" />
			</li>
		</ul>
	</div>
</template>

<style scoped>
</style>