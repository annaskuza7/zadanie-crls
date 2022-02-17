<template>
	<div class="table-responsive" v-if="items.length && !isLoading">
		<table class="table">
			<thead>
				<tr>
					<th scope="col" v-for="c in columns" :key="c">
						{{ c }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in items" :key="item.id">
					<th scope="row">{{ index + 1 }}</th>
					<td>
						<span class="col-title overflow-eclipse" :title="item.title"
							>{{ item.title }}
						</span>
					</td>
					<td>{{ getCategorylabel(item.category) }}</td>
					<td>{{ item.city }}</td>
					<td>
						<span class="col-comment overflow-eclipse" :title="item.comment"
							>{{ item.comment }}
						</span>
					</td>
					<td>{{ getStatusLabel(item.status) }}</td>
					<td>{{ getPriorityLabel(item.isPriority) }}</td>
					<td>
						<div class="table-actions">
							<router-link :to="`/task/${item.id}`">
								<i class="icon fa-solid fa-pencil" />
							</router-link>
							<div @click="() => onDelete(item.id)">
								<i class="icon fa-solid fa-trash" />
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<p class="info-message" v-if="!items.length && !isLoading">
		Brak danych do wyświetlenia.
	</p>
	<p class="info-message" v-if="isLoading">Pobieranie danych...</p>
</template>

<script>
import { statusOptions, categoryOptions } from "../constants/variables";
import { mapGetters } from "vuex";

export default {
	props: {
		items: {
			type: Array,
			required: true,
		},
		columns: {
			type: Array,
			required: true,
		},
	},
	methods: {
		getCategorylabel(category) {
			const currentCategory = categoryOptions.find(
				(el) => el.value === category
			);

			if (currentCategory) {
				return currentCategory.label;
			}
		},
		getStatusLabel(status) {
			const currentStatus = statusOptions.find((el) => el.value === status);

			if (currentStatus) {
				return currentStatus.label;
			}
		},
		getPriorityLabel(isActive) {
			return isActive ? "Tak" : "Nie";
		},
		onDelete(id) {
			this.$store.dispatch("tasks/deleteTask", id);
		},
	},
	computed: {
		...mapGetters({
			isLoading: "tasks/isLoading",
		}),
	},
};
</script>

<style scoped>
.overflow-eclipse {
	display: inline-block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.col-title {
	width: 300px;
}

.col-comment {
	width: 240px;
}

.table-actions {
	display: flex;
	justify-content: space-between;
	width: 3rem;
}

.icon {
	cursor: pointer;
	color: #000;
}

.fa-pencil:hover {
	color: var(--color-primary-active);
}
.fa-trash:hover {
	color: var(--color-error);
}
</style>
