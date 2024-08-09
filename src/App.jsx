import React from 'react'
import SIdebar from './components/SIdebar'
import Player from './components/Player'

const App = () => {
  return (
    <div className='bg-[#a2d2ff]  h-screen'>
      <div className='h-[90%]'>
        <SIdebar/>
      </div>
      <Player/>
    </div>
  )
}

export default App