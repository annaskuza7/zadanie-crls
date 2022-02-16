import { createStore } from "vuex";

import taskModule from "./modules/task";

const store = createStore({
	modules: {
		tasks: taskModule,
	},
	mutations: {},
	actions: {},
	getters: {},
});

export default store;
