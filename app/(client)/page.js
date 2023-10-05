import Image from 'next/image'
import React from 'react'
import WelcomeText from '../_Components/CustomerComponents/WelcomeText'
import Link from 'next/link'
export const metadata = {
  title: 'Official Boldway Website',
  description: 'Original Kenyan Bags Company, making you bold.',
}

const Page = () => {
  return (

    <div className='w-full h-[90vh] align-middle self-center text-3xl font-extrabold relative object-cover'>
      <Image className='' src='/product1.jpg' alt='hero image' fill objectFit='cover' objectPosition='center' />

      <div className="w-full h-full bg-slate-500 bg-opacity-60 bg-blend-overlay  absolute left-0 top-0 flex flex-col gap-3 items-center align-middle justify-center px-2">

        <p className="w-full text-6xl md:text-8xl  text-amber-50 outline-1 leading-3 mb-3">BoldWay</p>
        <WelcomeText />

        <Link href={'/shop'} className='self-start text-amber-100 align-bottom text-base font-medium p-4 bg-yellow-700 ring-0 hover:bg-yellow-900 transition-all ease-in cursor-pointer rounded-md hover:rounded-lg '>Shop Now</Link>
      </div>
    </div>

  )
}

export default Page