import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../shared/ui/components/Navbar '

const MainLayout = () => {

  console.log("mainLayout")

  return (
    <div className='bg-black w-full h-screen overflow-scroll'>
        <Navbar/>
        <div className='px-6'>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout