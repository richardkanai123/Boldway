import React from 'react'
import NavigationMenu from '../_Components/CustomerComponents/NavigationMenu'

const ClientLayout = ({ children }) => {
    return (
        <div className='w-full max-w-7xl min-h-screen mx-auto my-0 flex flex-col items-center '>
            <NavigationMenu />
            {children}
        </div>
    )
}

export default ClientLayout