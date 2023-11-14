<template>
	<div class="body">
		<div class="top">
			<div>
				<form action="" class="search">
					<i class="material-icons icon">search</i>

					<input type="text" v-model="search" placeholder="Search keyword" />
					<button @click.prevent="">Search</button>
				</form>
				<div v-show="search">
					<div class="job" v-for="job in filteredJobs" key="job.id">
						<div class="jobadv">
							<div class="jobtitle">
								<h3>{{ job.jobTitle }}</h3>
								<p>6 days left</p>
							</div>
							<div class="jobdesc">
								<p>{{ job.jobDescription }}</p>
							</div>
							<div class="skills">
								<a href="/">{{ job.id }}</a>
							</div>
						</div>
						<div class="price">
							<h4>$40 to $50 / hr</h4>
							<p>{{ jobsStore.bids }} bids</p>
							<a
								href="/singlejob"
								class="bidbtn"
								@click="jobsStore.bidIncrement(job.id)"
								>Bid</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom">
			<div class="bodyLeft">
				<div class="searches">
					<p>Your most recent searches</p>
				</div>
				<hr />
				<div class="filterby">
					<p>Filter by:</p>
				</div>

				<div class="type">
					<div><h6>Type</h6></div>
					<div><input type="checkbox" /><label for="">Local jobs</label></div>
					<div>
						<input type="checkbox" /><label for="">Featured Jobs</label>
					</div>
					<div>
						<input type="checkbox" /><label for="">Full time jobs</label>
					</div>
					<div>
						<input type="checkbox" /><label for="">Part-time jobs</label>
					</div>
				</div>
				<hr />
				<div class="skills">
					<div><h6>Skills</h6></div>
					<div><input type="checkbox" /><label for="">HTML</label></div>
					<div><input type="checkbox" /><label for="">CSS</label></div>
					<div><input type="checkbox" /><label for="">JAVASCRIPT</label></div>
					<div><input type="checkbox" /><label for="">REACTJS</label></div>
					<div><input type="checkbox" /><label for="">VUEJS</label></div>
					<div><input type="checkbox" /><label for="">NODEJS</label></div>
				</div>
				<hr />
				<div class="languages">
					<div><h6>Languages</h6></div>
					<div><input type="checkbox" /><label for="">ENGLISH</label></div>
					<div><input type="checkbox" /><label for="">SPANISH</label></div>
					<div><input type="checkbox" /><label for="">GERMAN</label></div>
					<div><input type="checkbox" /><label for="">FRENCH</label></div>
					<div><input type="checkbox" /><label for="">SWAHILI</label></div>
					<div><input type="checkbox" /><label for="">ITALIAN</label></div>
				</div>
				<hr />
				<div class="state">
					<div><h6>State of Job</h6></div>
					<div>
						<input type="checkbox" /><label for="">ONLY OPEN JOBS</label>
					</div>
					<div><input type="checkbox" /><label for="">ALL JOBS</label></div>
				</div>
				<hr />
			</div>
			<div class="bodyRight">
				<!-- loading  -->
				<div class="loading" v-if="loading">Loading jobs...</div>
				<div class="items">
					<p>There are {{ totalCount }} jobs available currently.</p>
					<div class="job" v-for="job in jobs" key="job.id">
						<div class="jobadv">
							<div class="jobtitle">
								<h3>{{ job.jobTitle }}</h3>
								<p>{{ jobsStore.daysLeft }} days left</p>
							</div>
							<div class="jobdesc">
								<p>{{ job.jobDescription }}</p>
							</div>
							<div class="skills">
								<a href="/">{{ job.skills }}</a>
							</div>
						</div>
						<div class="price">
							<h4>$40 to $50 / hr</h4>
							<p>{{ bids }} bids</p>
							<a
								href="/singlejob"
								class="bidbtn"
								@click="jobsStore.bidIncrement(job.id)"
								>Bid</a
							>
							<button @click="jobsStore.deleteJob(job.id)">delete</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useJobsStore } from "../stores/JobsStore";

export default {
	name: "Body",
	props: ["job"],

	data: () => ({
		search: "",
	}),

	setup() {
		const jobsStore = useJobsStore();

		const { jobs, loading, totalCount, totalFilteredJobs, bids } =
			storeToRefs(jobsStore);

		//fetch jobs
		jobsStore.getJobs();

		return { jobsStore, loading, totalCount, totalFilteredJobs, jobs, bids };
	},
	computed: {
		filteredJobs: function () {
			return this.jobs.filter((job) => {
				return job.jobTitle.toLowerCase().includes(this.search.toLowerCase());
			});
		},
	},
};
</script>

<style scoped>
.body {
	display: flex;
	flex-direction: column;
}

.top {
	padding: 50px;
}
.bottom {
	display: flex;
	gap: 20px;
	/* align-items: center;  */
	padding: 10px 50px;
}
.bodyLeft {
	display: flex;
	flex-direction: column;
	gap: 10px;
	flex: 1;
	z-index: 1000;
	background-color: whitesmoke;
	border-radius: 5px;
	height: 100%;
	padding: 20px;
}

.bodyLeft h6 {
	margin-bottom: 5px;
	font-size: 16px;
}
.bodyRight {
	display: flex;
	flex: 4;
	flex-direction: column;
	z-index: 1000;
	border-radius: 5px;
}
.job {
	display: flex;
	position: relative;

	flex: 4;
	/* flex-direction: column; */
	gap: 15px;
	padding: 15px;
	margin-bottom: 10px;
	background-color: whitesmoke;
	border-radius: 5px;
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

.loading {
	width: 100%;
	border: 1px solid aqua;
	background: aquamarine;
	color: #3a3a3a;
	padding: 5px 0;
	text-align: center;
	margin: 30px auto;
}
.search {
	height: 60px;
	/* width: 95%; */
	margin: 5px;
	padding: 10px;
	text-align: center;
	background-color: whitesmoke;
	z-index: 1000;
	border: none;

	display: flex;
	align-items: center;
}

.search input {
	flex: 6;
	border: none;
	background-color: whitesmoke;
	outline: none;
	font-size: 20px;
	margin: 5px;
}
.search button {
	flex: 1;
	border: none;
	background-color: aquamarine;
	padding: 5px;
	font-size: 20px;
	border-radius: 5px;
}

/* RESPONSIVENESS */
@media (max-width: 768px) {
	.bodyLeft {
		display: none;
	}
}
@media (max-width: 576px) {
	.icon {
		display: none;
	}
	.search {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.search input {
		border: 1px solid black;
		border-radius: 5px;
	}
	.search button {
		align-self: flex-end;
	}

	.job {
		display: flex;
		flex-direction: column;
	}
	.price {
		display: flex;
		padding-left: 18px;
	}
}
</style>
