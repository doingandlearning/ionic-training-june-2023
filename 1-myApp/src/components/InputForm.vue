<template>
	<form @submit.prevent="handleSubmit">
		<input type="text" v-model="inputValue" ref="inputField" />
		<button type="submit">Submit</button>
	</form>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['submit'])

const inputValue = ref("");

const handleSubmit = () => {
	emit('submit', inputValue.value);
}




</script>