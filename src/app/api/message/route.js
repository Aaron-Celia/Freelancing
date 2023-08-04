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


export async function POST (request, response) {
	try {
        const body = await request.json();
        const { email, subject, message } = body;
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
        return NextResponse.json({ message: messageResponse.status})
	} catch (err) {
        return NextResponse.json({ message: 'failed', error: err.message })
    }
};
