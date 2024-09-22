import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from '../modules/Footer'
import { Header } from '../modules/Header'

const DefaultLayout = () => {
  return (
    <div className="relative flex max-h-screen flex-col overflow-y-auto overflow-x-hidden bg-gradient-to-br from-purple-100 to-cyan-100">
      <div className="absolute left-0  top-0 z-0 h-screen w-[500px] -translate-x-[50%] ">
        <div className="absolute left-[0%] top-[40vh] h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_center,_#C333FF90_10%,_transparent_70%)]" />
        <div className="absolute left-[10%] top-[30vh] h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_center,_#C333FF90_10%,_transparent_70%)]" />
        <div className="absolute left-[-10%] top-[17vh] h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_center,_#C333FF90_10%,_transparent_70%)]" />
      </div>
      <div className="absolute right-0 top-0 z-0 h-screen w-[500px] translate-x-[50%]">
        <div className="absolute left-[10%] top-[2vh] h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_center,_#00F4E290_10%,_transparent_70%)]" />
        <div className="absolute left-[10%] top-[2vh] h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_center,_#00F4E290_10%,_transparent_70%)]" />
        <div className="absolute left-[-10%] top-[10vh] h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_center,_#00F4E290_10%,_transparent_70%)]" />
      </div>

      <Header />
      <main className="relative min-h-screen ">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
export default DefaultLayout
