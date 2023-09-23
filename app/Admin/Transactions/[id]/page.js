import React from 'react'
import Link from 'next/link'
import OrderStatusChanger from '@/app/_Components/AdminComponents/OrderStatusChanger'
import OrderCostCalculator from '@/app/_Components/AdminComponents/OrderCostCalculator'
import OrderDetailsCard from '@/app/_Components/AdminComponents/OrderDetailsCard'
import OrderCustomerDetails from '@/app/_Components/AdminComponents/OrderCustomerDetails'
import AdminOrderDetailsCard from '@/app/_Components/AdminComponents/AdminOrderDetailsCard'

const Page = async ({ params }) => {
    //   TODO: fetch neccesary data, know how to handle multiple products in one order

    const transactionData = await fetch(`${process.env.Web_Url}/api/transactions/${params.id}`, {
        cache: "no-cache"
    })


    const transaction = await transactionData.json()

    return (
        <div className=' flex-1 flex flex-col justify-evenly gap-2 p-2 bg-slate-200  transition-all ease-linear delay-100  '>
            <div className="bg-red-100 w-full p-2 flex items-center gap-1 justify-between align-middle">
                <Link className='p-2 text-xs text-white font-light  border-0 ring-o hover:bg-yellow-600 hover:rounded-full hover:ring-0 bg-yellow-700 transition-all ease-linear duration-400 delay-100' href="/Admin/Transactions">All Transactoins</Link>

                <p className='self-end text-lg font-semibold'>{params.id} Details</p>
            </div>
            <table className='text-center border-collapse border-slate-400  w-full shadow-xl border-spacing-1  '>
                <thead className='w-full bg-zinc-300  text-xs md:text-sm font-light '>
                    <tr className='w-full font-light'>
                        <th>Mode</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className='w-full text-[10px] md:text-xs'>
                    <tr>
                        <td>{transaction.paymentMethod}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.transactionDate}</td>
                        <td>{transaction.transactionTime}</td>
                        <td>{transaction.transactionStatus}</td>
                    </tr>
                </tbody>
            </table>
            <p>Details: {transaction.paymentDetails}</p>

            <div className="w-full p-2 mt-2 flex items-center align-middle justify-between flex-wrap">
                <OrderCustomerDetails customerID={transaction.customerID} />
                <AdminOrderDetailsCard ID={transaction.orderID} />
            </div>
        </div>
    )
}

export default Page