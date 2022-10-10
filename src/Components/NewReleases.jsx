import React from 'react'
import art1 from '../Assets/Images/musicArt/Art1.png'
import art2 from '../Assets/Images/musicArt/Art2.png'
import art3 from '../Assets/Images/musicArt/Art3.png'
import art4 from '../Assets/Images/musicArt/Art4.png'
import art5 from '../Assets/Images/musicArt/Art5.png'

const newReleases = [
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

const NewReleases = () => {
    return (
        <div className='w-full mt-10'>
            <h2 className='text-white text-xl font-semibold'>New releases.</h2>
            <div className="mt-5 flex gap-6 justify-start items-center snap-x snap-mandatory overflow-x-scroll">
                {
                    newReleases.map((release) => (
                        <div key={release.id}>
                            <img src={release.img} alt="" />
                            <p>{release.title}</p>
                            <p>{release.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NewReleases