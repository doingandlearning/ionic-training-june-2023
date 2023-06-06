<template>
	<button @click="emitClickEvent">Click me, please!</button>
</template>

<script setup>

const emit = defineEmits(['clicked'])

function emitClickEvent() {
	emit('clicked');
}
</script>