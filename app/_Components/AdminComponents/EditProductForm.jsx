'use client'
import Link from 'next/link';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { IoChevronBackCircleSharp } from 'react-icons/io5';
import { RxSlash } from 'react-icons/rx';

const schema = yup.object().shape({
    title: yup.string('must be a string').required("Required"),
    price: yup.number().required().positive().integer(),
    discountPrice: yup.number().required().positive().integer(),
    description: yup.string("must be a string").min(100, "Must be above 100 characters"),
})

const EditProductForm = ({ productData }) => {

    const { id, title, description, colors, imageUrl, price, discountPrice, discounted } = productData

    const Router = useRouter()

    const { register, handleSubmit, formState: { errors }, reset } = useForm(
        {
            resolver: yupResolver(schema),
            shouldFocusError: true,
            defaultValues: {
                title,
                description,
                price,
                discountPrice,
            }

        }
    );

    const EditExistingProduct = (data) => {
        if (errors === null | errors === undefined) {
            console.log(errors);
        }

        toast.success("Updated")
        // TODO: Upload Image first then call api to add data and the image url into db
        console.log(data)

        reset();

        // redirect to products
        Router.push("/Admin/Products")
    }


    return (
        <div className='w-[90%] self-center flex-1 flex flex-col flex-wrap justify-evenly gap-2 p-4 bg-slate-200 min-h-screen transition-all ease-linear '>

            <div className="w-full p-2 flex items-center justify-between align-middle">
                <div className='p-1 flex items-center gap-2   align-middle'>
                    <Link className='text-yellow-700 font-extrabold' href={"/Admin/Products"}>
                        <IoChevronBackCircleSharp />
                    </Link>
                    <span className='text-xl font-bold text-yellow-900'> <RxSlash /> </span>
                    <h1 className='font-semibold  text-yellow-700'>Editing Product:{id}</h1>
                </div>

                <Link href={'/Admin/Products/addnew'}
                    className='p-2 text-xs text-white   border-0 ring-o hover:bg-yellow-600 hover:rounded-lg hover:ring-0 bg-yellow-700 transition-all ease-linear duration-400'>
                    Add new
                </Link>
            </div>

            <div className='w-full p-2 shadow-inner flex align-middle justify-center gap-2 flex-wrap'>

                <form className='w-full max-w-[250px] md:max-w-md flex flex-col p-2 items-center justify-center gap-4 ' onSubmit={handleSubmit(EditExistingProduct)}>
                    <Image width={150} height={100} src={imageUrl} alt={title + 'image'} />
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
                        <label htmlFor="coverImage">New Cover Image</label>
                        <input type='file' accept='.jpeg,.jpg,.png' max={10} />

                    </div>
                    <button className='p-2 text-white rounded-md bg-yellow-700  ring-0 outline-none hover:rounded-full hover:bg-yellow-950 transition-all ease-in-out delay-100 duration-500' type="submit">
                        Update
                    </button>
                </form>
            </div>



            <ToastContainer />
        </div>
    )
}

export default EditProductForm