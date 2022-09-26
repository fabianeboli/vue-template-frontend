<script setup lang="ts">
import Backdrop from './Backdrop.vue';
import { useDropdownStore } from '~/stores/dropdown';

const store = useDropdownStore();

const {t} = useI18n();

const menuItems = 
[{ id: 1, path: '/', name: t('navbar.about'), isLink: false },
{ id: 2, path: '#pricing', name: t('navbar.pricing'), isLink: false },
{ id: 3, path: '#contact', name: t('navbar.contact'), isLink: false },
{ id: 4, path: '/blogs', name: t('navbar.blogs'), isLink: true }]

</script >

<template>
<Backdrop>
	<div class=" h-screen text-center w-64 bg-myNeutral-300 flex flex-col transition duration-1000 ease-in-out">
		<button @click="store.toggleDropdown()" class="text-red-700 font-bold text-4xl my-10">X</button>
		<ul class="my-20">
			<li class="my-14 text-3xl" :key="id" v-for="{id, path, name} in menuItems ">
				<router-link :to="path">{{name}}</router-link>
			</li>
		</ul>		
	</div>

</Backdrop>
	
</template>

<style scoped>
</style>