<template>
	<div>
		<Navbar />

		<RouterView />
		<Footer />
	</div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import NavB from "./components/NavB.vue";
import NavC from "./components/NavC.vue";

import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
/* * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
} */
</style>
