<template>
	<h1 class="logo">
		<span>
			<router-link to="/">{{ getLogo }}</router-link>
		</span>
	</h1>
</template>

<script>
export default {
	props: ["isSmall"],
	computed: {
		getLogo() {
			return this.isSmall ? "V" : "VueApp";
		},
	},
};
</script>

<style scoped>
.logo {
	padding: 2.5rem 0.5rem;
}

.logo a {
	color: #fff;
	font-weight: bold;
	text-decoration: none;
}
</style>
