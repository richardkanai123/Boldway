import ProductCard from '@/app/_Components/AdminComponents/ProductCard'
import Link from 'next/link';
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = async () => {
    const products = await fetch(`${process.env.Web_Url}/api/products`, {
        cache: "no-cache"
    })
    const data = await products.json()
    const ProductsData = data.products
    return (
        <div className=' flex-1 flex flex-col flex-wrap justify-evenly gap-2 p-4 bg-slate-200 min-h-screen transition-all ease-linear '>

            <div className="w-full p-2 flex items-center justify-between align-middle">
                <h1 className='font-bold  text-yellow-600'>Boldway Products</h1>

                <Link href={'/Admin/Products/addnew'}
                    className='p-2 text-xs text-white font-light  border-0 ring-o hover:bg-yellow-600 hover:rounded-lg hover:ring-0 bg-yellow-700 transition-all ease-linear duration-400'>
                    Add new
                </Link>
            </div>

            <div className='w-full p-2 shadow-inner flex align-middle justify-center gap-2 flex-wrap'>
                {
                    ProductsData.map((data) => (
                        <ProductCard key={data.id} productData={data} />
                    ))
                }
            </div>



            <ToastContainer />
        </div>
    )
}

export default Page