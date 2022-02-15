<template>
	<div class="sidebar" :style="{ width: toggleSidebar }">
		<Logo :isSmall="collapsed" />

		<SidebarLink to="/list" icon="fa-solid fa-list-check" title="Lista zadań" />
		<SidebarLink
			to="/task"
			icon="fa-solid fa-circle-plus"
			title="Nowe zadanie"
		/>

		<span
			class="collapse-icon"
			:class="{ 'rotate-180': collapsed }"
			@click="setCollapse"
		>
			<i class="fas fa-angle-double-left"></i>
		</span>
	</div>
</template>

<script>
import SidebarLink from "./SidebarLink.vue";
import Logo from "../Logo.vue";

export default {
	name: "Sidebar",
	components: { SidebarLink, Logo },
	data() {
		return {
			collapsed: false,
			sidebarWidth: 200,
			sidebarCollapsed: 64,
		};
	},
	methods: {
		setCollapse() {
			this.collapsed = !this.collapsed;
		},
	},
	computed: {
		toggleSidebar() {
			const width = `${
				this.collapsed ? this.sidebarCollapsed : this.sidebarWidth
			}px`;

			this.$emit("onChangeWidth", width);
			return width;
		},
	},
};
</script>

<style scoped>
.sidebar {
	color: #fff;
	background-color: var(--color-primary);

	float: left;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	bottom: 0;
	padding: 0.5rem;

	transition: 0.3s ease;

	display: flex;
	flex-direction: column;
}

.collapse-icon {
	position: absolute;
	bottom: 0;
	padding: 0.75rem;
	margin: 0 0.4rem;
	color: #ffffffb3;
	cursor: pointer;

	transition: 0.2s linear;
}

.collapse-icon:hover {
	color: #fff;
}

.rotate-180 {
	transform: rotate(180deg);
	transition: 0.2s linear;
}
</style>
