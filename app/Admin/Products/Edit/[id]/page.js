import React, { Suspense } from 'react'
import EditProductForm from '@/app/_Components/AdminComponents/EditProductForm'

const Page = async ({ params }) => {

    const targetProduct = await fetch(`${process.env.Web_Url}/api/products/${params.id}`, {
        cache: "no-cache"
    })
    if (targetProduct.status !== 200) {
        return (
            <p>Error Occured</p>
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