import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import AboutView from "../views/AboutView.vue";
import CreateJobView from "../views/CreateJobView.vue";
import SingleJobView from "../views/SingleJobView.vue";
import SingleFreelancerView from "../views/SingleFreelancerView.vue";
import FreelancersView from "../views/FreelancersView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/login",
			name: "login",
			component: LoginView,
		},
		{
			path: "/signup",
			name: "signup",
			component: SignupView,
		},
		{
			path: "/about",
			name: "about",
			component: AboutView,
		},
		{
			path: "/createjob",
			name: "createjob",
			component: CreateJobView,
		},
		{
			path: "/singlejob",
			name: "singlejob",
			component: SingleJobView,
		},
		{
			path: "/singlefreelancer",
			name: "singlefreelancer",
			component: SingleFreelancerView,
		},
		{
			path: "/freelancers",
			name: "freelancers",
			component: FreelancersView,
		},
	],
});

export default router;
