'use client';
import GetInTouchButton from "./components/GetInTouchButton";
import { Roboto } from "next/font/google";
import anime from "animejs";

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
		<main>
			<section
				id="hero-section"
				className="flex flex-col justify-around items-center text-center py-20">
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
			<section id="subsection">
					
			</section>
		</main>
	);
}
