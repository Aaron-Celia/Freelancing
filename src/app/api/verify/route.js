import { config } from 'dotenv'
config();

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
            params: {
                secret: process.env.RECAPTCHA_SECRET,
                response: captchaCode
            }
        })
    const googleResponseJson = await googleResponse.json()
    if (!googleResponseJson?.success) {
        return {
            status: 200,
            body: {
                message: null,
                verified: false
            }
        }
    }
    return {
        status: 200,
        body: {
            message: "success",
            verified: true
        }
    }
}