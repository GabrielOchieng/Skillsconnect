<template>
	<div class="top">
		<img src="../assets/abouthead.jpg" alt="" />
		<div class="talk">
			<h2>
				We seek to connect jobs with the best skills around the globe relevant
				to their requirements.
			</h2>
			<div class="createlink">
				<router-link to="/createjob"
					><i class="material-icons">star</i></router-link
				>
				<router-link to="/createjob">Get top skills globally</router-link>
			</div>

			<div class="para">
				<p>
					If you're in search of top skills to complete a task of yours within
					any field and want access to higher value job delivery, then join the
					<span class="homelink">
						<router-link to="/">SKILLSCONNECT</router-link>
					</span>
					platform. When you have a task, the skills are delivered to you!
				</p>
			</div>

			<div class="hireBtn">
				<router-link class="hireButton" to="/createjob">Hire Now</router-link>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.top {
	position: relative;
}
.talk {
	position: absolute;
	top: 30%;
	left: 5%;
	width: 40%;
	font-size: 20px;
	color: white;

	font-weight: bold;
}

img {
	object-fit: cover;
	width: 100%;
	height: 850px;
}
.createlink {
	display: flex;
	align-items: center;
	margin-top: 30px;
	font-weight: bold;
}

.para {
	margin-top: 30px;
}
.homelink a {
	font-weight: bold;
	color: aquamarine;
}
a {
	color: brown;
	text-decoration: none;
}

.hireBtn {
	margin-top: 50px;
	text-align: center;
}

.hireButton {
	background-color: brown;
	color: aquamarine;
	padding: 10px;
	border: none;
	border-radius: 5px;
	font-size: 20px;
	font-weight: 600;
}

/* RESPONSIVENESS */
@media (max-width: 768px) {
	img {
		height: 650px;
	}
	.talk {
		width: 70%;
	}
}
@media (max-width: 576px) {
	img {
		height: 650px;
	}
	.talk {
		width: 100%;
		padding-top: 110px;
		font-size: 16px;
	}
}
</style>
