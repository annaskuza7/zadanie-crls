<template>
	<div class="mb-3">
		<label class="form-label">{{ label }}</label>
		<select
			class="form-select"
			:class="{
				'is-invalid': validationObject.$dirty && validationObject.$invalid,
				'is-valid': validationObject.$dirty && !validationObject.$invalid,
			}"
			v-model="fieldValue"
		>
			<option selected disabled value="">Wybierz</option>
			<option
				v-for="option in options"
				:key="option.value"
				:value="option.value"
			>
				{{ option.label }}
			</option>
		</select>
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
		options: {
			type: Array,
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
