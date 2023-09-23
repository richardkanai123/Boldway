import React from 'react'

const AdminOrderDetailsCard = async ({ ID }) => {

    const orderData = await fetch(`${process.env.Web_Url}/api/orders/${ID}`, {
        cache: "no-cache"
    })


    if (!orderData.ok) {
        <p>Error Occured!</p>
    }
    const data = await orderData.json()

    const { orderID, customerID, customerName, dateOrdered, products, orderStatus, timeOrdered, amountPaid, paymentMode, paymentStatus, pendingAmount } = data
    return (
        <div className="flex flex-col gap-1">
            <p className="text-xl font-extrabold ">Order Details</p>
            <p className="text-base font-normal">Date: {dateOrdered} </p>
            <p className="text-base font-normal">Time: {timeOrdered} </p>
            <p className="text-base font-normal">Status: {orderStatus} </p>
            <p className="text-base font-normal">Amount: {amountPaid}</p>
            <p className="text-base font-normal">Pay Mode: {paymentMode} </p>
            <p className="text-base font-normal">Pay Detail: {paymentStatus} </p>
        </div>
    )
}

export default AdminOrderDetailsCard