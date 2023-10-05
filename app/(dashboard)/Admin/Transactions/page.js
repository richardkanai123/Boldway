import AdminTransactionsTable from '@/app/_Components/AdminComponents/AdminTransactionsTable'
import Link from 'next/link'
import React, { Suspense } from 'react'



const Page = async () => {
    const transactionsData = await fetch(`${process.env.Web_Url}/api/transactions`, {
        cache: "no-cache"
    })

    if (!transactionsData.ok) {
        return <p>Error Occured!</p>
    }

    const transactions = await transactionsData.json()

    return (
        <div className=' flex-1 flex flex-col justify-evenly gap-2 p-2 bg-slate-200  transition-all ease-linear delay-100  '>

            <div className="bg-red-100 w-full p-2 flex items-center gap-1 justify-between align-middle">
                <p className='self-end text-lg font-semibold'>Transactions</p>
                <Link className='p-2 text-xs text-white font-light  border-0 ring-o hover:bg-yellow-600 hover:rounded-full hover:ring-0 bg-yellow-700 transition-all ease-linear duration-400 delay-100' href="/Admin">Admin</Link>

            </div>

            <Suspense fallback={
                <div className='w-full flex self-center p-4 animate-pulse align-middle justify-center'>
                    Orders Loading .....
                </div>
            }>
                <AdminTransactionsTable data={transactions} />
            </Suspense>
        </div>
    )
}

export default Page