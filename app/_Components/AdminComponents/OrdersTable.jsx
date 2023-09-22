'use client'
import Link from 'next/link';
import DataTable from 'react-data-table-component';
import { LiaExternalLinkAltSolid } from 'react-icons/lia'

const columns = [
    {
        name: 'OrderID',
        selector: row => row.orderID,
        sortable: true,

    },
    {
        name: 'Customer',
        selector: row => row.customerName,
        sortable: true,

    },
    {
        name: 'Status',
        selector: row => row.orderStatus,
        sortable: true,
        conditionalCellStyles: [
            {
                when: row => row.orderStatus === 'processing',
                style: {
                    backgroundColor: '#095380',
                    color: 'white',
                    borderRadius: '10px',
                    textAlign: "center",
                    margin: "auto 0",
                    alignSelf: "center",
                    justifyContent: "center"

                },
            },
            {
                when: row => row.orderStatus === 'pending',
                style: {
                    backgroundColor: '#d4d975',
                    color: 'white',
                    borderRadius: '8px',
                    textAlign: "center",
                    margin: "auto",
                    alignSelf: "center",
                    justifyContent: "center"


                },
            },
            {
                when: row => row.orderStatus === 'delivering',
                style: {
                    backgroundColor: 'green',
                    color: '#256b38',
                    color: 'white',
                    borderRadius: '8px',
                    textAlign: "center",
                    margin: "auto ",
                    alignSelf: "center",
                    justifyContent: "center"

                },
            },
        ]
    },

    {
        name: 'Date',
        selector: row => row.dateOrdered,
        sortable: true,
        hide: 'md'

    },
    {
        name: 'Payment',
        selector: row => row.paymentStatus,
        hide: 'sm',
        sortable: true,
        conditionalCellStyles: [
            {
                when: row => row.paymentStatus === 'partial',
                style: {
                    backgroundColor: '#d4d975',
                    color: 'white',
                    borderRadius: '8px',
                    textAlign: "center",
                    margin: "auto",
                    alignSelf: "center",
                    justifyContent: "center"

                },
            },
            {
                when: row => row.paymentStatus === 'paid',
                style: {
                    backgroundColor: '#0b4705',
                    color: 'white',
                    borderRadius: '8px',
                    textAlign: "center",
                    margin: "auto",
                    alignSelf: "center",
                    width: "100%",
                    justifyContent: "center"
                },
            },
        ]

    },
    {
        name: 'Amount',
        selector: row => row.amountPaid,
        sortable: true,
        hide: 'md'

    },
    {
        name: 'Balance',
        selector: row => row.pendingAmount,
        sortable: true,
        hide: 'md'

    },
];


const ExpandedComponent = ({ data }) => {
    return (
        <div className='px-2 py-1 w-full mx-auto bg-slate-200 flex flex-col align-middle justify-center items-center gap-2'>
            <Link href={`/Admin/Orders/${data.orderID}`} className='w-full text-left text-sky-600 hover:text-sky-300 hover:underline  ' >Order {data.orderID} details</Link>

            <section className='w-full flex items-center justify-around align-middle'>
                <p className='text-sm tracking-tighter font-normal text-sky-950 p-1 flex flex-wrap justify-around gap-1 lg:hidden' >Paid Amount: {data.amountPaid}</p>
                <p className='text-sm tracking-tighter font-normal text-sky-950 p-1 flex flex-wrap justify-around gap-1 lg:hidden' >Balance: {data.pendingAmount}</p>
                <p className='text-sm tracking-tighter font-normal text-sky-950 p-1 flex flex-wrap justify-around gap-1 lg:hidden' >Order Date: {data.dateOrdered}</p>
                <p className='text-sm tracking-tighter  font-normal text-sky-950 p-1 flex flex-wrap justify-around gap-1 lg:hidden' >
                    Payment Mode: {data.paymentMode}</p>


            </section>
        </div>
    )
};

const OrdersTable = ({ data }) => {
    return (
        <DataTable
            fixedHeader
            highlightOnHover
            pointerOnHover
            columns={columns}
            data={data}
            pagination
            keyField='orderID'
            expandableRows
            expandableRowsComponent={ExpandedComponent}

        />
    );
};

export default OrdersTable