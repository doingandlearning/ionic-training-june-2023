<template>
	<ion-list>
		<ion-item v-for="bird in birds" :router-link="`/birds/${bird.id}`">
			<ion-thumbnail slot="start">
				<ion-img :src="bird.image" alt=""></ion-img>
			</ion-thumbnail>
			<ion-label>
				{{ bird.title }}
			</ion-label>
		</ion-item>
	</ion-list>
</template>

<script setup>
import {IonList, IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue"
defineProps({
	birds: {
		type: Array,
		required: true
	}
})
</script>

<style scoped>


</style>