"use client";
import { useRouter } from "next/navigation";

export default function ShootMeAMessageButton() {
	const router = useRouter();
	return (
		<>
			<button
				variant="contained"
				className="bg-blue-600 hover:bg-green-700 duration-150 h-16 w-60 rounded-full text-white text-2xl mb-60"
				onClick={(e) => {
					e.preventDefault();
					router.push("/contact");
				}}>
				Shoot me a Message
			</button>
		</>
	);
}
