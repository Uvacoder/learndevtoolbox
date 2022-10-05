<script setup>
const props = defineProps({
	text: String
});
</script>

<template>
	<span class="blue">{{ text }}</span>
</template>

<style lang="css" scoped>
.blue {
	color: #1a5bff;
}
</style>
