<template>
	<Header title="Lista zadań" />

	<div class="container">
		<div class="row">
			<div class="col">
				<TaskTable :items="tasks" :columns="columns" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "../components/Header.vue";
import TaskTable from "../components/TaskTable.vue";

export default {
	components: { Header, TaskTable },
	data() {
		return {
			columns: [
				"Lp",
				"Nazwa",
				"Kategoria",
				"Miasto",
				"Uwagi",
				"Status",
				"Priorytet",
				"",
			],
		};
	},
	created() {
		this.$store.dispatch("tasks/getTasks");
	},
	computed: {
		...mapGetters({
			tasks: "tasks/tasks",
			isLoading: "tasks/isLoading",
		}),
	},
};
</script>

<style scoped></style>
