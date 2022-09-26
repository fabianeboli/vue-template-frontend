<script setup lang="ts">

const { isInvalid, errors } = defineProps<{isInvalid: boolean, errors: any[]}>()

</script>

<template>
	<div class="relative flex justify-center">
		<span
			v-if="isInvalid"
			class="absolute bg-red-50 rounded-lg text-red-600 text-xs bottom-14 w-full"
		>
			<li v-for="error in errors" :key="error.$uid" class="p-1 ml-5">{{ error.$message }}</li>
		</span>
	</div>
</template>

<style scoped>
</style>