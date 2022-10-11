import React from 'react'
import art from '../Assets/Images/musicArt/Art2.png'
import heart from '../Assets/Icons/Heart.svg'
import more from '../Assets/Icons/more-vertical.svg'

const songs = [
    {
        id: 1,
        img: '',
        title: 'let me love you',
        artist: 'Krisx',
        soa: 'Single',
        timelapse: '4:17',
    },
    {
        id: 2,
        img: '',
        title: 'Watin man go do',
        artist: 'Burna',
        soa: 'African giant',
        timelapse: '2:30',
    },
    {
        id: 3,
        img: '',
        title: 'Stand strong',
        artist: 'Davido',
        soa: 'Single',
        timelapse: '2:02',
    },
    {
        id: 4,
        img: '',
        title: 'Closa',
        artist: 'Ybee',
        soa: 'Obi datti',
        timelapse: '3:23',
    },
    {
        id: 5,
        img: '',
        title: 'Under the influence',
        artist: 'Chris brown',
        soa: 'Indigo',
        timelapse: '2:42',
    },
]
const Chartbottom = () => {
    return (
        <div className='py-10 z-[1] relative pb-[8em]'>
            {songs.map((song) => (
                <div key={song.id} className='grid grid-cols-5 items-center justify-between p-3 mb-4 rounded-lg bg-[#25292a] text-white'>
                    <div className='flex items-center gap-3'>
                        <img src={art} className='h-[50px] w-[50px] rounded-xl' alt="" />
                        <button><img src={heart} alt="" /></button>
                    </div>
                    <p>{song.title} ~ {song.artist}</p>
                    <p className='justify-self-center'>{song.soa}</p>
                    <p className='justify-self-end'>{song.timelapse}</p>
                    <button className='justify-self-end'><img src={more} alt="" /></button>
                </div>
            ))}
        </div>
    )
}

export default Chartbottom