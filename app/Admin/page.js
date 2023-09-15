import React from 'react'
import InfoCard from '../_Components/AdminComponents/InfoCard'
import { FcSalesPerformance } from "react-icons/fc"
import { MdPending } from 'react-icons/md'
import { FaPeopleGroup } from 'react-icons/fa6'
import { BiSolidMessageDots } from 'react-icons/bi'

const Page = () => {
    return (
        <div className='flex-1 transition-all duration-200 delay-100 bg-slate-100 min-h-screen  flex flex-col align-middle items-center flex-wrap gap-2 flex-1transition-all ease-linear p-2 '>
            <div className="w-full flex gap-2 flex-wrap ">
                <InfoCard CardTitle={"Total Sales"} figure={200}
                    details={"Ksh. earned all from Sales"}
                    icon={<FcSalesPerformance className='font-bold text-2xl' />}
                />
                <InfoCard CardTitle={"Today's Sales"} figure={5}
                    details={"Total Sales Made Today "}
                    icon={<span className='font-light text-yellow-400'>{new Date().toLocaleDateString()}</span>}
                />
                <InfoCard CardTitle={"Pending Orders"} figure={10}
                    details={"Orders pending confirmation or processing"}
                    icon={<MdPending className='text-green-400 animate-pulse font-bold text-2xl' />}
                />
                <InfoCard CardTitle={"Unread Messages"} figure={2}
                    details={"Messages Filled on The Contact Form"}
                    icon={<FaPeopleGroup className='text-green-400 font-bold text-2xl' />}
                />

                <InfoCard CardTitle={"Total Customers"} figure={170}
                    details={"Total Number of Customers Accounts"}
                    icon={<BiSolidMessageDots className='text-yellow-300 font-bold text-2xl animate-bounce' />}
                />
            </div>



        </div>
    )
}

export default Page