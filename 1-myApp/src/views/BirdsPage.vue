<template>
	<layout pageTitle="Birds App">
		<bird-list :birds="birds"></bird-list>
		<template v-slot:actions-end>
			<ion-button router-link="/birds/add">
				<ion-icon slot="icon-only" :icon="add"></ion-icon>
			</ion-button>
		</template>
	</layout>
</template>

<script setup>
import {IonButton, IonIcon} from "@ionic/vue"

import {add} from "ionicons/icons"
import {computed} from "vue"
import BirdList from "../components/BirdList.vue"
import Layout from "../components/Layout.vue"
import {useStore} from "vuex"

const store = useStore()
const birds = computed(() => store.getters.birds)

</script>