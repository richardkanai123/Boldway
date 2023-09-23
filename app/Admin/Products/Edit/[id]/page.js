import React, { Suspense } from 'react'
import EditProductForm from '@/app/_Components/AdminComponents/EditProductForm'
import Link from 'next/link'

const Page = async ({ params }) => {

    const targetProduct = await fetch(`${process.env.Web_Url}/api/products/${params.id}`, {
        cache: "no-cache"
    })
    if (targetProduct.status !== 200) {
        return (
            <div className="w-full flex items-center justify-center align-middle flex-col">
                <p className='font-bold text-3xl text-red-600'>Error Occured</p>
                <p className='font-bold text-xl text-red-300'>Item No Found</p>
                <Link className='text-yellow-700 font-extrabold p-2 bg-slate-400 rounded-full mt-2' href={"/Admin/Products"}>
                    Go Back to Products
                </Link>

            </div>
        )

    }
    const productData = await targetProduct.json()

    return (
        <Suspense fallback={
            <p>Loading ....</p>
        }>
            <EditProductForm productData={productData} />
        </Suspense>
    )
}

export default Page