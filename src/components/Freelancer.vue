<template>
	<div>
		<div class="items">
			<div class="jobadv">
				<div class="profileimg">
					<img src="../assets/freelancep.jpg" alt="" />
				</div>
				<div class="jobtitle">
					<h4>{{ freelancersStore.singleFreelancer.username }}</h4>
					<h3>{{ freelancersStore.singleFreelancer.role }}</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
						neque accusantium sint! Ab cupiditate totam aliquam rem doloribus
						beatae! Porro blanditiis similique deleniti veritatis saepe
						temporibus, impedit neque tenetur culpa!
					</p>

					<p>{{ freelancersStore.singleFreelancer.email }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useFreelancersStore } from "../stores/FreelancersStore";
import { onMounted } from "vue";

export default {
	name: "Freelancer",
	props: ["id"],

	// components: { StarRating },
	// props: ["StarRating"],

	// data: () => ({
	// 	rating: 5,
	// 	ratingValue: 0,
	// }),

	setup() {
		// const props = defineProps({
		// 	id: { type: String, required: true },
		// });
		const freelancersStore = useFreelancersStore();

		//get one freelancer
		onMounted(async () => {
			await freelancersStore.getOneFreelancer(
				freelancersStore.singleFreelancer.id
			);
		});

		return {
			freelancersStore,
			onMounted,
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
.jobadv {
	display: flex;
	flex-direction: column;
	margin: 10px auto;
	width: 80%;
	background-color: aquamarine;
	border-radius: 5px;
	height: 100%;
	margin-bottom: 40px;
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
	width: 200px;
	height: 200px;
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
