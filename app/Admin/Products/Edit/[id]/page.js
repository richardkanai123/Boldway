import EditProductForm from '@/app/_Components/AdminComponents/EditProductForm'
import React from 'react'

const Page = async ({ params }) => {

    const targetProduct = await fetch(`${process.env.Web_Url}/api/products/${params.id}`,)
    const productData = await targetProduct.json()

    return (
        <EditProductForm productData={productData.FilteredObject[0]} />
    )
}

export default Page