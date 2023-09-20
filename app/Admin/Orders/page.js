import React from 'react'

const Page = async () => {
    const ordersData = await fetch(`${process.env.Web_Url}/api/orders`, {

        next: { revalidate: 60 }
    })
    const data = await ordersData.json()

    return (
        <div className='flex-1 bg-slate-100 min-h-screen transition-all ease-linear p-2'>
            <div>
                orders go here
            </div>
        </div>
    )
}

export default Page