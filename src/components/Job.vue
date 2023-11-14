<template>
	<div class="singlediv">
		<div class="imgdiv">
			<img src="../assets/singlepost.jpg" alt="" />
			<div class="job">
				<div class="jobtop">
					<div class="jobadv">
						<div class="jobtitle">
							<h3>{{ jobsStore.singleJob.jobTitle }}</h3>
							<p>6 days left</p>
						</div>
						<div class="jobdesc">
							<p>{{ jobsStore.singleJob.jobDescription }}</p>
						</div>
						<div class="skills">
							<a href="/">{{ jobsStore.singleJob.skills }}</a>
						</div>
					</div>
					<div class="price">
						<h4>$40 to $50 / hr</h4>
						<p>2 bids</p>
					</div>
				</div>
				<hr />
				<div class="jobbottom">
					<div class="submissionform">
						<h3>Submit your bid</h3>
						<form @submit.prevent="handleSubmit">
							<div class="formitem">
								<label for="bidAmount">Bid Amount:</label>
								<input type="number" placeholder="$" v-model="bidamount" />
							</div>
							<div class="formitem">
								<label for="email">Email:</label>
								<input type="email" placeholder="Email" v-model="email" />
							</div>
							<div class="formtext">
								<label for="description"
									>Describe how you will appoach the task:</label
								>
								<textarea
									name=""
									id=""
									cols="30"
									rows="5"
									v-model="approachdesc"
								></textarea>
							</div>

							<button class="submitbidbtn" type="submit">
								Bid on the task
							</button>
						</form>
					</div>
					<div class="whybid">
						<h3>Benefits of bidding on SKILLSCONNECT</h3>
						<ul>
							<li>Guaranteed jobs</li>
							<li>Connected to jobs relevant to your skills</li>
							<li>Deserved payments commensurate to your output.</li>
							<li>Free to register and bid for jobs</li>
							<li>Prompt payment</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted } from "vue";
import { useJobsStore } from "../stores/JobsStore";

export default {
	name: "Job",
	props: ["id"],

	data: () => ({
		bidamount: "",
		email: "",
		approachdesc: "",
	}),

	setup() {
		const jobsStore = useJobsStore();

		onMounted(async () => {
			await jobsStore.getOneJob();
		});

		return { jobsStore, onMounted };
	},
	computed: {
		handleSubmit: function () {
			alert("Your bid has been submitted successfully");

			(this.bidamount = ""), (this.email = ""), (this.approachdesc = "");
		},
	},
};

// const props = ["id"];

// const jobsStore = useJobsStore();

// onMounted(async () => {
// 	await jobsStore.getOneJob(props.id);
// });
</script>

<style scoped>
.singlediv {
	margin-bottom: 500px;
}
.imgdiv {
	position: relative;
}
.imgdiv img {
	height: 250px;
	width: 100%;
}
.job {
	display: flex;
	flex-direction: column;
	width: 75%;
	padding: 15px;
	margin: 20px 12.5%;
	position: absolute;
	top: 190px;
	background-color: whitesmoke;
	border-radius: 5px;
}
.jobtop {
	display: flex;
}

.jobbottom {
	display: flex;
	padding: 10px 15px;
	margin: 20px 0;
	justify-content: space-between;
}
.jobadv {
	display: flex;
	flex: 4;
	flex-direction: column;
	gap: 15px;
	padding: 15px;
}
.price {
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: start;
	padding-top: 20px;
	gap: 10px;
}
.jobtitle {
	display: flex;
	align-items: center;
	gap: 30px;
}
.skills a {
	text-decoration: none;
	margin-right: 10px;
	color: blue;
}
.bidbtn {
	padding: 5px;
	width: 50px;
	background-color: brown;
	font-size: 16px;
	font-weight: 900;
	text-align: center;
	border: none;
	border-radius: 5px;
	text-decoration: none;
	color: white;
}
.bidbtn:hover {
	font-size: 20px;
	color: white;
	background-color: aquamarine;
}
.formitem {
	display: flex;
	margin: 10px 0;
	justify-content: space-between;
	gap: 5px;
}

.formtext {
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.whybid ul {
	list-style-type: circle;
	margin-top: 10px;
}

.whybid li {
	margin-bottom: 10px;
}
.whybid h3 {
	text-decoration: underline;
}

.submitbidbtn {
	padding: 5px 10px;
	color: white;
	background-color: brown;
	border: none;
	border-radius: 5px;
	font-weight: bold;
	font-size: 16px;
	margin-left: 70px;
	margin-top: 20px;
}
/* RESPONSIVENESS */
@media (max-width: 768px) {
}
@media (max-width: 576px) {
	.singlediv {
		margin-bottom: 875px;
	}
	.jobtop {
		display: flex;
		flex-direction: column;
	}
	.jobtitle {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 10px;
	}
	.price {
		padding-left: 18px;
	}
	.jobbottom {
		display: flex;
		flex-direction: column-reverse;
		gap: 20px;
	}
	.submitbidbtn {
		margin-left: 45px;
	}
}
</style>

<!-- <script>
import { onMounted } from "vue";
import { useJobsStore } from "../stores/JobsStore";

export default {
	name: "Job",
	props: ["job"],

	setup() {
		const jobsStore = useJobsStore();

		onMounted(() => {
			jobsStore.getOneJob(job.id);
		});

		return { jobsStore, job };
	},
};
</script> -->
