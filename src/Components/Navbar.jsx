import React from 'react'
import logo from '../Assets/Icons/logo.svg'
import search from '../Assets/Icons/search.svg'

// NavLink
import home from '../Assets/Icons/Home.svg'
import radio from '../Assets/Icons/radio.svg'
import playlist from '../Assets/Icons/playlist.svg'
import videos from '../Assets/Icons/videos.svg'
import profile from '../Assets/Icons/profile.svg'
import logout from '../Assets/Icons/Logout.svg'
import { Link } from 'react-router-dom'

const navlinks = [
    {
        id: 1,
        icon: home,
        path: '/Home',
        name: 'Home'
    },
    {
        id: 2,
        icon: playlist,
        path: '/Collections',
        name: 'Playlist'
    },
    {
        id: 3,
        icon: radio,
        path: '/Home',
        name: 'Radio'
    },
    {
        id: 4,
        icon: videos,
        path: '/Home',
        name: 'Video'
    },
    {
        id: 5,
        icon: logout,
        path: '/Home',
        name: 'Logout'
    },
    {
        id: 6,
        icon: profile,
        path: '/Home',
        name: 'Profile'
    },
]

const Navbar = () => {

    const [nav, setNav] = React.useState(false)

    const handleNav = () => {
        setNav(!nav)
        console.log(!nav);
    }
    return (
        <div className='w-full container py-4 mx-auto flex items-center justify-start gap-6 md:gap-[5em] z-50 relative px-4'>
            <button onClick={handleNav} className='block z-[999] md:hidden'>
                <div className='h-1 w-7 bg-white mb-1'></div>
                <div className='h-1 w-7 bg-white mt-1'></div>
            </button>
            <img src={logo} alt="logo" />
            <div className='flex items-center gap-5 w-fit md:w-full  ml-auto'>
                <img src={search} alt="search" className='md:w-4 w-[30px]' />
                <input type="text" placeholder='Search artists' className='bg-[transparent] text-white hidden md:block ' />
            </div>

            {/* mobile menu */}

            <div className={`${nav ? 'block' : 'hidden'} md:hidden absolute text-white top-0 left-0 w-full h-screen bg-[#1D2123] z-[90] p-20 pt-40`}>
                {
                    navlinks.map((link) => (
                        <Link key={link.id} to={link.path} onClick={handleNav} className='flex gap-4 items-center pb-16'><img src={link.icon} alt="" className='w-[30px]' /><p className="text-2xl text-white">{link.name}</p></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar