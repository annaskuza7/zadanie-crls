<template>
	<router-link :to="to" class="link" :class="{ active: isActive }">
		<i class="icon" :class="icon"></i>
		<transition name="fade">
			<span class="link-name"> {{ title }} </span>
		</transition>
	</router-link>
</template>

<script>
import { useRoute } from "vue-router";

export default {
	props: {
		to: { type: String, required: true },
		icon: { type: String, required: true },
		title: { type: String, required: true },
	},
	data() {
		return {};
	},
	computed: {
		isActive() {
			const route = useRoute();
			return route.path === this.to;
		},
	},
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.link {
	display: flex;
	align-items: center;
	cursor: pointer;
	position: relative;
	font-weight: 400;
	user-select: none;

	margin: 0.5rem 0.4rem;
	padding: 1rem 0;
	height: 1.5rem;
	border-bottom: 1px solid transparent;

	color: #fff;
	text-decoration: none;
}

.link:hover {
	border-bottom: 1px solid #fff;
}

.link.active {
	background-color: var(--color-primary-active);
	border-bottom: 1px solid #fff;
}

.link .icon {
	flex-shrink: 0;
	width: 25px;
	margin: 0 0.3rem;
}

.link-name {
	padding-left: 1rem;
	white-space: nowrap;
}
</style>
