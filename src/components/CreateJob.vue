<template>
	<div>
		<h4 class="createTitle">Post a Job</h4>
	</div>
	<form @submit.prevent="handleSubmit">
		<div>
			<label for="title">Job Title:</label>
			<input type="text" v-model="jobTitle" />
		</div>

		<div>
			<label for="title">Job Description:</label>
			<textarea rows="8" v-model="jobDescription" />
		</div>

		<div>
			<label for="title">Skills:</label>
			<input type="text" v-model="jobSkills" />
		</div>

		<button class="create">Create</button>
	</form>
</template>

<script>
import { useJobsStore } from "../stores/JobsStore";
import { ref } from "vue";

export default {
	name: "CreateJob",

	setup() {
		const jobsStore = useJobsStore();

		const jobTitle = ref("");
		const jobDescription = ref("");
		const jobSkills = ref("");

		const handleSubmit = () => {
			if (
				jobDescription.value.length > 0 &&
				jobSkills.value.length > 0 &&
				jobTitle.value.length > 0
			) {
				jobsStore.addTask({
					jobTitle: jobTitle.value,
					id: Math.floor(Math.random() * 10000),
					jobDescription: jobDescription.value,
					skills: jobSkills.value,
				});
				jobTitle.value = "";
				jobDescription.value = "";
				jobSkills.value = "";
			}
		};
		return { handleSubmit, jobDescription, jobSkills, jobTitle };
	},
};
</script>

<style scoped>
.createTitle {
	margin: 10px;
	text-align: center;
	font-size: 20px;
	text-decoration: underline;
}
form {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 20px;
	height: 100%;
	width: 300px;
	margin: 10px auto;
	border: 2px solid gray;
	border-radius: 5px;
	padding: 10px;
	background-color: whitesmoke;
}

form div {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px;
}
.create {
	background-color: aquamarine;
	padding: 5px;
	width: 100px;
	margin: 10px auto;
	border: none;
	font-weight: bold;
}
</style>
