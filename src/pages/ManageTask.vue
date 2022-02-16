<template>
	<Header title="Dodaj nowe zadanie" />
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-sm-12 col-md-6">
				<AddEditTaskForm />
			</div>
		</div>
	</div>
</template>

<script>
import Header from "../components/Header.vue";
import AddEditTaskForm from "../components/AddEditTaskForm.vue";

export default {
	components: { Header, AddEditTaskForm },
};
</script>

<style scoped></style>
