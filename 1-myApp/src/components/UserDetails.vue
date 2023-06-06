<template>
	<ion-content>
		<div v-if="loading">
			Loading...
		</div>
		<div v-else>
			<h1>{{ user.name }}</h1>
			<p>{{ user.email }}</p>
		</div>
	</ion-content>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { IonContent } from '@ionic/vue'

const user = ref(null)
const loading = ref(true)

const emit = defineEmits(['loaded'])

onMounted(async () => {
	try {
		const response = await axios.get('/api/users/1')
		console.log(response)
		user.value = response.data
	} catch (error) { 
		console.log(error) 
	} finally {
		loading.value = false
		emit('loaded')
	}
})
</script>