<template>
	<form @submit.prevent="register">
		<div class="divitem">
			<label>Username:</label>
			<input type="text" required v-model="username" />
		</div>

		<div class="divitem">
			<label>Email:</label>
			<input type="email" required v-model="email" />
		</div>

		<div class="divitem">
			<label>Password:</label>
			<input type="password" required v-model="password" />
		</div>

		<div v-if="passwordError" class="error">{{ passwordError }}</div>
		<div class="divitem">
			<label>Role:</label>
			<select v-model="role">
				<option value="developer">Web Developer</option>
				<option value="designer">Web Designer</option>
			</select>
		</div>

		<div class="divitem">
			<input type="checkbox" required v-model="terms" />
			<label>Accept terms and conditions</label>
		</div>

		<div class="divitem">
			<button class="submit">Create an Account</button>
		</div>
		<div class="divitem">
			<p>
				Already have an account?
				<span>
					<route-link to="/login">Login</route-link>
					instead.</span
				>
			</p>
		</div>
	</form>
</template>

<script>
import { useFreelancersStore } from "../stores/FreelancersStore";
import { ref } from "vue";
// import axios from "axios";
// import { APIURL } from "../constants";

export default {
	name: "Signupform",
	setup() {
		const freelancersStore = useFreelancersStore();

		const username = ref("");
		const email = ref("");
		const password = ref("");
		const role = ref("");

		const register = () => {
			// const { username, password, email, role } = this.form;
			if (!username || !password || !email) {
				alert("Username, email and password are required");
			} else {
				try {
					freelancersStore.addFreelancer({
						username: username.value,
						email: email.value,
						password: password.value,
						role: role.value,
					});

					alert("Signup successful");

					// this.$router.push("/login");
				} catch (error) {
					console.error(error);
					alert("Registration failed.");
				}
				// alert("Password must be at least 6 characters!!!");
			}
		};
		return { register, username, email, password, role };
	},
};
</script>

<style scoped>
form {
	width: 300px;
	height: 100%;
	margin: 30px auto;
	background-color: #eee;
	border: 1px solid black;
	border-radius: 5px;
	font-size: 16px;
	padding: 20px;
	align-items: center;
}
.divitem {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 30px 10px;
}

.divitem input {
	height: 30px;
}
.submit {
	background-color: aquamarine;
	padding: 10px;
	margin: 10px auto;
	border: none;
	border-radius: 5px;
	font-weight: bold;
}
.divitem a {
	text-decoration: none;
	color: brown;
}
.error {
	color: red;
	font-weight: 700;
}
</style>
