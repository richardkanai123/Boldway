import React from 'react'

const Greetings = ({ username }) => {
    return (
        <div className='w-full'>
            <p className='font-light italic text-xs'>Hello, {username}!</p>
        </div>
    )
}

export default Greetings