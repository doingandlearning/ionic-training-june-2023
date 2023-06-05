<template>
	<form @submit.prevent="submitForm">
		<ion-list>
			<ion-item>
				<ion-input type="text" required label="Name" v-model="enteredName"></ion-input>
			</ion-item>
			<ion-item>
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
import {IonList, IonItem, IonInput, IonTextarea, IonButton} from "@ionic/vue"
import {ref} from "vue"

const enteredName = ref("")
const enteredUrl = ref("")
const enteredDescription = ref("")

const emit = defineEmits(['save-bird'])

function submitForm() {
	const birdData = {
		title: enteredName.value,
		image: enteredUrl.value,
		description: enteredDescription.value
	}
	emit('save-bird', birdData)
}
</script>