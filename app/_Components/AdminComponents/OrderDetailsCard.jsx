import React from 'react'

const OrderDetailsCard = ({ mode, date, time, status, amount, payStatus }) => {
    return (
        <div className="flex flex-col gap-1">
            <p className="text-xl font-extrabold ">Order Details</p>
            <p className="text-base font-normal">Date: {date} </p>
            <p className="text-base font-normal">Time: {time} </p>
            <p className="text-base font-normal">Status: {status} </p>
            <p className="text-base font-normal">Amount: {amount}</p>
            <p className="text-base font-normal">Pay Mode: {mode} </p>
            <p className="text-base font-normal">Pay Detail: {payStatus} </p>
        </div>
    )
}

export default OrderDetailsCard