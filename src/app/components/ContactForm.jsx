"use client";
import { Button, CircularProgress, TextField } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import SendIcon from "@mui/icons-material/Send";
import { createRef, useState } from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import greenCheckmark from "../../../public/green-checkmark.png";
import axios from "axios";

const semiboldRoboto = Roboto({
	subsets: ["latin"],
	weight: "700"
});

export default function ContactForm() {
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [messageSuccess, setMessageSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const recaptchaRef = createRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		// Execute the reCAPTCHA when the form is submitted
		recaptchaRef.current.execute();
		setIsLoading(true);
	};

	const onReCAPTCHAChange = async (captchaCode) => {
		if (!captchaCode) {
			setError("Unprocessable content.");
			setTimeout(() => {
				setError("");
			}, 2500);
			recaptchaRef.current.reset();
			setIsLoading(false);
			return;
		} else {
			const verify = await axios.post(
				"https://www.google.com/recaptcha/api/siteverify",
				{
					params: {
						secret: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET,
						response: captchaCode
					}
				}
			);
			if (!verify.data.success) {
				setError("Unprocessable content.");
				setTimeout(() => {
					setError("");
				}, 2500);
				recaptchaRef.current.reset();
				setIsLoading(false);
				return;
			}
		}
		try {
            console.log('top of try block')
			const res = await axios.post("/api/message", {
				email: email,
				subject: subject || "null",
				message: message
			});
            console.log('my API RES: ', res)
			if (res.data.message == "accepted") {
				setEmail("");
				setSubject("");
				setMessage("");
				setIsLoading(false);
				setMessageSuccess(true);
				setTimeout(() => {
					setMessageSuccess(false);
				}, 5000);
				recaptchaRef.current.reset();
			} else {
				setError("Error sending message.");
				setIsLoading(false);
				setTimeout(() => {
					setError("");
				}, 2500);
				recaptchaRef.current.reset();
			}
		} catch (e) {
			setError("Error sending message.");
			setIsLoading(false);
			setTimeout(() => {
				setError("");
			}, 2500);
			recaptchaRef.current.reset();
		}
	};
	if (messageSuccess) {
		return (
			<main className="single-page flex justify-center items-center">
				<div className="flex flex-col items-center mb-20">
					<Image
						src={greenCheckmark}
						alt="Success Logo"
						className="rounded-full h-20 w-20 mb-10"
					/>
					<h3
						className={`${semiboldRoboto.className} text-center text-2xl laptop:text-4xl text-white`}>
						Your message has been sent
					</h3>
				</div>
			</main>
		);
	}
	if (isLoading) {
		return (
			<main className="single-page flex items-center justify-center">
				<CircularProgress size="5rem" color="primary" />
			</main>
		);
	}
	if (error) {
		return (
			<main className="single-page flex items-center justify-center">
				<h3 className="text-2xl">{error}</h3>
			</main>
		);
	}
	return (
		<main className="single-page flex items-center justify-center">
			<form
				onSubmit={(e) => handleSubmit(e)}
				className="w-[60vw] flex flex-col">
				<TextField
					id="outlined-basic"
					label="Your Email"
					required
					variant="filled"
					className="bg-gray-300"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					sx={{ marginBottom: "2rem" }}
				/>
				<TextField
					sx={{ marginBottom: "2rem" }}
					id="outlined-basic"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					label="Subject"
					className="bg-gray-300"
					variant="filled"
				/>
				<TextField
					id="outlined-multiline-static"
					label="Message"
					variant="filled"
					required
					value={message}
					className="bg-gray-300"
					onChange={(e) => setMessage(e.target.value)}
					multiline
					rows={7}
					sx={{ marginBottom: "2rem" }}
				/>
				<ReCAPTCHA
					ref={recaptchaRef}
					size="invisible"
					sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
					onChange={onReCAPTCHAChange}
				/>
				<Button
					type="submit"
					variant="contained"
					className="bg-blue-600 hover:bg-green-700 duration-300"
					endIcon={isLoading ? null : <SendIcon />}>
					{isLoading ? <CircularProgress color="info" /> : "Send"}
				</Button>
			</form>
		</main>
	);
}
