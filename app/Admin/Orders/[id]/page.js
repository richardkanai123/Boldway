import React from 'react'
import Link from 'next/link'

const Page = ({ params }) => {
    //   TODO: fetch neccesary data, know how to handle multiple products in one order
    return (
        <div className=' flex-1 flex flex-col justify-evenly gap-2 p-2 bg-slate-200  transition-all ease-linear delay-100 '>

            <div className="bg-red-100 w-full p-2 flex items-center gap-1 justify-between align-middle">
                <Link className='p-2 text-xs text-white font-light  border-0 ring-o hover:bg-yellow-600 hover:rounded-full hover:ring-0 bg-yellow-700 transition-all ease-linear duration-400 delay-100' href="/Admin/Orders">All Orders</Link>

                <p>Order {params.id} Details</p>
            </div>
            <div className=' w-full shadow-inner flex flex-col justify-between md:flex-row align-middle  gap-2 p-2 mb-2 border-b-2 '>
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-extrabold">Customer Details</h1>
                    <p className="text-base font-normal">Name:Frank Lee </p>
                    <p className="text-base font-normal">Email:john.doe@example.com </p>
                    <p className="text-base font-normal">phone:254123456789 </p>
                    <p className="text-base font-normal">Address:123 Main Street, Nairobi </p>

                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-xl font-extrabold ">Order Details</p>
                    <p className="text-base font-normal">Date:2023-12-26 </p>
                    <p className="text-base font-normal">Order Status:Pending </p>
                    <p className="text-base font-normal">Amount:500 </p>
                    <p className="text-base font-normal">Pay Mode:cash </p>
                    <p className="text-base font-normal">Pay Detail:paid </p>
                </div>


            </div>
            <div>Product& other details go here</div>

        </div>
    )
}

export default Page