"use client";
import { Kaushan_Script, Gruppo } from "next/font/google";
import menuIcon from "../../../public/white-menu.png";
import menuIcon2 from "../../../public/white-icon-2.png";
import Image from "next/image";
import { Drawer, SwipeableDrawer } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import anime from "animejs";

const font = Kaushan_Script({
	subsets: ["latin"],
	weight: "400"
});

const gruppo = Gruppo({
	subsets: ["latin"],
	weight: "400"
});

export default function Nav() {
	const [open, setOpen] = useState(false);
    const [textColor1, setTextColor1] = useState('text-white')
    const [textColor2, setTextColor2] = useState('text-white')
    const [textColor3, setTextColor3] = useState('text-white')
    const [textColor4, setTextColor4] = useState('text-white')
    const [textColor5, setTextColor5] = useState('text-white')
    const [textColor6, setTextColor6] = useState('text-white')

	const animateMenu = (val, timesRan = 1) => {
        if (val) {
            setTimeout(() => {
                switch(timesRan) {
                    case 1:
                        setTextColor1('text-black')
                        break;
                    case 2:
                        setTextColor2('text-black')
                        break;
                    case 3:
                        setTextColor3('text-black')
                        break;
                    case 4:
                        setTextColor4('text-black')
                        break;
                    case 5:
                        setTextColor5('text-black')
                        break
                    case 6:
                        setTextColor6('text-black')
                        break;
                    default:
                        return null
                }
            }, 100)
            setTimeout(() => {
                if(timesRan < 6){
                    return animateMenu(val, timesRan + 1)
                }
            }, 50)
        }
	};

    const resetValues = (val) => {
        if(!val) {
            setTextColor1('text-white')
            setTextColor2('text-white')
            setTextColor3('text-white')
            setTextColor4('text-white')
            setTextColor5('text-white')
            setTextColor6('text-white')
        }
    }

    useEffect(() => {
        animateMenu(open);
        resetValues(open);
    }, [open])

	useEffect(() => {
		anime({
			targets: ".letter-name",
			color: "#ffffff",
			delay: anime.stagger(60, { start: 500 })
		});
		anime({
			targets: ".letter-title",
			color: "#ffffff",
			delay: anime.stagger(40, { start: 1300 })
		});
		anime({
			targets: ".menu-item",
			color: "#ffffff",
			delay: anime.stagger(90, { start: 2300 })
		});
	}, []);
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
				<h3
					className={`${gruppo.className} text-2xl phone:text-4xl text-transparent`}>
					<span className="letter-name">A</span>
					<span className="letter-name">a</span>
					<span className="letter-name">r</span>
					<span className="letter-name">o</span>
					<span className="letter-name">n</span>
					<span> </span>
					<span className="letter-name">C</span>
					<span className="letter-name">e</span>
					<span className="letter-name">l</span>
					<span className="letter-name">i</span>
					<span className="letter-name">a</span>
				</h3>
				<h1
					className={`${gruppo.className} text-xs text-transparent phone:text-lg laptop:text-2xl`}>
					<span className="letter-title">S</span>
					<span className="letter-title">o</span>
					<span className="letter-title">f</span>
					<span className="letter-title">t</span>
					<span className="letter-title">w</span>
					<span className="letter-title">a</span>
					<span className="letter-title">r</span>
					<span className="letter-title">e</span>
					<span> </span>
					<span className="letter-title">E</span>
					<span className="letter-title">n</span>
					<span className="letter-title">g</span>
					<span className="letter-title">i</span>
					<span className="letter-title">n</span>
					<span className="letter-title">e</span>
					<span className="letter-title">e</span>
					<span className="letter-title">r</span>
				</h1>
			</div>
			<div
				className={`${gruppo.className} hidden laptop:flex items-center h-full laptop:text-xl`}>
				<Link
					className="menu-item text-transparent ml-2 font-extrabold text-md mx-6 hover:scale-110 duration-300 h-3/4 rounded-xl px-3 flex flex-col justify-center"
					href="/">
					Home
				</Link>
				<Link
					className="menu-item text-transparent ml-2 font-extrabold text-md mx-6 hover:scale-110 duration-300 h-3/4 rounded-xl px-3 flex flex-col justify-center"
					href="/projects">
					My Work
				</Link>
				<Link
					className="menu-item text-transparent ml-2 font-extrabold text-md mx-6 hover:scale-110 duration-300 h-3/4 rounded-xl px-3 flex flex-col justify-center"
					href="/services">
					Services
				</Link>
				<Link
					className="menu-item text-transparent ml-2 font-extrabold text-md mx-6 hover:scale-110 duration-300 h-3/4 rounded-xl px-3 flex flex-col justify-center"
					href="/meet">
					Book A Meeting
				</Link>
				<Link
					className="menu-item text-transparent ml-2 font-extrabold text-md mx-6 hover:scale-110 duration-300 h-3/4 rounded-xl px-3 flex flex-col justify-center"
					href="/contact">
					Get in Touch
				</Link>
				<Link
					className="menu-item text-transparent ml-2 font-extrabold text-md mx-6 hover:scale-110 duration-300 h-3/4 rounded-xl px-3 flex flex-col justify-center"
					href="/payments">
					Payments
				</Link>
			</div>
			<Fragment key="left">
				<SwipeableDrawer
					className={`${gruppo.className} laptop:hidden`}
					onOpen={() => null}
					anchor="left"
					open={open}
                    transitionDuration={100}
					onClose={() => setOpen(false)}>
					<div className="h-[90vh] w-60 mb-40 flex flex-col items-start justify-around">
						<div
							onClick={() => setOpen(false)}
							className={`ml-5 flex items-center hover:scale-105 duration-100 ${textColor1}`}>
								<HomeIcon fontSize="large" />
								<Link className="ml-2 font-bold text-xl" href="/">
									Home
								</Link>
						</div>
						<div
							onClick={() => setOpen(false)}
							className={`ml-5 flex items-center hover:scale-105 duration-100 ${textColor2}`}>
							<CodeIcon fontSize="large" />
							<Link className="ml-2 font-bold text-xl" href="/projects">
								My Work
							</Link>
						</div>
						<div
							onClick={() => setOpen(false)}
							className={`ml-5 flex items-center hover:scale-105 duration-100 ${textColor3}`}>
							<LaptopMacIcon fontSize="large" />
							<Link className="ml-2 font-bold text-xl" href="/services">
								Services Offered
							</Link>
						</div>
						<div
							onClick={() => setOpen(false)}
							className={`ml-5 flex items-center hover:scale-105 duration-100 ${textColor4}`}>
							<CalendarMonthIcon fontSize="large" />
							<Link className="ml-2 font-bold text-xl" href="/meet">
								Book a Meeting
							</Link>
						</div>
						<div
							onClick={() => setOpen(false)}
							className={`ml-5 flex items-center hover:scale-105 duration-100 ${textColor5}`}>
							<ContactMailIcon fontSize="large" />
							<Link className="ml-2 font-bold text-xl" href="/contact">
								Get in Touch
							</Link>
						</div>
						<div
							onClick={() => setOpen(false)}
							className={`ml-5 flex items-center hover:scale-105 duration-100 ${textColor6}`}>
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
