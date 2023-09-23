'use client'
import Link from 'next/link';
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
    title: yup.string('must be a string').required("Required"),
    price: yup.number().required().positive().integer(),
    discountPrice: yup.number().required().positive().integer(),
    description: yup.string("must be a string").min(100, "Must be above 100 characters")
})

const Page = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm(
        {
            resolver: yupResolver(schema),
            shouldFocusError: true
        }
    );

    const AddNewProduct = (data) => {
        if (errors === null | errors === undefined) {
            console.log(errors);
        }

        // TODO: Upload Image first then call api to add data and the image url into db
        console.log(data)
    }


    return (
        <div className='w-full flex-1 flex flex-col flex-wrap justify-evenly gap-2 p-4 bg-slate-200 min-h-screen transition-all ease-linear '>

            <div className="w-full p-2 flex items-center justify-between align-middle">
                <h1 className='font-bold  text-yellow-600'>Adding New Product</h1>

                <Link href={'/Admin/Products'}
                    className='p-2 text-xs text-white   border-0 ring-o hover:bg-yellow-600 hover:rounded-lg hover:ring-0 bg-yellow-700 transition-all ease-linear duration-400'>
                    All Products
                </Link>
            </div>

            <div className='w-full p-2 shadow-inner flex align-middle justify-center gap-2 flex-wrap'>

                <form className='w-full max-w-[250px] md:max-w-md flex flex-col p-2 items-center justify-center gap-3 ' onSubmit={handleSubmit(AddNewProduct)}>
                    <h3 className='font-bold' >Add Product Details</h3>
                    <div className="w-full">
                        <label htmlFor="title">Title</label>
                        <input
                            {...register('title')}
                            id='title' name='title' type='text' placeholder='Product Title' className='w-full ring-0 outline-none border-0 p-2 rounded-lg text-semibold placeholder:text-sm placeholder:font-thin placeholder:text-gray-300 invalid:text-red-100 invalid:ring-2 invalid:ring-red-300'
                        />
                        {errors.title &&
                            <p className='text-xs text-red-500 italic font-thin'>
                                {errors.title.message}</p>
                        }
                    </div>
                    <div className="w-full">
                        <label htmlFor="price">Price</label>
                        <input {...register('price')} id='price' name='price' type='number' placeholder='Product Price' className='w-full ring-0 outline-none border-0 p-2 rounded-lg text-semibold placeholder:text-sm placeholder:font-thin placeholder:text-gray-300 invalid:text-red-100 invalid:ring-2 invalid:ring-red-300 ' />
                        {errors.price &&
                            <p className='text-xs text-red-500 italic font-thin'>
                                {errors.price?.message}
                            </p>
                        }

                    </div>
                    <div className="w-full">
                        <label htmlFor="discountPrice">Discount Price</label>
                        <input {...register('discountPrice')} id='discountPrice' name='discountPrice' type='number' placeholder='Discount Price' className='w-full ring-0 outline-none border-0 p-2 rounded-lg text-semibold placeholder:text-sm placeholder:font-thin placeholder:text-gray-300 invalid:text-red-100 invalid:ring-2 invalid:ring-red-300 ' />
                        {errors.discountPrice &&
                            <p className='text-xs text-red-500 italic font-thin'>
                                {errors.discountPrice?.message}
                            </p>
                        }
                    </div>

                    <div className="w-full">
                        <label htmlFor="description">Description</label>
                        <textarea {...register('description')} rows={5} id='description' name='description' placeholder='Discount Price' className='w-full ring-0 outline-none border-0 p-4 rounded-lg text-semibold placeholder:text-sm placeholder:font-thin placeholder:text-gray-300 invalid:text-red-100 invalid:ring-2 invalid:ring-red-300 ' />
                        {errors.description &&
                            <p className='text-xs text-red-500 italic font-thin'>
                                {errors.description?.message}
                            </p>
                        }
                    </div>

                    <div className="w-full p-1 flex flex-col">
                        <label htmlFor="coverImage">Cover Image</label>
                        <input className='py-2 rounded-md ring-0 outline-none' type='file' accept='.jpeg,.jpg,.png' max={10} id='coverImage' />

                    </div>
                    <button className='p-2 text-white bg-yellow-700  ring-0 outline-none hover:rounded-xl hover:bg-yellow-950 transition-all ease-in-out delay-100 duration-500' type="submit">
                        Add Product
                    </button>
                </form>
            </div>



            <ToastContainer />
        </div>
    )
}

export default Page