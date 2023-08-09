'use client';
import { useRouter } from "next/navigation";


export default function GetInTouchButton() {
    const router = useRouter();
  return (
    <>
        <button variant="contained" className='bg-blue-600 hover:bg-green-700 duration-150 h-16 w-40 rounded-full text-white text-2xl' onClick={(e) => {
            e.preventDefault();
            router.push('/contact')
        }}>Get in Touch</button>
    </>
  )
}
