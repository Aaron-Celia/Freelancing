'use client';

import anime from "animejs";
import { useEffect } from "react";


export default function Header() {
    useEffect(() => {
        anime({
            targets: '#profile-pic',
            delay: 3000
        })
    }, [])
  return (
		<>
			<Image
				id="profile-pic"
				src={profilePic}
				alt="Profile Picture"
				className="rounded-full h-60 w-60 mt-10"
			/>
			<div className="text-center max-w-sm">
				Highly skilled and motivated Marine Corps veteran turned Software
				Engineer, proficient in a wide array of technologies and a dedicated
				problem-solver. A growth mindset and a passion for innovation with a
				track record of delivering robust and scalable solutions. Eager to
				leverage my technical expertise to drive impactful and transformative
				solutions.
			</div>
		</>
	);
}
