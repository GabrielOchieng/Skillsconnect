<template>
	<div class="aboutBody">
		<div class="top">
			<h3>
				Raise the levels of performance of your organization by acquiring top
				skills globally
			</h3>
			<p>
				Being part of SKILLSCONNECT means you get access to the top-most skills
				globally capable of taking your organization to the next level.
			</p>
		</div>
		<div class="bottom">
			<div class="item">
				<i class="material-icons">hub</i>
				<h6>Guaranteed Connection to the best skills globally</h6>
				<p>
					At SKILLSCONNECT your work is guaranteed being worked on by the best
					talents for those particular tasks with attention given to your
					specifications.
				</p>
			</div>
			<div class="item">
				<i class="material-icons">gavel</i>
				<h6>Say goodbye to poorly performed tasks</h6>
				<p>
					Our drive at SKILLSCONNECT is to ensure that the tasks of
					organizations or individuals who choose to work with us are done to
					the optimal levels.
				</p>
			</div>
			<div class="item">
				<i class="material-icons">support</i>
				<h6>Exclusive support from our dedicated team</h6>
				<p>
					Get exclusive support from our team who ensure that your assigned
					tasks meet all the requirements you specify in the job description.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style scoped>
.aboutBody {
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin: 100px 50px;
}
.top {
	margin: 30px 0;
	font-size: 20px;
}

.bottom {
	display: flex;
	font-size: 18px;
	align-items: center;
	justify-content: space-between;
}

.item {
	display: flex;
	flex-direction: column;
	width: 200px;
	align-items: start;
	gap: 20px;
	justify-content: start;
}

.item h6 {
	font-size: 18px;
}

/* RESPONSIVENESS */
@media (max-width: 768px) {
	.aboutBody {
		margin: 20px 0;
		padding: 0 10px;
	}
}
@media (max-width: 576px) {
	.aboutBody {
		margin: 20px 0;
		padding: 0 10px;
	}
	.top {
		font-size: 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin: 10px 0;
	}

	.bottom {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.item {
		display: flex;
		align-items: start;
		width: 100%;
		gap: 5px;
	}
}
</style>
