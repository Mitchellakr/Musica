import React from 'react'
import Aside from '../Components/Aside'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import NewReleases from '../Components/NewReleases'
import Player from '../Components/Player'
import Popular from '../Components/Popular'
import TopCharts from '../Components/TopCharts'

const Home = () => {
    return (
        <div className='w-full'>
            <Navbar />
            <div className="w-full">
                <div className="container mx-auto mt-6 flex gap-[3em]">
                    <Aside />
                    <div className='md:flex w-full gap-10 block px-4'>
                        <Hero />
                        <TopCharts />
                    </div>
                </div>
                <div className='container mx-auto mt-6 gap-[3em] px-4'>
                    <NewReleases />
                    <Popular />
                </div>
            </div>
            <Player />
        </div>
    )
}

export default Home