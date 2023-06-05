<template>
	<ion-page>
		<ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Glasgow Uni</ion-title>
      </ion-toolbar>
    </ion-header>
		<ion-content>
			<p>

				Goodbye!
			</p>
			<ion-router-link href="/home">Go home!</ion-router-link>
		</ion-content>
	</ion-page>
</template>

<script setup>
import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle} from "@ionic/vue"
</script>

<style>
</style>