'use client'
import React from 'react'

const OrderStatusChanger = () => {
    return (
        <div className='w-full p-2 flex flex-col gap-2  align-middle'>
            <label className='text-sm' htmlFor="orderStatus">Set Status</label>
            <select className='w-full max-w-[250px] p-2 mb-1 rounded-full bg-slate-400 ring-0 border-0 outline-none hover:bg-slate-500 transition-all ease-in duration-300 delay-75 cursor-pointer' name="orderStatus" id="orderStatus" defaultValue="Pending">
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Delivering">Delivering</option>
                <option value="Cancelled">Cancelled</option>
            </select>
            <button className='w-[200px] bg-sky-500 rounded-full p-2 ring-0 text-zinc-500 hover:bg-blue-300 transition-all ease-in'>Set status</button>
        </div>
    )
}

export default OrderStatusChanger