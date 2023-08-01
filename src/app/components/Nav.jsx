'use client'
import { Lobster } from "next/font/google";
import menuIcon from '../../../public/menu-icon.png'
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

const lobster = Lobster({
    subsets: ['latin'],
    weight: '400'
})

export default function Nav() {
    const [open, setOpen] = useState(false)
  return (
		<nav id="nav" className="h-20 flex items-center justify-center">
			<div onClick={() => setOpen(true)}>
				<Image
					src={menuIcon}
					alt="Menu Button"
					className="h-14 w-14 absolute left-3 top-4"
				/>
			</div>
			<div className="self-center flex flex-col h-full justify-center items-center">
				<h1 className={`${lobster.className} text-3xl`}>Aaron Celia</h1>
				<h3>Freelance Web Developer</h3>
			</div>
			<Fragment key="left">
				<SwipeableDrawer anchor="left" open={open} onClose={() => setOpen(false)}>
					<div className="h-screen w-60 flex flex-col items-start justify-around">
						<div onClick={() => setOpen(false)} className="ml-5 flex items-center hover:scale-105 duration-100">
							<HomeIcon fontSize="large" />
							<Link className="ml-2 font-bold text-xl" href="/">
								Home
							</Link>
						</div>
						<div onClick={() => setOpen(false)} className="ml-5 flex items-center hover:scale-105 duration-100">
							<CodeIcon fontSize="large" />
							<Link className="ml-2 font-bold text-xl" href="/projects">
								My Work
							</Link>
						</div>
						<div onClick={() => setOpen(false)} className="ml-5 flex items-center hover:scale-105 duration-100">
							<LaptopMacIcon fontSize="large" />
							<Link className="ml-2 font-bold text-xl" href="/services">
								Services Offered
							</Link>
						</div>
						<div onClick={() => setOpen(false)} className="ml-5 flex items-center hover:scale-105 duration-100">
							<CalendarMonthIcon fontSize="large" />
							<Link className="ml-2 font-bold text-xl" href="/meet">
								Book a Meeting
							</Link>
						</div>
						<div onClick={() => setOpen(false)} className="ml-5 flex items-center hover:scale-105 duration-100">
							<ContactMailIcon fontSize="large" />
							<Link className="ml-2 font-bold text-xl" href="/contact">
								Contact Me
							</Link>
						</div>
						<div onClick={() => setOpen(false)} className="ml-5 flex items-center hover:scale-105 duration-100">
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
