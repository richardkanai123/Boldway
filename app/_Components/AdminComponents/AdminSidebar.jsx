'use client'
import React, { useState } from 'react'
import { ImMenu } from 'react-icons/im'
import { MdOutlineSubtitles } from 'react-icons/md'
import { RxDashboard } from "react-icons/rx"
import { BiSolidShoppingBags, BiSolidCartDownload, BiSolidMessageError } from 'react-icons/bi'
import { FaMoneyBillTrendUp, FaUsers } from 'react-icons/fa6'
import { FaBold } from 'react-icons/fa6'
import { BiSolidLogOut } from 'react-icons/bi'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


const AdminSidebar = () => {


    const [collapseBarState, setCollapseBarState] = useState(true)

    // current path: sets active status on links
    const currentPath = usePathname()

    const navLinks = [
        {
            linkName: "DashBoard",
            tag: "/Admin",
            icon: <RxDashboard />
        },
        {
            linkName: "Products",
            tag: "/Admin/Products",
            icon: <BiSolidShoppingBags />

        },
        {
            linkName: "Orders",
            tag: "/Admin/Orders",
            icon: <BiSolidCartDownload />

        },
        {
            linkName: "Transactions",
            tag: "/Admin/Transactions",
            icon: <FaMoneyBillTrendUp />
        },
        {
            linkName: "Customers",
            tag: "/Admin/Customers",
            icon: <FaUsers />
        },
        {
            linkName: "Messages",
            tag: "/Admin/Messages",
            icon: <BiSolidMessageError />

        },

        {
            linkName: "Blog",
            tag: "/Admin/Blog",
            icon: <MdOutlineSubtitles />
        },

    ]

    return (
        <div className={
            collapseBarState ? (' top-0 sticky h-screen flex flex-col items-center   transition-all ease-linear w-[60px] self-start') : (
                'top-0 sticky h-screen flex flex-col items-center  overflow-hidden transition-all ease-linear w-[200px] self-start'
            )
        }>
            <div className="w-full flex items-center justify-around align-middle py-2 px-4  border-b mb-5 border-yellow-200">
                {
                    !collapseBarState && <h1 className="text-xl flex gap-1  align-middle items-center justify-center  ">
                        <FaBold className='text-3xl  ' />
                        <span className='font-bold'>Boldway</span>
                    </h1>
                }
                <button onClick={() => setCollapseBarState((prev) => !prev)} className='border-0 justify-end text-yellow-600 self-end ring-0  w-5 hover:text-yellow-500 rounded '>
                    {
                        collapseBarState ? (<AiOutlineMenuUnfold className='text-2xl hover:text-yellow-900 font-bold ' />) : (<ImMenu className='text-2xl font-extrabold ' />)
                    }
                </button>
            </div>
            <div className="w-full px-4 py-2  flex flex-col align-middle justify-center gap-5 text-lg font-bold ">
                {
                    navLinks.map((link) => (<Link className={
                        currentPath === link.tag ? ('w-full flex  p-1 rounded-md align-middle justify-start gap-4 transition-colors duration-200 ease-in delay-100 items-center cursor-pointer text-xl  text-yellow-600 bg-gray-300 hover:text-yellow-300 hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300 shadow-inner')
                            :
                            ('w-full flex  p-1rounded-md align-middle justify-start gap-4 transition-colors duration-200 ease-in delay-100 text-xl  items-center cursor-pointer hover:text-yellow-100 hover:bg-gray-300 active:bg-gray-100 focus:bg-gray-100')
                    } key={link.linkName} href={link.tag}>
                        {link.icon}
                        {!collapseBarState && link.linkName}
                    </Link>))
                }
            </div>

            <div className="w-full mt-3 border-t-2 border-slate-400 flex flex-col align-middle justify-between p-1 gap-2 my-auto self-end">
                <section
                    className='flex align-middle justify-around '>

                    <aside className='w-10 h-10 rounded-lg bg-slate-100 flex items-center align-middle justify-center object-cover relative'>
                        <Image src="https://avataaars.io/?avatarStyle=Transparent&topType=Hijab&accessoriesType=Prescription02&hatColor=Blue03&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                            objectFit='cover'
                            fill={true}
                            alt="Admin Avatar" />
                    </aside>

                    {
                        !collapseBarState &&
                        <aside className='flex flex-col gap-1 align-middle justify-center text-center'>
                            <p className='text-sm '>
                                Admin Username
                            </p>

                            <p className='font-light text-xs'>View Profile</p>

                        </aside>
                    }
                </section>

                <section className='w-full flex items-center align-middle justify-center '>
                    <button className=' transition-all  ease-in bg-yellow-700  hover:text-sky-500 hover:bg-yellow-900 rounded-md text-slate-200 self-center mx-auto p-2'>
                        {
                            collapseBarState ? (<BiSolidLogOut />) : "Log out"
                        }
                    </button>
                </section>
            </div>
        </div>
    )
}

export default AdminSidebar