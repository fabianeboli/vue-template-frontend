<script setup lang="ts">
import { ICard } from '~/interface';
const {t} = useI18n();
const features: ICard[] = [{ image: 'image/icon-park-outline_abdominal.svg', heading: t('about.cards.lose-weight') }, { image: 'image/icon-park-outline_muscle.svg', heading: t('about.cards.gain-muscle') }, { image: 'image/icon-park-outline_healthy-recognition.svg', heading: t('about.cards.various-illnesses') }]
</script>

<template>
	<div>
		<ul class="pt-60 sm:pt-0 flex flex-col md:flex-row justify-around items-center">
			<li class="p-10" v-for="{ heading, image } in features">
				<card :heading="heading" :image="image" />
			</li>
		</ul>
	</div>
</template>

<style scoped>
</style>