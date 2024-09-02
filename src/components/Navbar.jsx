import React from 'react'
import { Link } from 'react-router-dom'
import {assets} from '../assets/assets'
import Premium from './Premium'

const Navbar = () => {
  return (
    <div className=' w-full flex justify-between items-center '>
      <div className='flex items-center gap-3'>
        <img className='w-8 p-2 cursor-pointer rounded-2xl ' src={assets.arrow_left} alt="" />
        <img className='w-8 p-2 cursor-pointer rounded-2xl ' src={assets.arrow_right} alt="" />
      </div>
      <div className=' flex items-center gap-4'>
        <Link to='/premium' >
        Premium 
        </Link>
        <Link>
         Install the App 
        </Link>
        <Link>
         Login
        </Link>
        <Link>
         Sign In
        </Link>
      </div>
    </div>
  )
}

export default Navbar