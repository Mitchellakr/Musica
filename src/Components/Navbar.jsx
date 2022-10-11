import React from 'react'
import logo from '../Assets/Icons/logo.svg'
import search from '../Assets/Icons/search.svg'

const Navbar = () => {
    return (
        <div className='w-full container py-4 mx-auto flex items-center justify-start gap-[5em] z-50 relative'>
            <img src={logo} alt="logo" />
            <div className='flex items-center gap-5 w-full'>
                <img src={search} alt="search" />
                <input type="text" placeholder='Search artists' className='bg-[transparent] text-white w-full' />
            </div>
        </div>
    )
}

export default Navbar