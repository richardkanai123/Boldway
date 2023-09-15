import React from 'react'

const InfoCard = ({ CardTitle, figure, details, icon }) => {
    return (
        <div className='bg-slate-50  rounded-xl px-2 py-1 h-32 min-w-[250px] max-w-[300px]  flex flex-1 flex-col gap-2 shadow-md  ring-slate-400 '>
            <div className="w-full flex align-middle justify-around items-center border-b">
                <h1 className='text-base font-medium text-left'>{CardTitle}</h1>
                {icon}
            </div>
            <p className='text-4xl font-bold'>{figure}</p>
            <p className='text-[10px] font-extralight  italic'>{details}</p>
        </div>
    )
}

export default InfoCard