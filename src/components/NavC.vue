<template>
	<header>
		<nav>
			<div class="nav1">
				<div class="navbarLeft">
					<h2>TOP SKILLS</h2>
				</div>
				<div class="navbarRight">
					<router-link to="/createjob" class="hireButton">HIRE</router-link>
					<router-link to="/" class="workButton">WORK</router-link>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup></script>

<style scoped>
.nav1 {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 75px;
	width: 100%;
	background-color: aquamarine;
}

.navbarLeft {
	display: flex;
	align-items: center;
	padding: 0 20px;
	gap: 10px;
}

.navbarRight {
	display: flex;
	align-items: center;
	gap: 10px;
}
a {
	text-decoration: none;
	color: black;

	padding: 10px;
	margin: 0 10px;
	text-align: center;
	border: 1px solid gray;
	width: 100px;
	font-weight: 700;
	font-size: 18px;
}
button {
	padding: 10px;
	margin: 0 10px;
	text-align: center;
	border: 1px solid gray;
	width: 100px;
	font-weight: 700;
	font-size: 18px;
}
.hireButton {
	background-color: brown;
}
.workButton {
	background-color: aquamarine;
}
/* RESPONSIVENESS */

@media (max-width: 576px) {
	.nav1 {
		display: flex;
		flex-direction: column;
		height: 100%;
		font-size: 12px;
	}
	.navbarRight {
		display: flex;
		flex-direction: column;
	}
}
</style>
