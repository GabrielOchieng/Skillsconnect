<template>
	<header>
		<nav>
			<div class="nav2">
				<router-link to="/">Find Jobs</router-link>
				<router-link to="/freelancers">Freelancers</router-link>
				<router-link to="/about">Get Ideas</router-link>
				<router-link to="/about">About</router-link>
				<router-link to="/about">Resources</router-link>
			</div>
		</nav>
	</header>
</template>

<script setup></script>

<style scoped>
.nav2 {
	background-color: black;
	width: 100%;
	height: 50px;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.nav2 a {
	text-decoration: none;
	color: white;
}

/* RESPONSIVENESS */

@media (max-width: 576px) {
	* {
		display: none;
	}
}
</style>
