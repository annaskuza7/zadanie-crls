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
}

*,
::after,
::before {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: "Montserrat", sans-serif;
}
</style>
