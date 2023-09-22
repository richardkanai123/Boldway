import React from 'react'
import Link from 'next/link'
import OrderStatusChanger from '@/app/_Components/AdminComponents/OrderStatusChanger'
import OrderCostCalculator from '@/app/_Components/AdminComponents/OrderCostCalculator'
import OrderDetailsCard from '@/app/_Components/AdminComponents/OrderDetailsCard'
import OrderCustomerDetails from '@/app/_Components/AdminComponents/OrderCustomerDetails'

const Page = async ({ params }) => {
    //   TODO: fetch neccesary data, know how to handle multiple products in one order

    const orderData = await fetch(`${process.env.Web_Url}/api/orders/${params.id}`, {
        cache: "no-cache"
    })


    if (!orderData.ok) {
        <p>Error Occured!</p>
    }
    const data = await orderData.json()

    const { orderID, customerID, customerName, dateOrdered, products, orderStatus, timeOrdered, amountPaid, paymentMode, paymentStatus, pendingAmount } = data


    return (
        <div className=' flex-1 flex flex-col justify-evenly gap-2 p-2 bg-slate-200  transition-all ease-linear delay-100  '>

            <div className="bg-red-100 w-full p-2 flex items-center gap-1 justify-between align-middle">
                <Link className='p-2 text-xs text-white font-light  border-0 ring-o hover:bg-yellow-600 hover:rounded-full hover:ring-0 bg-yellow-700 transition-all ease-linear duration-400 delay-100' href="/Admin/Orders">All Orders</Link>

                <p className='self-end text-lg font-semibold'>Order {params.id} Details</p>
            </div>
            <div className=' w-full shadow-inner flex flex-col justify-around md:flex-row align-middle  gap-2 p-2 mb-2 border-b-2 '>
                <OrderCustomerDetails name={customerName} customerID={customerID} />
                <OrderDetailsCard
                    mode={paymentMode}
                    date={dateOrdered}
                    time={timeOrdered}
                    status={orderStatus}
                    amount={amountPaid}
                    payStatus={paymentStatus}
                />
            </div>
            <table className='p-1 text-center border-collapse border-slate-400 table-fixed w-full shadow-xl'>
                <thead className='w-full bg-zinc-300  text-sm font-light '>
                    <tr className='w-full font-light'>
                        <th>ID</th>
                        <th>Item</th>
                        <th>Type</th>
                        <th>Qnty</th>
                        <th>Cost</th>
                    </tr>
                </thead>


                <tbody className='w-full text-xs'>
                    {
                        products.map((product) => (
                            <tr key={`${orderID}+${product.productId}`}>
                                <td>{product.productId}</td>
                                <td>Name</td>
                                <td>{product.variant}</td>
                                <td>{product.Quantity}</td>
                                <td>100</td>
                            </tr>
                        ))}
                </tbody>
            </table>

            <OrderCostCalculator />

            <OrderStatusChanger />


        </div>
    )
}

export default Page