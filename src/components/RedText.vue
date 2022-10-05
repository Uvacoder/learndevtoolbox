<script setup>
const props = defineProps({
	text: String
});
</script>

<template>
	<span class="red">{{ text }}</span>
</template>

<style lang="css" scoped>
.red {
	color: #f54e82;
}
</style>
