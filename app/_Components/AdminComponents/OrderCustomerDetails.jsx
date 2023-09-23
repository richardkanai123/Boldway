import React, { Suspense } from 'react'

const OrderCustomerDetails = async ({ customerID }) => {
    const CustomerData = await fetch(`${process.env.Web_Url}/api/customers/${customerID}`, {
        cache: 'force-cache'
    })
    const customer = await CustomerData.json()

    const { phoneNumber, email, name, shippingAddress } = customer

    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-extrabold">Customer</h1>
            <Suspense fallback={<p>Loading Details....</p>}>
                <p className="text-base font-normal">Name: {name} </p>
                <p className="text-base font-normal">Email: {email} </p>
                <p className="text-base font-normal">phone: {phoneNumber} </p>
                <p className="text-base font-normal">Address: {shippingAddress} </p>
            </Suspense>
        </div >
    )
}

export default OrderCustomerDetails