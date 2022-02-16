<template>
	<div class="mb-3">
		<input type="file" class="form-control" />
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: Boolean,
			required: true,
		},
	},
	computed: {},
};
</script>

<style scoped></style>
