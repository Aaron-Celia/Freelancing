'use client';
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	weight: "400"
});

export default function ViewGithubButton() {
  return (
		<Link
			className={`${roboto.className} bg-black text-white hover:bg-gray-700 duration-150 h-10 w-60 rounded-xl flex items-center justify-center mb-60 mt-20`}
			href="https://github.com/Aaron-Celia"
			target="_blank">
			View GitHub Profile&nbsp;<GitHubIcon />
		</Link>
	);
}
