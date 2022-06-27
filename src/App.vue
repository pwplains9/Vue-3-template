<template lang='pug'>
main
	HeaderComponent
	router-view(v-slot="{Component}")
		transition(name='fade' mode="out-in")
			component(:is="Component" :key="$route.path")
</template>

<script>
import Content from "@/components/Content/Content";
import MainPage from "@/Pages/MainPage";
import HeaderComponent from "@/components/Header";

export default {
	name: 'App',
	components: {HeaderComponent, MainPage, Content}
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s $easing-smooth;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transition: opacity 0.5s $easing-smooth;
}

</style>
