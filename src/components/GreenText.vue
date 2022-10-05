<script setup>
const props = defineProps({
	text: String
});
</script>

<template>
	<span class="green">{{ text }}</span>
</template>

<style lang="css" scoped>
.green {
	color: #42b883;
}
</style>
