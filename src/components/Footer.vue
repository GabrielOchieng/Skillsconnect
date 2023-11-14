<template>
	<div class="footer">
		<div class="upperfooter">
			<div class="freelance">
				<div class="titles">
					<h6>Topskills</h6>
				</div>
				<div class="items">
					<ul>
						<li>Skills</li>
						<li>Categories</li>
						<li>Projects</li>
						<li>Specialization area</li>
					</ul>
				</div>
			</div>
			<div class="about">
				<div class="titles"><h6>About</h6></div>
				<div class="items">
					<ul>
						<li>About us</li>
						<li>How it works</li>
						<li>Team</li>
						<li>Careers</li>
					</ul>
				</div>
			</div>
			<div class="terms">
				<div class="titles"><h6>Terms</h6></div>
				<div class="items">
					<ul>
						<li>Privacy Policy</li>
						<li>Terms and Conditions</li>
						<li>Copyright Policy</li>
						<li>Code of conduct</li>
						<li>Fees and Payment</li>
					</ul>
				</div>
			</div>
			<div class="socials">
				<div class="titles"><h6>Socials</h6></div>
				<div class="items">
					<ul>
						<li>LinkedIn</li>
						<li>Twitter</li>
						<li>Facebook</li>
						<li>Playstore</li>
					</ul>
				</div>
			</div>
		</div>
		<hr />
		<div class="lowerfooter">
			<p>
				SKILLSCONNECT is a registered Trademark of WebsiteCentral Technology
				LTD.
			</p>
			<p>Copyright &copy 2023 WebsiteCentral Technology LTD.</p>
		</div>
	</div>
</template>

<script setup></script>

<style>
.footer {
	background-color: black;
	color: white;
	display: flex;
	flex-direction: column;
}

.upperfooter {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
}
.titles {
	margin-bottom: 10px;
	font-size: 25px;
	text-decoration: underline;
}

.items li {
	list-style: none;
	line-height: 25px;
}
hr {
	width: 90%;
	margin: auto;
}
.lowerfooter {
	padding: 20px;
	text-align: center;
}

/* RESPONSIVENESS */

@media (max-width: 576px) {
	.upperfooter {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 20px;
	}
	.lowerfooter {
		font-size: 14px;
	}
}
</style>
