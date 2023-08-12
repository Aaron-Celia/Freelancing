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
		<div className="h-10 w-60">
			<Link
				className={`${roboto.className} bg-black text-white hover:bg-gray-700 duration-150 h-full w-full rounded-xl flex items-center justify-center`}
				href="https://github.com/Aaron-Celia"
				target="_blank">
				View GitHub Profile&nbsp;
				<GitHubIcon />
			</Link>
		</div>
	);
}
