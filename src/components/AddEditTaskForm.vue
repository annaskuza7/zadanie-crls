<template>
	<form>
		<InputTextField
			label="Nazwa"
			v-model:value="title"
			:validationObject="v$.title"
		/>
		<SelectField
			label="Kategoria"
			v-model:value="category"
			:validationObject="v$.category"
			:options="categoryList"
		/>
		<InputTextField
			label="Miejscowość"
			v-model:value="city"
			:validationObject="v$.city"
		/>
		<SelectField
			label="Status"
			v-model:value="status"
			:validationObject="v$.status"
			:options="statusList"
		/>
		<CheckboxField label="Sprawa priorytetowa" v-model:value="isPriority" />
		<!-- <UploadField v-model:value="selectedFile" /> -->
		<TextareaField
			label="Uwagi"
			v-model:value="comment"
			:validationObject="v$.comment"
		/>

		<div class="d-grid gap-2 d-md-flex justify-content-md-end">
			<router-link to="/">
				<button class="btn btn-outline-primary" type="button">Powrót</button>
			</router-link>
			<button class="btn btn-primary" type="button" @click="submitForm">
				Zapisz
			</button>
		</div>
	</form>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import InputTextField from "./Form/InputTextField.vue";
import SelectField from "./Form/SelectField.vue";
import TextareaField from "./Form/TextareaField.vue";
import CheckboxField from "./Form/CheckboxField.vue";
// import UploadField from "./Form/UploadField.vue";

export default {
	components: {
		InputTextField,
		SelectField,
		TextareaField,
		CheckboxField,
		// UploadField,
	},
	data() {
		return {
			v$: useValidate(),
			title: "",
			category: "",
			city: "",
			comment: "",
			status: "",
			isPriority: false,
			selectedFile: null,
			categoryList: [
				{ label: "Ubezpieczenie", value: "insurance" },
				{ label: "Likwidacja szkody", value: "claim-adjustment" },
				{ label: "Wycena nieruchomości", value: "real-estate-appraisal" },
			],
			statusList: [
				{ label: "W toku", value: "inProgress" },
				{ label: "Zaakceptowany", value: "positive" },
				{ label: "Odrzucony", value: "negative" },
			],
		};
	},
	methods: {
		submitForm() {
			this.v$.$validate(); // checks all inputs
			if (!this.v$.$error) {
				// if ANY fail validation
				const formData = {
					title: this.title,
					category: this.category,
					city: this.city,
					comment: this.comment,
					status: this.status,
					isPriority: this.isPriority,
				};

				console.log(formData);

				console.log("Form successfully submitted.");
			} else {
				console.log("Form failed validation");
			}
		},
	},
	validations() {
		return {
			title: { required },
			category: { required },
			city: { required },
			comment: { required },
			status: { required },
		};
	},
};
</script>

<style scoped>
.btn {
	padding: 10px 20px;
}
</style>
