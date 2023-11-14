<template>
	<div></div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
	name: "Email",

	data() {
		return {
			bidamount: "",
			email: "",
			approachdesc: "",
		};
	},
	methods: {
		sendEmail(e) {
			try {
				emailjs.sendForm(
					"YOUR_SERVICE_ID",
					"YOUR_TEMPLATE_ID",
					e.target,
					"YOUR_USER_ID",
					{
						bidamount: this.bidamount,
						email: this.email,
						approachdesc: this.approachdesc,
					}
				);
			} catch (error) {
				console.log({ error });
			}
			// Reset form field
			this.bidamount = "";
			this.email = "";
			this.approachdesc = "";
		},
	},
};
</script>

<style lang="scss" scoped></style>
