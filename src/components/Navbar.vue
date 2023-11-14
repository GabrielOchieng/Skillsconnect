<template>
	<header>
		<nav>
			<div class="nav1">
				<div class="navbarLeft">
					<router-link class="heading" to="/"
						><img src="../assets/logo.png" alt="" />
						<h1>SKILLSCONNECT</h1></router-link
					>
				</div>
				<div class="navbarRightL">
					<router-link class="navi" to="/about">How it works</router-link>
					<router-link class="navi" to="/">Browse Jobs</router-link>
					<router-link class="navi" to="/login">Log in</router-link>
					<router-link class="navi" to="/signup">Sign up</router-link>
				</div>
				<div class="navbarRightS">
					<div class="closemen" v-if="showMenu">
						<button>
							<i class="material-icons closeIcon" @click="showMenu = !showMenu"
								>close</i
							>
						</button>
						<router-link to="/about" class="navi">How it works</router-link>
						<router-link to="/" class="navi">Browse Jobs</router-link>
						<router-link to="/login" class="navi">Log in</router-link>
						<router-link to="/signup" class="navi">Sign up</router-link>
					</div>

					<div v-else>
						<button>
							<i class="material-icons menuIcon" @click="showMenu = !showMenu"
								>menu</i
							>
						</button>
					</div>
				</div>
			</div>
			<!-- <hr class="navhor" /> -->
		</nav>
	</header>
</template>

<script>
export default {
	name: "Navbar",
	data() {
		return {
			showMenu: false,
		};
	},
};
</script>

<style scoped>
.heading {
	display: flex;
	align-items: center;
}

.nav1 {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 75px;
	width: 100%;
	padding: 20px;
	z-index: 1000;
	background-color: whitesmoke;
}
.navhor {
	width: 100%;
}

.navbarLeft {
	display: flex;
	align-items: center;
	padding: 0 20px;
	gap: 30px;
}

.navbarLeft h1 {
	font-style: serif;
	font-style: italic;
}

.navbarLeft img {
	width: 30px;
	height: 30px;
}

.navbarRightL {
	display: flex;
	align-items: center;
	gap: 10px;
}
.navbarRightS {
	display: none;
}
.navi:hover {
	background-color: aquamarine;
	padding: 5px 15px;
	font-size: 16px;
}
a {
	text-decoration: none;
	color: black;
}

@media (max-width: 768px) {
	.nav1 {
		display: flex;
		height: 100%;
		font-size: 16px;
		position: relative;
	}
	.navbarRightL {
		display: none;
	}

	.navbarRightS {
		display: block;
	}
	.closemen {
		display: flex;
		flex-direction: column;
		background-color: whitesmoke;
		padding: 10px;
		border-radius: 5px;
		gap: 10px;
		position: absolute;
		right: 20px;
		top: 20px;
	}

	.menuIcon {
		background-color: white;
		display: block;
	}
	.closeIcon {
		text-align: center;
		background-color: white;
	}
	button {
		border: none;
	}
}

@media (max-width: 576px) {
	.nav1 {
		display: flex;
		height: 100%;
		font-size: 16px;
	}
	.navbarRightL {
		display: none;
	}
}
</style>
