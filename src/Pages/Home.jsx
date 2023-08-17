import React from 'react'
import { Outlet } from 'react-router'

export default function Home() {
  return (
    <div className='flex w-screen bg-[#202124]'>
      <div className='w-[20%]'>
        Sidebar
      </div>
        <div className='w-[80%]'>
        <Outlet/>
        </div>
    </div>
  )
}
