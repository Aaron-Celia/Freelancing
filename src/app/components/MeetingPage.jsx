'use client';
import { useRef } from "react";
import { PopupButton } from "react-calendly";

export default function MeetingPage() {
    const rootRef = useRef(null);
	return (
		<main
			ref={rootRef}
			className="meeting-page flex flex-col justify-around items-center overflow-auto">
			<h3 className="text-3xl text-white text-center laptop:mt-40 mt-40">
				Schedule a Video Meeting
			</h3>
			<div className="flex flex-col laptop:flex-row mb-40 justify-around items-center laptop:w-screen w-[90vw] px-10 mt-40 h-[80vh]">
				<PopupButton
					url="https://calendly.com/aaron-r-celia/30min"
					/*
					 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
					 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
					 */
					className="text-white w-full text-center hover:bg-green-700 duration-150 text-xl px-5 py-5 rounded-xl bg-blue-600 my-5 mx-5"
					rootElement={document.getElementById("bg")}
					text="30 Minute Meeting"
				/>
				<PopupButton
					url="https://calendly.com/d/4kf-fdb-mzw/initial-meeting"
					rootElement={document.getElementById("bg")}
					className="text-white w-full text-center hover:bg-green-700 duration-150 text-xl px-5 py-5 rounded-xl bg-blue-600 my-5 mx-5"
					text="Initial Meeting"
				/>
				<PopupButton
					url="https://calendly.com/d/25c-f35-w37/progress-check-in"
					rootElement={document.getElementById("bg")}
					className="text-white w-full text-center hover:bg-green-700 duration-150 text-xl px-5 py-5 rounded-xl bg-blue-600 my-5 phone:mb-[7.5rem] laptop:mb-5 mx-5"
					text="Progress Check in"
				/>
			</div>
		</main>
	);
}
