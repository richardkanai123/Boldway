import { NextResponse } from "next/server";

export async function GET(req, { params }) {

    const orders = [
        {
            orderID: 1,
            customerID: '111',
            customerName: "John Doe",
            dateOrdered: "2023-09-01",
            products: [
                {
                    productId: 106, name: 'Canvas Slip-On Shoes', Quantity: 3, unitPrice: 1800, variant: "black"
                },
            ],
            orderStatus: "pending",
            timeOrdered: "09:30 AM",
            amountPaid: 5400, // Amount in Kenyan Shillings
            paymentMode: "MPesa",
            paymentStatus: "paid",
            pendingAmount: 0 // Amount in Kenyan Shillings
        },
        {
            orderID: 2,
            customerID: '112',
            customerName: "Jane Smith",
            dateOrdered: "2023-09-02",
            products: [
                { productId: 103, Quantity: 1, name: 'Classic Leather Wallet', unitPrice: 1800, variant: "black" },
                { productId: 103, Quantity: 4, name: "Classic Leather Wallet", unitPrice: 3500, variant: "striped" },
            ],
            orderStatus: "processing",
            timeOrdered: "11:15 AM",
            amountPaid: 8000,
            paymentMode: "Cash",
            paymentStatus: "partial",
            pendingAmount: 800 // Amount in Kenyan Shillings
        },
        {
            orderID: 3,
            customerID: '113',
            customerName: "Chris Johnson",
            dateOrdered: "2023-09-03",
            products: [
                { productId: 101, Quantity: 1, name: "Premium Leather Backpack", unitPrice: 1500, variant: "Grey" },
                { productId: 103, Quantity: 10, name: "Classic Leather Wallet", unitPrice: 1800, variant: "black" },
            ],
            orderStatus: "delivering",
            timeOrdered: "02:45 PM",
            amountPaid: 19000,
            paymentMode: "MPesa",
            paymentStatus: "partial",
            pendingAmount: 500 // Amount in Kenyan Shillings
        },
        {
            orderID: 4,
            customerID: '114',
            customerName: "Emily Davis",
            dateOrdered: "2023-09-04",
            products: [
                { productId: 105, Quantity: 2, name: "Elegant Evening Clutch", unitPrice: 2500, variant: "black" },
                { productId: 101, Quantity: 4, name: "Premium Leather Backpack", unitPrice: 1500, variant: "grey" },
            ],
            orderStatus: "pending",
            timeOrdered: "10:20 AM",
            amountPaid: 11000,
            paymentMode: "MPesa",
            paymentStatus: "paid",
            pendingAmount: 0
        },
        {
            orderID: 5,
            customerID: '115',
            customerName: "Micheal Wilson",
            dateOrdered: "2023-09-05",
            products: [
                { productId: 101, Quantity: 1, name: "Premium Leather Backpack", unitPrice: 1500, variant: "black" },
                { productId: 102, Quantity: 2, name: "Striped Beach Tote Bag", unitPrice: 2800, variant: "black" },
            ],
            orderStatus: "processing",
            timeOrdered: "03:55 PM",
            amountPaid: 6700,
            paymentMode: "Cash",
            paymentStatus: "paid",
            pendingAmount: 0
        },
        {
            orderID: 6,
            customerID: '116',
            customerName: "Olivia Brown",
            dateOrdered: "2023-09-06",
            products: [
                { productId: 101, Quantity: 1, name: "Premium Leather Backpack", unitPrice: 1500, variant: "grey" },
                { productId: 108, Quantity: 2, name: "Designer Sunglasses", unitPrice: 3500, variant: "grey" },
            ],
            orderStatus: "pending",
            timeOrdered: "09:10 AM",
            amountPaid: 7500,
            paymentMode: "MPesa",
            paymentStatus: "paid",
            pendingAmount: 0
        },
        {
            orderID: 7,
            customerID: '117',
            customerName: "William Taylor",
            dateOrdered: "2023-09-07",
            products: [
                { productId: 106, Quantity: 2, unitPrice: 1800, variant: "grey" },
                { productId: 103, Quantity: 1, unitPrice: 1800, variant: "black" },
            ],
            orderStatus: "delivering",
            timeOrdered: "01:30 PM",
            amountPaid: 1800,
            paymentMode: "Cash",
            paymentStatus: "partial",
            pendingAmount: 3600
        },
        {
            orderID: 8,
            customerID: '118',
            customerName: "Sophia Clark",
            dateOrdered: "2023-09-08",
            products: [
                { productId: 101, Quantity: 1, unitPrice: 2800, name: "Premium Leather Backpack", variant: "grey" },
                { productId: 103, Quantity: 2, unitPrice: 1800, name: "Striped Beach Tote Bag", variant: "grey" },
            ],
            orderStatus: "pending",
            timeOrdered: "10:45 AM",
            amountPaid: 2800,
            paymentMode: "MPesa",
            paymentStatus: "partial",
            pendingAmount: 3600
        },
        {
            orderID: 9,
            customerID: '119',
            customerName: "James White",
            dateOrdered: "2023-09-09",
            products: [
                {
                    productId: 101, Quantity: 1, name: "Premium Leather Backpack", unitPrice: 2800, variant: "striped"
                },

            ],
            orderStatus: "processing",
            timeOrdered: "02:00 PM",
            amountPaid: 1200,
            paymentMode: "Cash",
            paymentStatus: "partial",
            pendingAmount: 1600
        },
        {
            orderID: 10,
            customerID: 120,
            customerName: "Ava Turner",
            dateOrdered: "2023-09-10",
            products: [
                {
                    productId: 101, Quantity: 1, name: "Premium Leather Backpack", unitPrice: 2800, variant: "striped"
                },

            ],
            orderStatus: "pending",
            timeOrdered: "11:05 AM",
            amountPaid: 2650,
            paymentMode: "MPesa",
            paymentStatus: "partial",
            pendingAmount: 150
        },
        {
            orderID: 11,
            customerID: '120',
            customerName: "Ava Turner",
            dateOrdered: "2023-09-11",
            products: [
                { productId: 101, Quantity: 2, name: "Premium Leather Backpack", unitPrice: 6500, variant: "black" },
                { productId: 102, Quantity: 1, name: "Striped Beach Tote Bag", unitPrice: 2800, variant: "striped" }

            ],
            orderStatus: "pending",
            timeOrdered: "12:05 PM",
            amountPaid: 10000,
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
