<script setup lang="ts">
import { useServiceForm } from '../../stores/serviceForm';

interface IVisitDate {
	timeOfVisit: Date;
	isOccupied: boolean;
}

interface IVisitData {
	id: number,
	date: Date;
	time: IVisitDate[];
}

// !TODO change to fetch data from the api
const data: IVisitData[] = [
	{
		id: 1,
		date: new Date(2022, 1, 10),
		time: [
			{ timeOfVisit: new Date(2022, 2, 10, 9, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 10, 0, 0), isOccupied: true },
			{ timeOfVisit: new Date(2022, 2, 10, 11, 0, 0), isOccupied: true },
			{ timeOfVisit: new Date(2022, 2, 10, 12, 0, 0), isOccupied: false }],
	},
	{
		id: 2,
		date: new Date(2022, 1, 11),
		time: [
			{ timeOfVisit: new Date(2022, 2, 10, 9, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 10, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 11, 0, 0), isOccupied: true },
			{ timeOfVisit: new Date(2022, 2, 10, 12, 0, 0), isOccupied: false }],
	},
	{
		id: 3,
		date: new Date(2022, 1, 12),
		time: [
			{ timeOfVisit: new Date(2022, 2, 10, 9, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 10, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 11, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 12, 0, 0), isOccupied: false }],
	},
	{
		id: 4,
		date: new Date(2022, 1, 13),
		time: [
			{ timeOfVisit: new Date(2022, 2, 10, 9, 0, 0), isOccupied: true },
			{ timeOfVisit: new Date(2022, 2, 10, 10, 0, 0), isOccupied: true },
			{ timeOfVisit: new Date(2022, 2, 10, 11, 0, 0), isOccupied: true },
			{ timeOfVisit: new Date(2022, 2, 10, 12, 0, 0), isOccupied: true }],
	},
	{
		id: 5,
		date: new Date(2022, 1, 14),
		time: [
			{ timeOfVisit: new Date(2022, 2, 10, 9, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 10, 0, 0), isOccupied: true },
			{ timeOfVisit: new Date(2022, 2, 10, 11, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 12, 0, 0), isOccupied: false }]
	},
	{
		id: 6,
		date: new Date(2022, 1, 15),
		time: [
			{ timeOfVisit: new Date(2022, 2, 10, 9, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 10, 0, 0), isOccupied: true },
			{ timeOfVisit: new Date(2022, 2, 10, 11, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 12, 0, 0), isOccupied: false }]
	},
	{
		id: 7,
		date: new Date(2022, 1, 16),
		time: [
			{ timeOfVisit: new Date(2022, 2, 10, 9, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 10, 0, 0), isOccupied: true },
			{ timeOfVisit: new Date(2022, 2, 10, 11, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 12, 0, 0), isOccupied: false }]
	},
	{
		id: 8,
		date: new Date(2022, 1, 17),
		time: [
			{ timeOfVisit: new Date(2022, 2, 10, 9, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 10, 0, 0), isOccupied: true },
			{ timeOfVisit: new Date(2022, 2, 10, 11, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 12, 0, 0), isOccupied: false }]
	},
	{
		id: 9,
		date: new Date(2022, 1, 18),
		time: [
			{ timeOfVisit: new Date(2022, 2, 10, 9, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 10, 0, 0), isOccupied: true },
			{ timeOfVisit: new Date(2022, 2, 10, 11, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 12, 0, 0), isOccupied: false }]
	},
	{
		id: 10,
		date: new Date(2022, 1, 19),
		time: [
			{ timeOfVisit: new Date(2022, 2, 10, 9, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 10, 0, 0), isOccupied: true },
			{ timeOfVisit: new Date(2022, 2, 10, 11, 0, 0), isOccupied: false },
			{ timeOfVisit: new Date(2022, 2, 10, 12, 0, 0), isOccupied: false }]
	},
];
let store = useServiceForm();

let minimumVisitDate = ref(0);
let filteredDates = ref<IVisitData[]>([]);

watchEffect(() => filteredDates.value = data.slice(minimumVisitDate.value, minimumVisitDate.value + 5));
const getMinutesWithTwoDigits = (date: Date) => date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
const getTwoDigitDate = (partOfDate: number) =>  partOfDate < 10 ? '0' + partOfDate : partOfDate;
const increment = () => minimumVisitDate.value + 5 < data.length && (minimumVisitDate.value += 1);
const decrement = () => minimumVisitDate.value > 0 && (minimumVisitDate.value -= 1);
</script>

<template>
	<div class="flex items-center">
		<button @click="decrement" class="bg-neutral-200 p-1 rounded-full">
			<carbon-chevron-left color="white" />
		</button>
		<table class="mx-5">
			<thead>
				<tr>
					<th v-for="{ date, id } in filteredDates" :key="id" class="text-center">
						<div>{{ new Intl.DateTimeFormat("pl", { weekday: "short" }).format(date) }}</div>
						<div
							class="font-normal text-neutral-700 text-sm my-2"
						>{{ date.getDate() }} {{ date.toLocaleString("pl", { month: "short" }) }}</div>
					</th>
				</tr>
			</thead>
			<tbody class>
				<td class="px-2" v-for="{ time, id } in filteredDates" :key="id">
					<button
						v-for="{ timeOfVisit, isOccupied } in time"
						@click="store.setVisitDate(timeOfVisit); store.setVisitId(id)"
						:key="timeOfVisit.toString()"
						:class="[isOccupied ? 'bg-myTeal-200 text-white'
						: 'hover:cursor-default text-neutral-400',
						'block justify-center items-center mx-auto px-2 m-3 cursor-pointer font-bold rounded-full',
						timeOfVisit === store.visitDate && 'buttonSelect']"
					>{{ getTwoDigitDate(timeOfVisit.getHours())}}:{{ getTwoDigitDate(timeOfVisit.getMinutes()) }}</button>
				</td>
			</tbody>
		</table>
		<button class="bg-neutral-200 p-1 rounded-full" @click="increment">
			<carbon-chevron-right color="white" />
		</button>
	</div>
</template>

<style scoped>

.buttonSelect{
	@apply bg-myOrange-200 !important
}

</style>
