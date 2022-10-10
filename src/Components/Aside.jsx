import React from 'react'
import home from '../Assets/Icons/Home.svg'
import radio from '../Assets/Icons/radio.svg'
import playlist from '../Assets/Icons/playlist.svg'
import videos from '../Assets/Icons/videos.svg'
import profile from '../Assets/Icons/profile.svg'
import logout from '../Assets/Icons/Logout.svg'

const Aside = () => {
  return (
    // <div className='fixed w-fit flex flex-col gap-4'>
    <div className='sticky w-fit flex-none flex flex-col gap-4'>

      {/* first nav */}

      <div className="py-4 px-1 justify-center flex flex-col items-center gap-6 rounded-full bg-[#1A1E1F]">
        <img src={home} alt="" />
        <img src={playlist} alt="" />
        <img src={radio} alt="" />
        <img src={videos} alt="" />
      </div>

      {/* second nav */}

      <div className="py-4 px-1 justify-center flex flex-col items-center gap-6 rounded-full bg-[#1A1E1F]">
        <img src={profile} alt="" />
        <img src={logout} alt="" />
      </div>
    </div>
  )
}

export default Aside