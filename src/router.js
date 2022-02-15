import { createRouter, createWebHistory } from "vue-router";
import TaskList from "./pages/TaskList.vue";
import NewTask from "./pages/NewTask.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/list", component: TaskList },
		{ path: "/task", component: NewTask },
		{ path: "/", redirect: "/list" },
		{ path: "/:notFound(.*)", component: NotFound },
	],
});

export default router;
