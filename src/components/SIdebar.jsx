import React from 'react'
import {assets} from '../assets/assets'

const SIdebar = () => {
  return (
    <div className=' w-[25%] h-full flex-col text-white lg:flex p-2 gap-2 hidden'>
        <div className='bg-[#121212] h-[15%] rounded flex-col flex justify-around '>
            <div className='flex gap-3 items-center cursor-pointer pl-8'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className=' font-bold'>Home</p>
            </div>
            <div className='flex gap-3 items-center cursor-pointer pl-8'>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className=' font-bold'>Search</p>
            </div>
        </div>
        <div className=' h-[85%] rounded bg-[#121212] '>
            <div className=' p-4 flex items-center justify-between'> 
                <div className='flex gap-3 items-center cursor-pointer'>
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className=' font-bold'>Your Library</p>
                </div>
                <div className='flex gap-3 items-center cursor-pointer'>
                    <img className='w-5' src={assets.arrow_icon} alt="" />
                    <img className='w-5' src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className='p-4 m-2 bg-[#219ebc] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                <h1>Create Your First Playlist</h1>
                <p className='font-light'>Get started easily—let us guide you.</p>
                <button className='bg-white px-4 py-1.5 text-black rounded-full mt-4'>Create Playlist</button>
            </div>
            <div className='p-4 m-2 bg-[#0077b6] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                <h1>Discover Podcasts to Follow</h1>
                <p className='font-light'>Stay updated with the latest episodes.</p>
                <button className='bg-white px-4 py-1.5 text-black rounded-full mt-4'>Browse Podcasts</button>
            </div>
        </div>
    </div>
  )
}

export default SIdebar