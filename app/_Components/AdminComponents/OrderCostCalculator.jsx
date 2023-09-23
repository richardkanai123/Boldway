import React from 'react'

const OrderCostCalculator = ({ products }) => {
    let productsFee = 0.00
    products.map((product) => {
        productsFee = productsFee + (product.unitPrice * product.Quantity)
    })

    let deliveryFee = 200

    const totalCost = productsFee + deliveryFee

    return (
        <div className='w-full p-2 flex flex-col self-end items-end justify-end gap-1 border-b-2 border-zinc-500'>
            <p className='text-sm font-semibold'>Items Fee: {productsFee}</p>
            <p className='text-sm font-semibold'>Delivery Fee: {deliveryFee}</p>
            <p className='mt-1 text-xl font-bold'>Total: {totalCost} </p>
        </div>
    )
}

export default OrderCostCalculator