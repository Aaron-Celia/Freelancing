import Image from 'next/image'
import profilePic from '../../public/profile-pic.JPG'

export default function Home() {
  return (
   <main>
    <Image id='profile-pic' src={profilePic} alt='Profile Picture' className='rounded-full h-40 w-40 mt-10' />
   </main>
  )
}
