import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Allvideo = () => {
  return (
    <div className="flex flex-row ">
        <Sidebar/>
       <div className='w-full p-8 bg-[#EBF4F6]'>
       <Navbar/>
       </div>
    </div>
  )
}

export default Allvideo