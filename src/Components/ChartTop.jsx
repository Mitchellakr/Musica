import React from 'react'
import play from '../Assets/Icons/Play.svg'
import lead from '../Assets/Images/musicArt/Lead-image.png'
import addcollection from '../Assets/Icons/music-square-add.svg'
import heartred from '../Assets/Icons/Heartred.svg'


const ChartTop = () => {
    return (
        <div className='flex items-end gap-6 w-[70%] '>
            <img className='z-[1]' src={lead} alt="" />
            <div>
                <h2 className="text-3xl font-semibold text-white opacity-90">Tomorrow's tunes</h2>
                <p className='text-white opacity-80 py-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe natus unde accusantium nihil consectetur dicta numquam, recusandae ipsum alias. Dolorem!</p>
                <p className='text-white opacity-80 pb-8 text-sm'>64 songs ~ 16 hrs+</p>
                <div className="text-white text-sm relative z-[100] flex gap-2 items-center">
                    <button className='flex gap-2 items-center rounded-full py-2 px-4 bg-gray-600'>
                        <button className="rounded-full p-1 bg-yellow-300"><img src={play} alt="play" /> </button>
                        <p>play all</p>
                    </button>
                    <button className='flex items-center gap-2 rounded-full py-2 px-4 bg-gray-600'>
                        <img src={addcollection} alt="" />
                        <p>Add to collection</p>
                    </button>
                    <button className='rounded-full p-[10px] bg-gray-600'>
                        <img src={heartred} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChartTop