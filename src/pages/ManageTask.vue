<template>
	<Header :title="headerTitle" />
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-sm-12 col-md-6">
				<AddEditTaskForm :isEdit="isEdit" />
			</div>
		</div>
	</div>
</template>

<script>
import Header from "../components/Header.vue";
import AddEditTaskForm from "../components/AddEditTaskForm.vue";

const Label = {
	new: "Nowe zadanie",
	edit: "Edytuj zadanie",
};

export default {
	components: { Header, AddEditTaskForm },
	data() {
		return {
			headerTitle: Label.new,
			isEdit: false,
		};
	},
	watch: {
		"$route.params.id": {
			handler: function (val) {
				this.getEditTask(val);
			},
		},
	},

	created() {
		this.getEditTask(this.$route.params.id);
	},

	methods: {
		getEditTask(taskId) {
			if (taskId) {
				this.headerTitle = Label.edit;
				this.isEdit = true;
				this.$store.dispatch("tasks/getTask", taskId);
			} else {
				this.headerTitle = Label.new;
				this.isEdit = false;
				this.$store.commit("tasks/clearTask");
			}
		},
	},
};
</script>

<style scoped></style>
