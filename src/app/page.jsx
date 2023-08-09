'use client';
import GetInTouchButton from "./components/GetInTouchButton";
import { Roboto } from "next/font/google";
import profilePic from '../../public/profile-pic.JPG';
import Image from "next/image";
import ShootMeAMessageButton from "./components/ShootMeAMessageButton";

const extraboldRoboto = Roboto({
  subsets: ['latin'],
  weight: '900'
})

const semiboldRoboto = Roboto({
  subsets: ['latin'],
  weight: '700'
})



export default function Home() {
	return (
		<main className="h-fit entire-front-page">
			<section
				id="hero-section"
				className="front-page flex flex-col justify-around items-center text-center py-20">
				<div className="text-slate-300 flex flex-col">
					{/* <h5
						className={`${semiboldRoboto.className} header-main text-2xl laptop:text-xl mb-3 text-center`}>
						Hey, I'm Aaron.
					</h5> */}
					<h3
						className={`${extraboldRoboto.className} text-6xl laptop:text-8xl header-main text-center`}>
						Modern
					</h3>
					<h3
						className={`${extraboldRoboto.className} text-6xl laptop:text-8xl header-main text-center`}>
						Web Apps
					</h3>
					<h3
						className={`${extraboldRoboto.className} text-6xl laptop:text-8xl header-main text-center`}>
						For Your
					</h3>
					<h3
						className={`${extraboldRoboto.className} text-6xl laptop:text-8xl header-main text-center`}>
						Business
					</h3>
				</div>
				<GetInTouchButton />
			</section>
			<section id="subsection" className="flex flex-col items-center">
				<h3 className={`${semiboldRoboto.className} text-5xl mb-10 text-center`}>
					About Me
				</h3>
        <Image src={profilePic} alt='Profile Picture' className='w-[60%] rounded-full mb-10 tablet:w-[33%] laptop:w-1/4' />
				<p className="text-2xl text-center mx-8 font-extrabold tablet:text-3xl laptop:mx-80 tablet:mx-20">
					A Highly skilled and motivated Marine Corps veteran turned freelance
					Software Engineer. Proficient in a wide array of technologies, a dedicated problem-solver, a growth
					mindset, and a passion for innovation with a track record of delivering
					robust and scalable solutions. Eager to leverage my technical
					expertise to drive impactful and transformative projects as a
					freelance developer.
				</p>
        <h5 className={`${semiboldRoboto.className} text-4xl my-20 mx-5 text-center`}>Wondering If I Can Help You?</h5>
        <ShootMeAMessageButton />
			</section>
		</main>
	);
}
