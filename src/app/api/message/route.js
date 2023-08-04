import { config } from 'dotenv';
config();
const messSid = process.env.MESSAGING_SID;
const twillioNumber = process.env.TWILLIO_NUMBER
const client = require("twilio")(
	process.env.ACCOUNT_SID,
	process.env.AUTH_TOKEN
);
const recipient = process.env.RECIPIENT;
import { NextResponse } from "next/server";
import axios from 'axios'


export async function POST (request, response) {
	try {
		console.log('backend function ran')
        const body = await request.json();
        const { email, subject, message, captchaCode } = body;
		const messageResponse = await client.messages
			.create({
				body: `You recieved a message from someone! \nEmail: ${email} \nSubject: ${subject} \nMessage:\n ${message}`,
				from: twillioNumber,
				messagingServiceSid: messSid,
				to: recipient
			})
			.then((message) => {
                return message
            });
        // return NextResponse.json({ message: messageResponse.status})
		if(messageResponse.status === 'accepted'){
			const googleResponse = await axios.post(
				"https://www.google.com/recaptcha/api/siteverify",
				{
					params: {
						secret: process.env.RECAPTCHA_SECRET,
						response: captchaCode
					}
				}
			);
			if(!googleResponse.data.success){
				return NextResponse.json({ verified: false });
			} else {
				return NextResponse.json({ verified: true });
			}
		}
	} catch (err) {
        return NextResponse.json({ message: 'failed', error: err.message })
    }
};
