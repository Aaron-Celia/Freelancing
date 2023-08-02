"use client";
import { Kaushan_Script, Gruppo } from "next/font/google";
import menuIcon from "../../../public/white-menu.png";
import menuIcon2 from "../../../public/white-icon-2.png";
import Image from "next/image";
import { Drawer, SwipeableDrawer } from "@mui/material";
import { Fragment, useState } from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const font = Kaushan_Script({
	subsets: ["latin"],
	weight: "400"
});

const gruppo = Gruppo({
    subsets: ['latin'],
    weight: "400"
})

export default function Nav() {
	const [open, setOpen] = useState(false);
	return (
		<nav
			id="nav"
			className="h-20 flex items-center justify-center laptop:justify-between text-white">
			<div
				className="laptop:hidden laptop:w-[20%] laptop:bg-red-500"
				onClick={() => setOpen(true)}>
				<Image
					src={menuIcon2}
					alt="Menu Button"
					className="laptop:hidden h-14 w-14 absolute left-3 top-3"
				/>
                <div className="rounded-full absolute h-10 w-10 bg-white left-[1.3rem] top-[1.3rem] -z-50"></div>
			</div>
			<div className="self-center flex flex-col h-full justify-center items-center laptop:items-start laptop:ml-4">
				<h3 className={`${gruppo.className} text-2xl phone:text-4xl`}>Aaron Celia</h3>
				<h1 className={`${gruppo.className} text-xs phone:text-lg laptop:text-2xl`}>Freelance Developer</h1>
			</div>
			<div className={`${gruppo.className} hidden laptop:flex items-center h-full laptop:text-xl`}>
				<Link className="ml-2 font-extrabold text-md mx-6 hover:bg-gray-300 hover:text-black duration-300 h-3/4 rounded-xl px-3 flex flex-col justify-center" href="/">
					Home
				</Link>
				<Link className="ml-2 font-extrabold text-md mx-6 hover:bg-gray-300 hover:text-black duration-300 h-3/4 rounded-xl px-3 flex flex-col justify-center" href="/projects">
					My Work
				</Link>
				<Link className="ml-2 font-extrabold text-md mx-6 hover:bg-gray-300 hover:text-black duration-300 h-3/4 rounded-xl px-3 flex flex-col justify-center" href="/services">
					Services
				</Link>
				<Link className="ml-2 font-extrabold text-md mx-6 hover:bg-gray-300 hover:text-black duration-300 h-3/4 rounded-xl px-3 flex flex-col justify-center" href="/meet">
					Meet With Me
				</Link>
				<Link className="ml-2 font-extrabold text-md mx-6 hover:bg-gray-300 hover:text-black duration-300 h-3/4 rounded-xl px-3 flex flex-col justify-center" href="/contact">
					Contact Me
				</Link>
				<Link className="ml-2 font-extrabold text-md mx-6 hover:bg-gray-300 hover:text-black duration-300 h-3/4 rounded-xl px-3 flex flex-col justify-center" href="/payments">
					Payments
				</Link>
			</div>
			<Fragment key="left">
				<SwipeableDrawer
					className={`${gruppo.className} laptop:hidden`}
					onOpen={() => null}
					anchor="left"
					open={open}
					onClose={() => setOpen(false)}>
					<div className="h-screen w-60 mb-40 flex flex-col items-start justify-around">
						<div
							onClick={() => setOpen(false)}
							className="ml-5 flex items-center hover:scale-105 duration-100">
							<HomeIcon fontSize="large" />
							<Link className="ml-2 font-bold text-xl" href="/">
								Home
							</Link>
						</div>
						<div
							onClick={() => setOpen(false)}
							className="ml-5 flex items-center hover:scale-105 duration-100">
							<CodeIcon fontSize="large" />
							<Link className="ml-2 font-bold text-xl" href="/projects">
								My Work
							</Link>
						</div>
						<div
							onClick={() => setOpen(false)}
							className="ml-5 flex items-center hover:scale-105 duration-100">
							<LaptopMacIcon fontSize="large" />
							<Link className="ml-2 font-bold text-xl" href="/services">
								Services Offered
							</Link>
						</div>
						<div
							onClick={() => setOpen(false)}
							className="ml-5 flex items-center hover:scale-105 duration-100">
							<CalendarMonthIcon fontSize="large" />
							<Link className="ml-2 font-bold text-xl" href="/meet">
								Book a Meeting
							</Link>
						</div>
						<div
							onClick={() => setOpen(false)}
							className="ml-5 flex items-center hover:scale-105 duration-100">
							<ContactMailIcon fontSize="large" />
							<Link className="ml-2 font-bold text-xl" href="/contact">
								Contact Me
							</Link>
						</div>
						<div
							onClick={() => setOpen(false)}
							className="ml-5 flex items-center hover:scale-105 duration-100">
							<AttachMoneyIcon fontSize="large" />
							<Link className="ml-2 font-bold text-xl" href="/payments">
								Payments
							</Link>
						</div>
					</div>
				</SwipeableDrawer>
			</Fragment>
		</nav>
	);
}
