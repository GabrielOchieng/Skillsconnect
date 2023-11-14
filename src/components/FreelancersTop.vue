<template>
	<div class="top">
		<img src="../assets/Freelancertop.jpg" alt="" />
		<div class="talk">
			<h1>
				Get Skilled individuals from our pool to complete any task for you to
				perfection.
			</h1>

			<div class="para">
				<p>
					If you're in search of top skills to complete a task of yours within
					any field and want access to higher value job delivery, then be
					assured that you are in the right platform. When you have a task, the
					skills are delivered to you!
				</p>
			</div>

			<div class="hireBtn">
				<router-link to="/createjob" class="hireButton"
					>Get your job done now!!!</router-link
				>
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

.para {
	margin-top: 30px;
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
	.hireButton {
		padding: 5px;
		font-size: 12px;
	}
}
@media (max-width: 576px) {
	img {
		height: 650px;
	}
	.talk {
		width: 90%;
		padding-top: 10px;
		font-size: 16px;
	}
}
</style>
