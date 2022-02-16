<template>
	<Sidebar @onChangeWidth="getSidebarWidth" />
	<main :style="{ 'margin-left': width }">
		<router-view></router-view>
	</main>
</template>

<script>
import Sidebar from "./components/Sidebar/Sidebar.vue";

export default {
	name: "App",
	components: { Sidebar },
	data() {
		return {
			width: null,
		};
	},
	methods: {
		getSidebarWidth(value) {
			return (this.width = value);
		},
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");

:root {
	--color-primary: #22577a;
	--color-primary-active: #38a3a5;
	--color-secondary: #f5f3f5;
	--color-error: #dc3545;
}

*,
::after,
::before {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: "Montserrat", sans-serif;
}

.btn-primary {
	background-color: var(--color-primary);
	border-color: var(--color-primary);
}
.btn-primary:hover {
	background-color: var(--color-primary-active);
	border-color: var(--color-primary-active);
}
.btn-outline-primary {
	border-color: var(--color-primary);
	color: var(--color-primary);
}
.btn-outline-primary:hover {
	background-color: #fff;
	color: var(--color-primary-active);
	border-color: var(--color-primary-active);
}
</style>
