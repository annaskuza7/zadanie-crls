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
				{{ getButtonText }}
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

import { mapGetters } from "vuex";
import { statusOptions, categoryOptions } from "../constants/variables";

export default {
	components: {
		InputTextField,
		SelectField,
		TextareaField,
		CheckboxField,
		// UploadField,
	},
	props: {
		isEdit: {
			type: Boolean,
			required: true,
		},
	},
	data() {
		return {
			v$: useValidate(),
			id: undefined,
			title: "",
			category: "",
			city: "",
			comment: "",
			status: "",
			isPriority: false,
			// selectedFile: null,
			categoryList: categoryOptions,
			statusList: statusOptions,
		};
	},
	methods: {
		submitForm() {
			this.v$.$validate();

			if (!this.v$.$error) {
				const formData = {
					title: this.title,
					category: this.category,
					city: this.city,
					comment: this.comment,
					status: this.status,
					isPriority: this.isPriority,
				};

				if (this.isEdit) {
					this.$store.dispatch("tasks/editTask", { ...formData, id: this.id });
				} else {
					this.$store.dispatch("tasks/addTask", formData);
				}
			}
		},
	},
	watch: {
		task() {
			this.id = this.task?.id || undefined;
			this.title = this.task?.title || "";
			this.category = this.task?.category || "";
			this.city = this.task?.city || "";
			this.comment = this.task?.comment || "";
			this.status = this.task?.status || "";
			this.isPriority = this.task?.isPriority || false;
		},
	},
	computed: {
		...mapGetters({
			isLoading: "tasks/isLoading",
			task: "tasks/task",
		}),
		getButtonText() {
			return this.isLoading ? "Wysyłanie..." : "Zapisz";
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
