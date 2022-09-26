<script setup lang="ts">
const center = ref([21.00, 52.13]);
const projection = ref('EPSG:4326');
const zoom = ref(12);
const rotation = ref(0);
const radius = ref(10)
const strokeWidth = ref(1)
const strokeColor = ref('white')
const fillColor = ref('#f86a38')
const coordinate = ref([21.00, 52.13])

</script>

<template>
	<ol-map
		:loadTilesWhileAnimating="true"
		:loadTilesWhileInteracting="true"
		style="height: calc(18rem + 1vh); width: calc(15rem + 15vw); border-radius: 20px; cursor: pointer;"
	>
		<ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

		<ol-tile-layer>
			<ol-source-osm />
		</ol-tile-layer>

		<ol-popup></ol-popup>

		<ol-vector-layer>
			<ol-source-vector>
				<ol-feature>
					<ol-geom-point :coordinates="coordinate"></ol-geom-point>
					<ol-style>
						<ol-style-circle :radius="radius">
							<ol-style-fill :color="fillColor"></ol-style-fill>
							<ol-style-stroke :color="strokeColor" :width="strokeWidth"></ol-style-stroke>
						</ol-style-circle>
					</ol-style>
				</ol-feature>
			</ol-source-vector>
		</ol-vector-layer>
	</ol-map>
</template>

<style scoped>
</style>