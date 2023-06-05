<template>
	<ion-list>
		<ion-item v-for="bird in birds">
			<span>></span> {{ bird.title }}
		</ion-item>
	</ion-list>
</template>

<script setup>
import {IonList, IonItem } from "@ionic/vue"
defineProps({
	birds: {
		type: Array,
		required: true
	}
})
</script>

<style scoped>
ion-item {
	--color: blue;
}

</style>