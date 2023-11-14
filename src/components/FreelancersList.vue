<template>
	<div class="body">
		<div class="top">
			<div>
				<form action="" class="search">
					<i class="material-icons icon">search</i>

					<input
						type="text"
						v-model="searchitem"
						placeholder="Search keyword"
					/>
					<button @click.prevent="">Search</button>
				</form>
				<div v-show="searchitem">
					<div class="items">
						<div
							class="freelancer"
							v-for="person in filteredFreelancers"
							key="freelancer.id"
						>
							<div class="jobadv">
								<div class="profileimg">
									<img src="../assets/freelancep.jpg" alt="" />
								</div>
								<div class="jobtitle">
									<h3>{{ person.role }}</h3>
									<p>{{ person.username }}</p>
									<p>{{ person.email }}</p>
								</div>
							</div>
							<div class="view">
								<a href="/singlefreelancer">View Profile</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bodyRight">
			<!-- loading  -->
			<div class="loading" v-if="loading">Loading freelancers...</div>
			<div class="para">
				<p>There are {{ totalCount }} freelancers available currently.</p>
			</div>
			<div class="items">
				<div
					class="freelancer"
					v-for="freelancer in freelancers"
					key="freelancer.id"
				>
					<div class="jobadv">
						<div class="profileimg">
							<img src="../assets/freelancep.jpg" alt="" />
						</div>
						<div class="jobtitle">
							<h3>{{ freelancer.role }}</h3>
							<p>{{ freelancer.username }}</p>
							<p>{{ freelancer.email }}</p>
						</div>
					</div>
					<div class="view">
						<a href="/singlefreelancer">View Profile</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { storeToRefs } from "pinia";

import { useFreelancersStore } from "../stores/FreelancersStore";

export default {
	name: "FreelancersList",
	props: ["freelancer"],

	data: () => ({
		searchitem: "",
	}),

	setup() {
		const freelancersStore = useFreelancersStore();

		const { freelancers, loading, totalCount, totalFilteredFreelancers, bids } =
			storeToRefs(freelancersStore);

		//fetch freelancers
		freelancersStore.getFreelancers();

		return {
			freelancersStore,
			loading,
			totalCount,
			totalFilteredFreelancers,
			freelancers,
			bids,
		};
	},
	computed: {
		filteredFreelancers: function () {
			return this.freelancers.filter((person) => {
				return person.role
					.toLowerCase()
					.includes(this.searchitem.toLowerCase());
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
.para {
	margin-left: 80px;
}
.items {
	display: flex;
	flex-wrap: wrap;
	margin: 10px auto;
}

a {
	background-color: aquamarine;
	text-decoration: none;
	padding: 5px 100px;
	color: white;
	width: 100%;
	margin-left: 13px;
	border: none;
	font-weight: bold;
}

.freelancer {
	gap: 15px;
	padding: 15px;
	margin: 10px;
	background-color: whitesmoke;
	border-radius: 5px;
	width: 350px;
}

.jobadv {
	display: flex;
	gap: 15px;
	padding: 15px;
}
.jobtitle {
	display: flex;
	flex-direction: column;
	gap: 5px;
}
.profileimg img {
	width: 100px;
	height: 100px;
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
	.items {
		margin: 0;
		display: block;
		width: 100%;
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

	.freelancer {
		display: block;
		flex-direction: column;
		margin-right: 0;
	}
}
</style>
