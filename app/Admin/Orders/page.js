import React from 'react'

const Page = async () => {
    const products = await fetch(`${process.env.Web_Url}/api/orders`, {
        cache: "no-cache"
    })

    const data = await products.json()
    const OrdersData = data.orders
    return (
        <div className='flex-1 bg-slate-100 min-h-screen transition-all ease-linear p-2'>
            {OrdersData.map((order) => (
                <h1 key={order.id}>{order.paymentStatus}</h1>
            ))}
        </div>
    )
}

export default Page