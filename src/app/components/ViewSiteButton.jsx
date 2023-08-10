'use client';
import Link from "next/link";
import { Roboto } from "next/font/google";
import LanguageIcon from "@mui/icons-material/Language";

const roboto = Roboto({
	subsets: ["latin"],
	weight: "400"
});


export default function ViewSiteButton({ href }) {
  return (
		<Link
			href={href}
			target="_blank"
			className={`${roboto.className} bg-green-700 hover:bg-green-600 duration-150 h-10 flex items-center justify-center w-40 text-white px-5 py-2 rounded-xl my-5`}>
			View Site&nbsp;<LanguageIcon />
		</Link>
	);
}
