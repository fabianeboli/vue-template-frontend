<script setup lang="ts">import { IPlans } from '~/interface';
const {t} = useI18n();

const plans: IPlans[] = [
	{
	heading: t('about.plans.firstVisit.name'),
	price: "200zł",
	points: [t('about.plans.firstVisit.points[0]'), t('about.plans.firstVisit.points[1]'), t('about.plans.firstVisit.points[2]')]
	},
	{
	heading: t('about.plans.nextVisit.name'),
	price: "150zł",
	points: [t('about.plans.nextVisit.points[0]'), t('about.plans.nextVisit.points[1]'), t('about.plans.nextVisit.points[2]')]
	}
];
</script>

<template>
	<div id="pricing" class="bg-pricingPlan-gradient-background pb-16">
		<div class="text-center pt-3">
			<h1 class="font-bold text-neutral-100 text-3xl py-3">Pricing plans</h1>
			<h5 class="text-neutral-300">Consequat eu reprehenderit laboris occaecat</h5>
		</div>
			<ul class="flex flex-col sm:flex-row justify-center">
				<li class="m-14 sm:m-20 md:m-5 lg:px-28 md:py-20" v-for="{ heading, price, points } in plans">
					<pricing-plan :heading="heading" :price="price" :points="points" />
				</li>
			</ul>
	</div>
</template>

<style scoped>
</style>