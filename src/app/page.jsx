import { Button } from "@mui/material";
import GetInTouchButton from "./components/GetInTouchButton";
import { Roboto } from "next/font/google";

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
				<div className="text-slate-300 flex flex-col items-start">
					<h5 className={`${semiboldRoboto.className} header-main laptop:text-xl mb-3`}>Hey, I'm Aaron.</h5>
					<h3 className={`${extraboldRoboto.className} text-4xl laptop:text-5xl header-main`}>
						Modern Websites
					</h3>
					<h3 className={`${extraboldRoboto.className} text-4xl laptop:text-5xl header-main`}>
						For Your Business
					</h3>
				</div>
				<GetInTouchButton />
			</section>
			<section id="subsection"></section>
		</main>
	);
}
