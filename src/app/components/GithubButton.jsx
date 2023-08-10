'use client';
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ['latin'],
    weight: '400'
})

export default function GithubButton({ href }) {
  return (
		<Link
			href={href}
			target="_blank"
			className={`${roboto.className} bg-black h-10 w-40 text-white px-5 py-2 hover:bg-gray-700 duration-150 flex items-center justify-center rounded-xl my-5`}>
			View Code &nbsp;
			<GitHubIcon />
		</Link>
	);
}
