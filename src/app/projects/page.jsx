import { Roboto } from "next/font/google";
import GithubButton from "../components/GithubButton";
import Link from "next/link";
import ViewGithubButton from "../components/ViewGithubButton";
import ViewSiteButton from "../components/ViewSiteButton";
import ProjectPageFooter from "../components/ProjectPageFooter";

const roboto = Roboto({
	subsets: ["latin"],
	weight: "400"
});

export default function ProjectsPage() {
	return (
		<main className="projects-page flex flex-col items-center justify-around">
			<h3 className="text-white text-4xl mt-10">Projects</h3>
			<div className="h-fit my-10 w-5/6 flex flex-col items-center px-5 py-8 border rounded-xl bg-blue-700 text-white bg-opacity-30">
				<h3 className={`${roboto.className} text-2xl`}>Weather App</h3>
				<ul>
					<li className="text-center my-5 text-lg">
						Implementation of real-time weather data, user-friendly UI, and
						global weather forecast search feature.
					</li>
					<li className="text-center my-5 text-lg">
						Integrated Geolocation API for user tracking; employed weather data
						API for real-time updates; developed dynamic UI; introduced global
						weather search feature with autocomplete function.
					</li>
					<li className="text-center my-5 text-lg">
						Effectively developed a weather app with real-time updates and
						user-friendly features, earning positive user feedback and daily
						user engagement.
					</li>
					<li className={`${roboto.className} text-center my-5 text-lg`}>
						<span className="font-extrabold">
							<em>Skills:</em>
						</span>{" "}
						Full Stack Development, API Integration, Geolocation Technology,
						UI/UX Design, User Experience Enhancement, Real-time Data Retrieval,
						Agile Methodologies.
					</li>
					<div className="w-full h-fit flex flex-col tablet:flex-row items-center justify-around">
						<GithubButton href="https://github.com/Aaron-Celia/weather-app" />
						<ViewSiteButton href="https://nextweatherapp-a399e9163fb6.herokuapp.com/" />
					</div>
				</ul>
			</div>
			<div className="h-fit my-10 w-5/6 flex flex-col items-center px-5 py-8 border rounded-xl bg-blue-700 text-white bg-opacity-30">
				<h3 className={`${roboto.className} text-2xl`}>Live Messaging App</h3>
				<ul>
					<li className="text-center my-5 text-lg">
						Engineered aesthetically appealing and interactive UI/UX components
						using state-of-the-art design principles, thus ensuring an
						exceptional user experience, while also pioneering a real-time
						messaging application leveraging WebSocket technology, to promote
						frictionless and instantaneous user interactions. The process
						showcased competencies in JavaScript frameworks, UX design
						methodologies, and real-time communication protocols.
					</li>
					<li className="text-center my-5 text-lg">
						Designing an accessible user interface leveraging Google OAuth for
						seamless sign-in, implementing robust data storage solutions for
						efficient information management, and employing real-time
						communication protocols for dynamic data exchange.
					</li>
					<li className="text-center my-5 text-lg">
						Combined React functionality with a real time subscription function
						to deliver messages in real-time, as soon as they’re sent.
					</li>
					<li className="text-center my-5 text-lg">
						Optimized global state management via Redux.
					</li>
					<li className={`${roboto.className} text-center my-5 text-lg`}>
						<span className="font-extrabold">
							<em>Skills:</em>
						</span>{" "}
						Application state management, data manipulation, real-time
						communication.
					</li>
					<div className="w-full h-fit flex flex-col tablet:flex-row items-center justify-around">
						<GithubButton href="https://github.com/Aaron-Celia/chat-app" />
					</div>
				</ul>
			</div>
			<div className="h-fit my-10 w-5/6 flex flex-col items-center px-5 py-8 border rounded-xl bg-blue-700 text-white bg-opacity-30">
				<h3 className={`${roboto.className} text-2xl`}>E-commerce Platform</h3>
				<ul>
					<li className="text-center my-5 text-lg">
						Tasked with engineering a comprehensive and fully-functional
						e-commerce site for video games.
					</li>
					<li className="text-center my-5 text-lg">
						Developed robust site with user/guest shopping and admin
						functionalities.
					</li>
					<li className="text-center my-5 text-lg">
						Utilized various react functionalities and hooks to create a live
						search and filter functionality that updates in real-time.
					</li>
					<li className="text-center my-5 text-lg">
						Designed back-end relational database and built a custom API to
						interact with the front end of the application.
					</li>
					<li className={`${roboto.className} text-center my-5 text-lg`}>
						<span className="font-extrabold">
							<em>Skills:</em>
						</span>{" "}
						Database design, problem-solving, e-commerce development, secure
						payment integration.
					</li>
					<div className="w-full h-fit flex flex-col tablet:flex-row items-center justify-around">
						<GithubButton href="https://github.com/Aaron-Celia/GraceShopperFinal" />
					</div>
				</ul>
			</div>
			<ProjectPageFooter />
		</main>
	);
}
