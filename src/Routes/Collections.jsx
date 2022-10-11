import React from 'react'
import Aside from '../Components/Aside'
import Mycollections from '../Components/Mycollections'
import Navbar from '../Components/Navbar'
import Player from '../Components/Player'

const Collections = () => {
    return (
        <div className='w-full'>
            <Navbar />
            <div className="w-full">
                <div className="container mx-auto mt-6 flex gap-[3em]">
                    <Aside />
                    <div className='w-full gap-10'>
                        <div className='flex items-center gap-4'>
                            <button className='py-2 px-6 rounded-full bg-[#FACD66]'>My collection</button>
                            <button className='py-2 px-6 rounded-full border border-white border-solid opacity-20 text-white'>Likes</button>
                        </div>
                        <div className='py-6 flex items-center gap-6'>
                            <Mycollections />
                        </div>
                    </div>
                </div>
            </div>
            <Player />
        </div>
    )
}

export default Collections