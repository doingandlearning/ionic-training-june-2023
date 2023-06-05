<template>
	<ion-img :src="image" :alt="title"></ion-img>
	<h2 class="ion-text-center">{{ title }}</h2>
	<p class="ion-text-center">{{ description }}</p>
</template>

<script setup>
defineProps({

	title: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
})
</script>