import React from 'react'
import like from '../Assets/Icons/like.svg'
import art from '../Assets/Images/musicArt/Art5.png'
import art2 from '../Assets/Images/musicArt/Art2.png'
import art4 from '../Assets/Images/musicArt/Art4.png'

const topcharts = [
    {
        id: 1,
        name: 'Golden age of 80s',
        artist: 'Sean swadder',
        timelapse: '2:34:45',
        img: art
    },
    {
        id: 2,
        name: 'Reggae "n" blues',
        artist: 'Dj YK mule',
        timelapse: '1:02:42',
        img: art2
    },
    {
        id: 3,
        name: 'Tomorrows tunes',
        artist: 'Obi Datti',
        timelapse: '2:01:25',
        img: art4
    }
]

const TopCharts = () => {
    return (
        <div className='flex-grow'>
            <h3 className='pb-4 text-white text-2xl font-semibold'>Top charts</h3>
            {
                topcharts.map((chart) => (
                    <div key={chart.id} className='mb-4 rounded-xl text-white bg-[#1A1E1F] p-4 flex items-center justify-between flex-grow'>
                        <div className='cursor-pointer flex items-center gap-3'>
                            <img src={chart.img} alt="" className='h-[60px]' />
                            <div>
                                <h2>{chart.name}</h2>
                                <p className='text-sm text-[#efeee140]'>{chart.artist}</p>
                                <p className='text-sm'>{chart.timelapse}</p>
                            </div>
                        </div>
                        <button className='p-2 border-solid border-[1px] border-gray-700 rounded-full '>
                            <img src={like} alt="" />
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default TopCharts