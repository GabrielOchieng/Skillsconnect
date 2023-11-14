<template>
	<form @submit.prevent="login">
		<div class="divitem">
			<label>Email:</label>
			<input type="email" required v-model="form.email" />
		</div>

		<div class="divitem">
			<label>Password:</label>
			<input type="password" required v-model="form.password" />
		</div>

		<!-- <div v-if="passwordError" class="error">{{ passwordError }}</div> -->
		<div class="divitem">
			<label>Role:</label>
			<select v-model="form.role">
				<option value="developer">Web Developer</option>
				<option value="designer">Web Designer</option>
			</select>
		</div>

		<div class="divitem">
			<button class="submit">Login</button>
		</div>
		<div class="divitem">
			<p>
				Don't have an account yet?
				<span>
					<route-link to="/signup">Sign up</route-link>
					instead.</span
				>
			</p>
		</div>
	</form>
</template>

<script>
import axios from "axios";
import { APIURL } from "../constants";
export default {
	data() {
		return {
			form: { email: "", password: "", role: "" },
		};
	},
	methods: {
		async login() {
			const { email, password, role } = this.form;
			if (!email || !password || !role) {
				alert("Please enter your email, password and role");
			}
			try {
				const { data } = await axios.post(
					`${APIURL}/login`,
					{
						email,
						password,
						role,
					},
					{ withCredentials: true }
				);

				const { success, message } = data;
				if (success) {
					setTimeout(() => {
						this.$router.push("/");
					}, 2000);
				} else {
					alert(message);
				}
			} catch (error) {
				console.log(error);
			}
		},
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
	color: blue;
}
.error {
	color: red;
	font-weight: 700;
}
</style>

<!-- try {
	const {
		data: { token },
	} = await axios.post(`${APIURL}/login`, {
		email,
		password,
		role,
	});

	localStorage.setItem("token", token);
	this.$router.push("/");
	console.log(token);
} catch (error) {
	console.log(error);
	alert("Invalid email or password");
} -->
