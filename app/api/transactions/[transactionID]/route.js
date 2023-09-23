import { NextResponse } from "next/server";

export async function GET(req, { params }) {

    const transactions = [
        {
            transactionID: "TRX1",
            orderID: 9,
            customerID: "119",
            transactionDate: '12/09/2023',
            transactionTime: "12:22AM",
            amount: 4500,
            paymentMethod: "MPesa",
            transactionStatus: "success",
            paymentDetails: "MP-1234567890",
        },
        {
            transactionID: "TRX2",
            orderID: 8,
            customerID: "116",
            transactionDate: '12/09/2023',
            transactionTime: "12:22AM",
            amount: 3200,
            paymentMethod: "Credit Card",
            transactionStatus: "success",
            paymentDetails: "CC-987654321",
        },
        {
            transactionID: "TRX3",
            orderID: 3,
            customerID: "118",
            transactionDate: '12/09/2023',
            transactionTime: "12:22AM",
            amount: 7500,
            paymentMethod: "MPesa",
            transactionStatus: "success",
            paymentDetails: "MP-2345678901",
        },
        {
            transactionID: "TRX4",
            orderID: 7,
            customerID: "119",
            transactionDate: '12/09/2023',
            transactionTime: "12:22AM",
            amount: 1800,
            paymentMethod: "Cash",
            transactionStatus: "success",
            paymentDetails: "",
        },
        {
            transactionID: "TRX5",
            orderID: 6,
            customerID: "115",
            transactionDate: '12/09/2023',
            transactionTime: "12:22AM",
            amount: 4200,
            paymentMethod: "Bank Transfer",
            transactionStatus: "success",
            paymentDetails: "BT-3456789012",
        },
        {
            transactionID: "TRX6",
            orderID: 5,
            customerID: "116",
            transactionDate: '12/09/2023',
            transactionTime: "12:22AM",
            amount: 2600,
            paymentMethod: "MPesa",
            transactionStatus: "success",
            paymentDetails: "MP-4567890123",
        },
        {
            transactionID: "TRX7",
            orderID: 4,
            customerID: "116",
            transactionDate: '12/09/2023',
            transactionTime: "12:22AM",
            amount: 6100,
            paymentMethod: "Cash",
            transactionStatus: "success",
            paymentDetails: "",
        },
        {
            transactionID: "TRX8",
            orderID: 3,
            customerID: "118",
            transactionDate: '12/09/2023',
            transactionTime: "12:22AM",
            amount: 3800,
            paymentMethod: "MPesa",
            transactionStatus: "success",
            paymentDetails: "MP-5678901234",
        },
        {
            transactionID: "TRX9",
            orderID: 2,
            customerID: "119",
            transactionDate: '12/09/2023',
            transactionTime: "12:22AM",
            amount: 5500,
            paymentMethod: "Credit Card",
            transactionStatus: "success",
            paymentDetails: "CC-6789012345",
        },
        {
            transactionID: "TRX10",
            orderID: 12,
            customerID: "114",
            transactionDate: '12/09/2023',
            transactionTime: "12:22AM",
            amount: 3100,
            paymentMethod: "Bank Transfer",
            transactionStatus: "success",
            paymentDetails: "BT-7890123456",
        },
    ];

    const FilteredObject = transactions.filter(item => item.transactionID === (params.transactionID))
    if (FilteredObject.length != 0) {
        return NextResponse.json(FilteredObject[0])
    }
    else {
        return NextResponse.json({ error: "Not Found" }, { status: 500 })
    }
}
