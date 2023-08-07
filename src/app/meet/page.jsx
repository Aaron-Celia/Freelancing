'use client';
import { InlineWidget, PopupButton } from "react-calendly";


export default function MeetingPage() {
	return (
		<main
			id="root"
			className="single-page flex flex-col justify-around items-center">
			<h3 className="text-3xl text-white mt-10">Schedule a Video Meeting</h3>
			<div className="flex flex-col laptop:flex-row mb-40 justify-around laptop:w-screen w-[60vw] px-10 mt-20">
				<PopupButton
					url="https://calendly.com/aaron-r-celia/30min"
					/*
					 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
					 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
					 */
					className="text-white text-xl px-5 py-5 rounded-xl bg-blue-600 my-10"
					rootElement={document.getElementById("root")}
					text="Schedule a 30 Minute Meeting"
				/>
				<PopupButton
					url="https://calendly.com/d/4kf-fdb-mzw/initial-meeting"
					rootElement={document.getElementById("root")}
					className="text-white text-xl px-5 py-5 rounded-xl bg-blue-600 my-10"
					text="Schedule Initial Meeting"
				/>
				<PopupButton
					url="https://calendly.com/d/25c-f35-w37/progress-check-in"
					rootElement={document.getElementById("root")}
					className="text-white text-xl px-5 py-5 rounded-xl bg-blue-600 my-10"
					text="Schedule Progress Check in"
				/>
			</div>
		</main>
	);
}

// link for initial meeting:
// https://calendly.com/d/4kf-fdb-mzw/initial-meeting

// progress checkin meeting link
// https://calendly.com/d/25c-f35-w37/progress-check-in

// 30 min meeting link
// https://calendly.com/aaron-r-celia/30min

// these are all google meet video meetings scheduled through me, the host, aaron.r.celia@gmail.com, the availability for all of them is: M-F, 10am-3pm