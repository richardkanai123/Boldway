import { NextResponse } from "next/server";

export async function GET(req, { params }) {

    const orders = [
        {
            orderID: 1,
            customerID: 101,
            customerName: "Alice Johnson",
            dateOrdered: "2023-09-01",
            products: [
                { productId: 106, Quantity: 3 },
            ],
            orderStatus: "pending",
            timeOrdered: "09:30 AM",
            amountPaid: 3500, // Amount in Kenyan Shillings
            paymentMode: "MPesa",
            paymentStatus: "paid",
            pendingAmount: 0 // Amount in Kenyan Shillings
        },
        {
            orderID: 2,
            customerID: 102,
            customerName: "Bob Smith",
            dateOrdered: "2023-09-02",
            products: [
                { productId: 103, Quantity: 1 },
                { productId: 103, Quantity: 4 },
            ],
            orderStatus: "processing",
            timeOrdered: "11:15 AM",
            amountPaid: 2200,
            paymentMode: "Cash",
            paymentStatus: "partial",
            pendingAmount: 800 // Amount in Kenyan Shillings
        },
        {
            orderID: 3,
            customerID: 103,
            customerName: "Charlie Brown",
            dateOrdered: "2023-09-03",
            products: [
                { productId: 101, Quantity: 1 },
                { productId: 103, Quantity: 4 },
            ],
            orderStatus: "delivering",
            timeOrdered: "02:45 PM",
            amountPaid: 1000,
            paymentMode: "MPesa",
            paymentStatus: "partial",
            pendingAmount: 2000 // Amount in Kenyan Shillings
        },
        {
            orderID: 4,
            customerID: 104,
            customerName: "David Davis",
            dateOrdered: "2023-09-04",
            products: [
                { productId: 105, Quantity: 2 },
                { productId: 101, Quantity: 4 },
            ],
            orderStatus: "pending",
            timeOrdered: "10:20 AM",
            amountPaid: 5500,
            paymentMode: "MPesa",
            paymentStatus: "paid",
            pendingAmount: 0
        },
        {
            orderID: 5,
            customerID: 105,
            customerName: "Eve Wilson",
            dateOrdered: "2023-09-05",
            products: [
                { productId: 101, Quantity: 1 },
                { productId: 102, Quantity: 4 },
            ],
            orderStatus: "processing",
            timeOrdered: "03:55 PM",
            amountPaid: 2900,
            paymentMode: "Cash",
            paymentStatus: "paid",
            pendingAmount: 0
        },
        {
            orderID: 6,
            customerID: 106,
            customerName: "Frank Lee",
            dateOrdered: "2023-09-06",
            products: [
                { productId: 101, Quantity: 1 },
                { productId: 105, Quantity: 4 },
            ], productId: 103,
            orderStatus: "pending",
            timeOrdered: "09:10 AM",
            amountPaid: 1500,
            paymentMode: "MPesa",
            paymentStatus: "paid",
            pendingAmount: 0
        },
        {
            orderID: 7,
            customerID: 107,
            customerName: "Grace Moore",
            dateOrdered: "2023-09-07",
            products: [
                { productId: 106, Quantity: 6 },
                { productId: 103, Quantity: 1 },
            ],
            orderStatus: "delivering",
            timeOrdered: "01:30 PM",
            amountPaid: 1800,
            paymentMode: "Cash",
            paymentStatus: "partial",
            pendingAmount: 700
        },
        {
            orderID: 8,
            customerID: 108,
            customerName: "Henry King",
            dateOrdered: "2023-09-08",
            products: [
                { productId: 101, Quantity: 1 },
                { productId: 103, Quantity: 4 },
            ],
            orderStatus: "pending",
            timeOrdered: "10:45 AM",
            amountPaid: 2800,
            paymentMode: "MPesa",
            paymentStatus: "partial",
            pendingAmount: 400
        },
        {
            orderID: 9,
            customerID: 109,
            customerName: "Ivy Green",
            dateOrdered: "2023-09-09",
            products: [
                { productId: 101, Quantity: 1 },

            ], productId: 109,
            orderStatus: "processing",
            timeOrdered: "02:00 PM",
            amountPaid: 1200,
            paymentMode: "Cash",
            paymentStatus: "partial",
            pendingAmount: 300
        },
        {
            orderID: 10,
            customerID: 110,
            customerName: "Jack Turner",
            dateOrdered: "2023-09-10",
            products: [
                { productId: 101, Quantity: 1 },

            ],
            orderStatus: "pending",
            timeOrdered: "11:05 AM",
            amountPaid: 650,
            paymentMode: "MPesa",
            paymentStatus: "partial",
            pendingAmount: 150
        },
        {
            orderID: 11,
            customerID: 110,
            customerName: "Jack Turner",
            dateOrdered: "2023-09-11",
            products: [
                { productId: 101, Quantity: 2 },
                { productId: 102, Quantity: 1 }

            ],
            orderStatus: "pending",
            timeOrdered: "12:05 PM",
            amountPaid: 800,
            paymentMode: "MPesa",
            paymentStatus: "paid",
            pendingAmount: 0
        }
    ];

    const FilteredObject = orders.filter(order => order.orderID === parseInt(params.id))
    if (FilteredObject.length != 0) {
        return NextResponse.json(FilteredObject[0])
    }
    else {
        return NextResponse.json({ error: "Not Found" })
    }
}
