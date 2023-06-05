<template>
	<layout pageTitle="Add new bird" pageBackLink="/birds">
	  <create-bird-form @save-bird="saveBird($event)"></create-bird-form>
	</layout>
</template>
<script setup>
import Layout from "../components/Layout.vue"
import CreateBirdForm from "../components/CreateBirdForm.vue"
import {useStore} from "vuex"
import {useRouter} from "vue-router"

const store = useStore()
const router = useRouter()


function saveBird(birdData) {
	console.log(birdData)
	console.log("I'm in the adding page!")
	// dispatch our data to the store!
	store.dispatch("addBird", birdData)
	// redirect back to the /birds page
	router.replace("/birds")
}
</script>