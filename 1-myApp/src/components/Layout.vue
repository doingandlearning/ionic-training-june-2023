<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-back-button :defaultHref="pageBackLink"></ion-back-button>
				</ion-buttons>
				<ion-title>{{ pageTitle }}</ion-title>
				<ion-buttons slot="end">
					<slot name="actions-end"></slot>
				</ion-buttons>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<slot></slot>
		</ion-content>
	</ion-page>
</template>

<script setup>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from "@ionic/vue"

defineProps({
	pageTitle: {type: String, required: true},
	pageBackLink: {type: String, required: false}
})
</script>