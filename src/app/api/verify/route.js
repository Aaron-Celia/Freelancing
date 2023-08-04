require('dotenv').config()
import { NextResponse } from 'next/server';

export async function POST(request, response) {
    const body = await request.json()
    const captchaCode = body.captchaCode
    const googleResponse = await fetch(
			"https://www.google.com/recaptcha/api/siteverify",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: `secret=${encodeURIComponent(
					process.env.RECAPTCHA_SECRET
				)}&response=${encodeURIComponent(captchaCode)}`
			}
		);
    const googleResponseJson = await googleResponse.json()
    if (!googleResponseJson?.success) {
        return NextResponse.json({ message: "failed", data: googleResponseJson, success: false, error: "Captcha failed" })
    }
    return NextResponse.json({ message: "verified", success: true })
}