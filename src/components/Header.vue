<template>
	<header>
		<h1>{{ title }}</h1>
		<span>
			anna.skuza7@gmail.com
			<i class="icon fa-solid fa-right-from-bracket" />
		</span>
	</header>
</template>

<script>
export default {
	name: "Header",
	props: {
		title: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2.5rem;
	margin-bottom: 2rem;
	background-color: var(--color-secondary);
}

h1 {
	font-size: 2rem;
}

.icon {
	margin-left: 1rem;
	font-size: 1.2rem;
	cursor: pointer;
}
.icon:hover {
	color: var(--color-primary-active);
}
</style>
