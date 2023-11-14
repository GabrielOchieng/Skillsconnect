<template>
	<div class="aboutBody">
		<div class="top">
			<h3>How do we connect you to the Best Skills?</h3>
			<p>
				We recruit the best skills globally and connect them with the tasks you
				desire get done.
			</p>
		</div>
		<div class="bottom">
			<div class="item">
				<i class="material-icons">grade</i>
				<h6>Best skills globally</h6>
				<p>We connect your task to the best skills globally</p>
			</div>
			<div class="item">
				<i class="material-icons">insights</i>
				<h6>Exceptional performance</h6>
				<p>We ensure exceptional performance in your assgned tasks</p>
			</div>
			<div class="item">
				<i class="material-icons">done</i>
				<h6>Proper recruitment</h6>
				<p>
					The individuals assigned to do your tasks are properly vetted and
					tested to see if they meet the requirements
				</p>
			</div>
			<div class="item">
				<i class="material-icons">approval</i>
				<h6>Perfect delivery</h6>
				<p>We deliver perfect well tested productive tasks</p>
			</div>
			<div class="item">
				<i class="material-icons">timeline</i>
				<h6>Excellent Record</h6>
				<p>
					We have an excellent track record of delivering well performed tasks.
				</p>
			</div>
			<div class="item">
				<i class="material-icons">redeem</i>
				<h6>Certified Team</h6>
				<p>
					We have a certified team with specialised skillsets who endeavor to
					perform tasks to utmost perfection.
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
	padding: 100px 50px;
	background-color: aquamarine;
	width: 100%;
}
.top {
	text-align: center;
	margin: 30px 0;
	font-size: 20px;
}

.bottom {
	display: flex;
	flex-wrap: wrap;
	font-size: 18px;
	align-items: center;
	justify-content: space-between;
}

.item {
	display: flex;
	flex-direction: column;
	width: 30%;
	height: 200px;
	align-items: start;
	gap: 20px;
	justify-content: start;
	border: 1px solid brown;
	border-radius: 10px;
	margin: 10px;
	z-index: 10;
	align-items: center;
	padding: 10px;
}

.item h6 {
	font-size: 18px;
}

/* RESPONSIVENESS */
@media (max-width: 776px) {
	.aboutBody {
		margin: 0;
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
		display: grid;
		font-size: 16px;
		grid-template-columns: 1fr 1fr;
		justify-items: center;
		gap: 20px;
		padding-bottom: 20px;
	}
	.item {
		display: flex;
		align-items: center;
		height: 100%;
		width: 100%;
	}
}
@media (max-width: 576px) {
	.aboutBody {
		margin: 0;
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
		font-size: 16px;
		flex-direction: column;
		gap: 5px;
	}
	.item {
		display: flex;
		align-items: center;
		width: 80%;
		margin: 10px;
		gap: 5px;
		height: 100%;
	}
}
</style>
