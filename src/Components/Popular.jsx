import React from 'react'
import art1 from '../Assets/Images/musicArt/Art1.png'
import art2 from '../Assets/Images/musicArt/Art2.png'
import art3 from '../Assets/Images/musicArt/Art3.png'
import art4 from '../Assets/Images/musicArt/Art4.png'
import art5 from '../Assets/Images/musicArt/Art5.png'

const popularSongs = [
    {
        id: 1,
        img: art1,
        title: 'Life in a bubble',
        name: 'The van'
    },
    {
        id: 2,
        img: art2,
        title: 'Life in a bubble',
        name: 'The van'
    },
    {
        id: 3,
        img: art3,
        title: 'Life in a bubble',
        name: 'The van'
    },
    {
        id: 4,
        img: art4,
        title: 'Life in a bubble',
        name: 'The van'
    },
    {
        id: 5,
        img: art5,
        title: 'Life in a bubble',
        name: 'The van'
    },
    {
        id: 6,
        img: art1,
        title: 'Life in a bubble',
        name: 'The van'
    },
    {
        id: 7,
        img: art2,
        title: 'Life in a bubble',
        name: 'The van'
    },
    {
        id: 8,
        img: art4,
        title: 'Life in a bubble',
        name: 'The van'
    },
    {
        id: 9,
        img: art1,
        title: 'Life in a bubble',
        name: 'The van'
    },
    {
        id: 10,
        img: art5,
        title: 'Life in a bubble',
        name: 'The van'
    },
]

const Popular = () => {
    return (
        <div className='flex-grow mt-10 mb-[10em]'>
            <h2 className='text-white text-2xl font-semibold'>Popular in your area.</h2>
            <div className="flex gap-6 items-center w-full overflow-x-auto mt-5 bar">
                {
                    popularSongs.map((popularsong) => (
                        <div key={popularsong.id} className="cursor-pointer text-white min-w-fit">
                            <img src={popularsong.img} className='h-[200px] w-[200px]' alt="" />
                            <p className='pt-2'>{popularsong.title}</p>
                            <p className='opacity-40'>{popularsong.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Popular