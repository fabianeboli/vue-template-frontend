<script setup lang="ts">import { useDropdownStore } from '~/stores/dropdown';

const store = useDropdownStore();
</script>

<template>
	<div 
	:class="[!store.dropdown && 'hidden ',
	'  bg-neutral-900/50 w-screen h-screen fixed z-40 top-0']">
		<slot></slot>
	</div>
</template>

<style scoped>
</style>