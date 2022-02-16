<template>
	<div class="form-check mb-3">
		<input class="form-check-input" type="checkbox" v-model="fieldValue" />
		<label class="form-check-label"> {{ label }} </label>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			required: true,
		},
		value: {
			type: Boolean,
			required: true,
		},
	},
	computed: {
		fieldValue: {
			get() {
				return this.value;
			},
			set(val) {
				this.$emit("update:value", val);
			},
		},
	},
};
</script>

<style scoped></style>
