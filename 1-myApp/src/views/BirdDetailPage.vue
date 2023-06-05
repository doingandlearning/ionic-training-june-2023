<template>
	<layout pageTitle="Bird" pageBackLink="/birds">
		Info about a bird!
	</layout>
</template>

<script setup>
import Layout from "../components/Layout.vue"

// hooks -> composables
import {useRoute} from "vue-router"

const route = useRoute();

console.log(route.params.id)

birds.find(bird => bird.id === route.params.id)

</script>