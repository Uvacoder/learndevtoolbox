<script setup>
const props = defineProps({
	text: String,
	color: {
		validator(value) {
			return ["blue", "red", "green"].includes(value);
		}
	}
});
</script>

<template>
	<span :class="color">{{ text }}</span>
</template>

<style lang="css" scoped>
.blue {
	color: #1a5bff;
}
.red {
	color: #f54e82;
}
.green {
	color: #42b883;
}
</style>
