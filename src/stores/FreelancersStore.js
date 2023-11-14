import { defineStore } from "pinia";

export const useFreelancersStore = defineStore("freelancersStore", {
	state: () => ({
		freelancers: [],
		loading: false,
		singleFreelancer: {},
		bids: 0,
	}),

	getters: {
		totalCount: (state) => {
			return state.freelancers.length;
		},
	},
	actions: {
		async getFreelancers() {
			this.loading = true;

			const res = await fetch("http://localhost:3000/freelancers");
			const data = await res.json();

			this.freelancers = data;
			this.loading = false;
		},
		async getOneFreelancer(id) {
			this.loading = true;
			const res = await fetch("http://localhost:3000/freelancers/" + id);

			const singleData = await res.json();

			this.singleFreelancer = singleData;
			this.loading = false;
		},

		async addFreelancer(person) {
			this.freelancers.push(person);

			const res = await fetch("http://localhost:3000/freelancers", {
				method: "POST",
				body: JSON.stringify(person),
				headers: { "Content-Type": "application/json" },
			});

			if (res.error) {
				console.log(res.error);
			}
		},
		async deleteUser(id) {
			this.freelancers = this.freelancers.filter((j) => {
				return j.id !== id;
			});
			const res = await fetch("http://localhost:3000/freelancers/" + id, {
				method: "DELETE",
			});

			if (res.error) {
				console.log(res.error);
			}
		},
		bidIncrement(id) {
			const res = fetch("http://localhost:3000/freelancers/" + id, {
				method: "PATCH",
				body: JSON.stringify(freelancer),
				headers: { "Content-Type": "application/json" },
			});

			if (res.error) {
				console.log(res.error);
			}
			this.freelancer.bid = this.bids++;
		},
	},
});
