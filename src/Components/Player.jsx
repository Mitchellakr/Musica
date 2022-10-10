import React from 'react'
import shuffle from '../Assets/Icons/shuffle.svg'
import previous from '../Assets/Icons/previous.svg'
import play from '../Assets/Icons/Play.svg'
import next from '../Assets/Icons/next.svg'
import volume from '../Assets/Icons/volume.svg'
import repeat from '../Assets/Icons/repeat.svg'
import Art1 from '../Assets/Images/musicArt/Art1.png'

const Player = () => {
    return (
        <div className="fixed left-0 bottom-0 w-full py-6 backdrop-blur-sm">
            <div className="container mx-auto flex gap-4 justify-between items-center  ">
                <div className="flex justify-center items-center gap-4 w-fit">
                    <img src={Art1} alt="current music" className='h-[50px] w-[50px] rounded-xl' />
                    <div className="flex flex-col items-start justify-center w-fit">
                        <p className="text-white w-full">Seasons in</p>
                        <label className="text-[#B3B3B3] w-full">James</label>
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-center items-center w-[70%]">
                    <div className="flex items-center gap-[3em] w-fit">
                        <button>
                            <img src={shuffle} alt="shuffle" />
                        </button>

                        <button>
                            <img src={previous} alt="previous" />
                        </button>

                        <button className="rounded-full p-4 bg-yellow-300">
                            <img src={play} alt="play" />
                        </button>

                        <button>
                            <img src={next} alt="next" />
                        </button>

                        <button>
                            <img src={repeat} alt="repeat" />
                        </button>
                    </div>

                    {/* seeker slider */}

                    <div className="flex gap-4 items-center w-full">
                        <input type="range" className="w-full h-[3px] bg-green-400" />
                    </div>
                </div>

                {/* volume slider */}

                <div className="flex gap-4 items-center justify-center w-[15%]">
                    <button>
                        <img src={volume} alt="volume" />
                    </button>
                    <input type="range" className="w-full h-[3px] bg-green-400" />
                </div>
            </div>
        </div>
    )
}

export default Player