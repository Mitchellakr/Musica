import React from 'react'
import Aside from '../Components/Aside'
import Chartbottom from '../Components/Chartbottom'
import ChartTop from '../Components/ChartTop'
import Navbar from '../Components/Navbar'
import Player from '../Components/Player'

const Collections = () => {
    return (
        <div className='w-full bg-lead bg-no-repeat bg-cover relative  before:content-[""] before:absolute before:bottom-0 before:left-0 before:z[10] before:w-full before:h-full before:bg-[#1e1e1ee3]'>
            <Navbar/>
            <div className="w-full">
                <div className="container mx-auto mt-6 flex gap-[3em]">
                    <Aside />
                    <div className='w-full gap-10'>
                        <ChartTop />
                        <Chartbottom />
                    </div>
                </div>
            </div>
            <Player />
        </div>
    )
}

export default Collections