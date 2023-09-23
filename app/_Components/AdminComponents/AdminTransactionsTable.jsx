'use client'
import Link from 'next/link';
import DataTable from 'react-data-table-component';
import { LiaExternalLinkAltSolid } from 'react-icons/lia'

const columns = [
    {
        name: 'ID',
        selector: row => row.transactionID,
        sortable: true,

    },
    {
        name: 'Order',
        selector: row => row.orderID,
        sortable: true,

    },
    {
        name: 'Status',
        selector: row => row.transactionStatus,
        sortable: true,
        conditionalCellStyles: [
        ]
    },

    {
        name: 'Date',
        selector: row => row.transactionDate,
        sortable: true,
        hide: 'md'

    },
    {
        name: 'Amount',
        selector: row => row.amount,
        sortable: true,
        hide: 'md'

    },
    {
        name: 'Status',
        selector: row => row.transactionStatus,
        sortable: true,
        hide: 'md'

    },
];


const ExpandedComponent = ({ data }) => {
    return (
        <div className='px-2 py-1 w-full mx-auto bg-slate-200 flex flex-col align-middle justify-center items-center gap-2'>
            <Link href={`/Admin/Transactions/${data.transactionID}`} className='w-full text-left text-sky-600 hover:text-sky-300 hover:underline  ' > {data.transactionID} details</Link>

            <section className='w-full flex items-center justify-around align-middle'>
                <p className='text-sm tracking-tighter font-normal text-sky-950 p-1 flex flex-wrap justify-around gap-1 lg:hidden' >Paid Amount: {data.amount}</p>
                <p className='text-sm tracking-tighter font-normal text-sky-950 p-1 flex flex-wrap justify-around gap-1 lg:hidden' >Order Date: {data.transactionDate}</p>
                <p className='text-sm tracking-tighter  font-normal text-sky-950 p-1 flex flex-wrap justify-around gap-1 lg:hidden' >
                    Payment Mode: {data.paymentMethod}</p>


            </section>
        </div>
    )
};

const AdminTransactionsTable = ({ data }) => {
    return (
        <DataTable
            fixedHeader
            highlightOnHover
            pointerOnHover
            columns={columns}
            data={data}
            pagination
            keyField='transactionID'
            expandableRows
            expandableRowsComponent={ExpandedComponent}

        />
    );
};

export default AdminTransactionsTable