<script setup>
const props = defineProps({
	path: String,
	fileExtension: String
});

const filePath = computed(__dirname + props.path);
const importedFile = `<<< @${filePath}.${props.fileExtension}`;
</script>

<template>{{ importedFile }}</template>
