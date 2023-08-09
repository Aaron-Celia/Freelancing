"use client";
import { useRef } from "react";
import { PopupButton } from "react-calendly";

export default function MeetingPage() {
	const rootRef = useRef(null);
	return (
		<main
			ref={rootRef}
			className="meeting-page flex flex-col justify-around items-center overflow-auto h-screen w-screen">
			<div className="h-[80vh] w-screen flex flex-col laptop:flex-row laptop:justify-around items-center justify-around mb-40">
				<div className="xs:mt-5 phone:mt-0 h-40 w-3/4 laptop:w-1/4 laptop:h-1/2 border rounded-xl flex flex-col justify-around items-center bg-slate-800 bg-opacity-20 text-white text-center py-2 px-2">
					<h2 className="text-blue-200 laptop:text-3xl text-2xl">
						Initial Meeting
					</h2>
					<h3 className="text-white text-center phone:text-lg laptop:text-2xl">
						An Initial 60-minute meeting for me to learn about your vision.
					</h3>
					<PopupButton
						url="https://calendly.com/d/4kf-fdb-mzw/initial-meeting"
						rootElement={document.getElementById("modal-root")}
						className="w-3/4 bg-blue-600 h-10 rounded-xl"
						text="Schedule"
					/>
				</div>
				<div className="h-40 w-3/4 laptop:w-1/4 laptop:h-1/2 border rounded-xl flex flex-col justify-around bg-slate-800 bg-opacity-20 items-center text-white text-center py-2 px-2">
					<h2 className="text-blue-200 laptop:text-3xl text-2xl">
						Progress Check-in
					</h2>
					<h3 className="text-white text-center phone:text-lg laptop:text-2xl">
						A 30 minute check-in meeting for you to view progress.
					</h3>
					<PopupButton
						url="https://calendly.com/d/25c-f35-w37/progress-check-in"
						rootElement={document.getElementById("modal-root")}
						className="w-3/4 bg-blue-600 h-10 rounded-xl"
						text="Schedule"
					/>
				</div>
				<div className="h-40 w-3/4 laptop:w-1/4 laptop:h-1/2 border rounded-xl flex flex-col bg-slate-800 bg-opacity-20 justify-around items-center text-white text-center py-2 px-2">
					<h2 className="text-blue-200 laptop:text-3xl text-2xl">
						Anything Else
					</h2>
					<h3 className="text-white text-center phone:text-lg laptop:text-2xl">
						A 30-minute meeting to discuss anything.
					</h3>
					<PopupButton
						url="https://calendly.com/aaron-r-celia/30min"
						className="w-3/4 bg-blue-600 h-10 rounded-xl"
						rootElement={document.getElementById("modal-root")}
						text="Schedule"
					/>
				</div>
			</div>
		</main>
	);
}
