import OrdersTable from '@/app/_Components/AdminComponents/OrdersTable'
import Link from 'next/link'
import React, { Suspense } from 'react'

const Page = async () => {
    const products = await fetch(`${process.env.Web_Url}/api/orders`, {
        cache: "no-cache"
    })

    const data = await products.json()
    const OrdersData = data.orders
    return (
        <div className=' flex-1 flex flex-col flex-wrap justify-evenly gap-2 p-4 bg-slate-200 min-h-screen transition-all ease-linear '>

            <div className="w-full p-2 flex items-center justify-between align-middle">

                <Link href={'/Admin/Orders/addnew'}
                    className='p-2 text-xs text-white font-light  border-0 ring-o hover:bg-yellow-600 hover:rounded-lg hover:ring-0 bg-yellow-700 transition-all ease-linear duration-400'>
                    Add new
                </Link>
            </div>
            <Suspense fallback={

                <div className='w-full flex self-center p-4 animate-pulse align-middle justify-center'>
                    Orders Loading .....
                </div>
            }>
                <OrdersTable />
            </Suspense>
        </div >
    )
}

export default Page