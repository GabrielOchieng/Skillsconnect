import { defineStore } from "pinia";

export const useJobsStore = defineStore("jobsStore", {
	state: () => ({
		jobs: [],
		loading: false,
		filteredJobs: [],
		singleJob: {},
		bids: 0,
		daysLeft: 5,
	}),
	persist: true,
	getters: {
		totalCount: (state) => {
			return state.jobs.length;
		},
	},
	actions: {
		async getJobs() {
			this.loading = true;

			const res = await fetch("http://localhost:8000/jobs");
			const data = await res.json();

			this.jobs = data;
			this.loading = false;
		},
		async getOneJob(id) {
			this.loading = true;
			const res = await fetch("http://localhost:8000/jobs/50");

			const singleData = await res.json();

			this.singleJob = singleData;
			this.loading = false;
		},

		async addTask(job) {
			this.jobs.push(job);

			const res = await fetch("http://localhost:8000/jobs", {
				method: "POST",
				body: JSON.stringify(job),
				headers: { "Content-Type": "application/json" },
			});

			if (res.error) {
				console.log(res.error);
			}
		},
		async deleteJob(id) {
			this.jobs = this.jobs.filter((j) => {
				return j.id !== id;
			});
			const res = await fetch("http://localhost:8000/jobs/" + id, {
				method: "DELETE",
			});

			if (res.error) {
				console.log(res.error);
			}
		},
		async bidIncrement(id) {
			const res = await fetch("http://localhost:8000/jobs/" + id);
			const data = await res.json();

			this.job = data;

			this.job.bid = this.bids++;
		},
	},
});
