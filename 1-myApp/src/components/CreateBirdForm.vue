<template>
	<form @submit.prevent="submitForm">
		<ion-list>
			<ion-item>
				<ion-input type="text" required label="Name" v-model="enteredName"></ion-input>
			</ion-item>
			<ion-item>
				<!-- Add in a camera icon that is clickable  -->
				<ion-buttons slot="start">
					<ion-button @click="handleTakePhoto">
						<ion-icon slot="icon-only" :icon="camera"></ion-icon>
					</ion-button>
				</ion-buttons>
				<ion-input type="text" required label="Image URL" v-model="enteredUrl">	</ion-input>
			</ion-item>
			<ion-item>
				<ion-textarea type="text" required label="Description" rows="5" v-model="enteredDescription">	</ion-textarea>
			</ion-item>
			<ion-button type="submit" expand="block">Save</ion-button>
		</ion-list>
	</form>
</template>

<script setup>
import {IonList, IonItem, IonInput, IonTextarea, IonButton, IonButtons, IonIcon} from "@ionic/vue"
import {ref} from "vue"
import useCamera from "../composables/useCamera";
import { camera } from "ionicons/icons";

const enteredName = ref("")
const enteredUrl = ref("")
const enteredDescription = ref("")

const emit = defineEmits(['save-bird'])

const { takePhoto } = useCamera()

async function handleTakePhoto() {
	const photo = await takePhoto();
	enteredUrl.value = photo.webPath
}

function submitForm() {
	const birdData = {
		title: enteredName.value,
		image: enteredUrl.value,
		description: enteredDescription.value
	}
	emit('save-bird', birdData)
}
</script>