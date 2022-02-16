<template>
	<div class="mb-3">
		<label class="form-label">{{ label }}</label>
		<input
			type="text"
			class="form-control"
			:class="{
				'is-invalid': validationObject.$dirty && validationObject.$invalid,
				'is-valid': validationObject.$dirty && !validationObject.$invalid,
			}"
			:value="fieldValue"
			@input="this.fieldValue = $event.target.value"
		/>
		<div
			class="invalid-feedback"
			v-if="validationObject.$dirty && validationObject.$invalid"
		>
			Pole wymagane
		</div>
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
			type: String,
			required: true,
		},
		validationObject: {
			type: Object,
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
