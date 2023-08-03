'use client';
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";


export default function GetInTouchButton() {
    const router = useRouter();
  return (
    <>
        <Button variant="contained" className='bg-blue-600 hover:bg-green-700 duration-300 h-16 w-40 rounded-full' onClick={() => router.push('/contact')}>Get in Touch</Button>
    </>
  )
}
