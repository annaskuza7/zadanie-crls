import { v4 as uuidv4 } from "uuid";
import { MOCK_LIST } from "../../MOCK_LIST";
import router from "../../router";

export default {
	namespaced: true,
	state() {
		return {
			tasks: MOCK_LIST,
			task: null,
			loading: false,
			error: null,
		};
	},
	mutations: {
		addTask(state, payload) {
			const newItem = {
				id: uuidv4(),
				...payload,
			};

			state.tasks.push(newItem);
		},
		setLoading(state, payload) {
			state.loading = payload;
		},
		getTask(state, id) {
			state.task = state.tasks.find((el) => el.id === id);
		},
		clearTask(state) {
			state.task = null;
		},
		editTask(state, payload) {
			const removeEditingTask = state.tasks.filter(
				(task) => task.id !== payload.id
			);

			state.tasks = [...removeEditingTask, payload];
		},
		deleteTask(state, id) {
			state.tasks = state.tasks.filter((task) => task.id !== id);
		},
	},

	actions: {
		addTask(context, payload) {
			context.commit("setLoading", true);
			setTimeout(() => {
				context.commit("addTask", payload);
				context.commit("setLoading", false);

				router.push({ path: "/list" });
			}, 1500);
		},
		getTask(context, id) {
			context.commit("setLoading", true);
			setTimeout(() => {
				context.commit("getTask", id);
				context.commit("setLoading", false);
			}, 200);
		},
		editTask(context, payload) {
			context.commit("setLoading", true);
			setTimeout(() => {
				context.commit("editTask", payload);
				context.commit("setLoading", false);
				router.push({ path: "/list" });
			}, 200);
		},
		deleteTask(context, id) {
			context.commit("deleteTask", id);
		},
	},
	getters: {
		task(state) {
			return state.task;
		},
		tasks(state) {
			return state.tasks.sort((a, b) =>
				a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
			);
		},
		isLoading(state) {
			return state.loading;
		},
		error(state) {
			return state.error;
		},
	},
};
