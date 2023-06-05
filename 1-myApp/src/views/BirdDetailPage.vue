<template>
	<layout :pageTitle="loadedBird ? loadedBird.title : 'Loading ... '" pageBackLink="/birds">
		<h2 v-if="!loadedBird">Could not find bird with that id.</h2>
		<bird-overview v-else :title="loadedBird.title" :description="loadedBird.description" :image="loadedBird.image" />
	</layout>
</template>

<script setup>
import Layout from "../components/Layout.vue"

// hooks -> composables
import { useRoute } from "vue-router"
import { useStore } from "vuex"
import { computed } from "vue"

import BirdOverview from "../components/BirdOverview.vue"

const route = useRoute();
const store = useStore();

const loadedBird = computed(() => store.getters.bird(route.params.id))
</script>