require("dotenv").config();
// syncronous common js syntax purpousfully used here
const client = require("twilio")(
	process.env.ACCOUNT_SID,
	process.env.AUTH_TOKEN
);
const recipient = process.env.RECIPIENT;
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request, response) {
	try {
		console.log("backend function ran");
		const body = await request.json();
		const { email, subject, message, captchaCode } = body;
		const googleResponse = await axios.post(
			"https://www.google.com/recaptcha/api/siteverify",
			{
				params: {
					secret: process.env.RECAPTCHA_SECRET,
					response: captchaCode
				}
			}
		);
		if (!googleResponse.data.success) {
			return NextResponse.json({ message: null, verified: false });
		} else {
			const messageResponse = await client.messages
				.create({
					body: `You recieved a message from someone! \nEmail: ${email} \nSubject: ${subject} \nMessage:\n ${message}`,
					from: process.env.TWILLIO_NUMBER,
					messagingServiceSid: process.env.MESSAGING_SID,
					to: recipient
				})
				.then((message) => {
					return message;
				});
			if (messageResponse) {
				return NextResponse.json({ message: messageResponse?.status });
			}
		}
	} catch (err) {
		return NextResponse.json({ message: "failed", error: err.message });
	}
}
