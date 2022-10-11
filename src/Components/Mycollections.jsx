import React from 'react'
import play from '../Assets/Icons/Play.svg'
import art1 from '../Assets/Images/musicArt/Art1.png'
import art2 from '../Assets/Images/musicArt/Art2.png'
import art4 from '../Assets/Images/musicArt/Art4.png'
import art5 from '../Assets/Images/musicArt/Art5.png'

const mycollection = [
    {
        id: 1,
        bg: art1,
    },
    {
        id: 2,
        bg: art4,
    },
    {
        id: 3,
        bg: art2,
    },
    {
        id: 4,
        bg: art5,
    },
]

const Mycollections = () => {
    return (
        <>
            {
                mycollection.map((collection) => (
                    <div key={collection.id} className={`cursor-pointer group overflow-hidden relative rounded-3xl w-[260px] h-[260px] bg-no-repeat bg-cover before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:z-10 before:bg-gradient-to-t before:from-black`}>
                        <img src={collection.bg} alt="" className='absolute top-0 right-0 w-full h-full transition-all duration-300 group-hover:scale-150' />
                        <div className='absolute bottom-6 px-6 left-0 w-full flex items-center justify-between'>
                            <div className='z-20 text-white '>
                                <h2 className='text-2xl'>Limits</h2>
                                <p className='opacity-50'>john watts</p>
                            </div>
                            <button className="transition-all duration-300 z-20 rounded-full p-4 bg-yellow-300 opacity-0 group-hover:opacity-100">
                                <img src={play} alt="play" />
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Mycollections