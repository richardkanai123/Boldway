"use client"
import Image from 'next/image'
import { FiEdit } from 'react-icons/fi'
import { FaMoneyBillWave } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const ProductCard = ({ productData }) => {
    const { title, description, price, imageUrl, discountPrice, id } = productData
    const AddToSale = () => {
        toast.success('Added to Sale', {
            position: 'top-left',
            theme: "colored",
        })
    }
    return (
        <div className='rounded-md relative  bg-slate-300 flex flex-col p-2 w-full md:w-[250px] text-left'>
            <Image src={imageUrl}
                className='self-center mb-2 p-1 rounded ring-1 ring-slate-100'
                alt={title} width={100} height={80} />
            <h3 className="text-left font-extrabold text-base mb-1 ">{title}</h3>
            <p className='text-base font-light '>
                {description}
            </p>
            <p className='text-sm font-semibold mt-2'>Price: {price}</p>
            <p className='text-xs font-thin mt-1 italic text-blue-400'>Discount Price: {discountPrice}</p>

            <div className="flex align-middle justify-between items-center p-1">

                <Link href={`/Admin/Products/Edit/${id}`} className='bg-slate-50 rounded-lg text-xs cursor-pointer p-2 flex items-center align-middle justify-center text-green-700 gap-1 ring-1 ring-lime-300 hover:bg-lime-400   '>
                    <FiEdit /> <span>Edit</span>
                </Link>
                <button onClick={() => AddToSale()} className='bg-slate-50 rounded-lg text-xs cursor-pointer p-2 flex items-center align-middle justify-center gap-1 ring-1 text-sky-500 ring-sky-300 hover:bg-sky-200'>
                    <FaMoneyBillWave /> <span>Sale</span>
                </button>

            </div>

        </div>
    )
}

export default ProductCard