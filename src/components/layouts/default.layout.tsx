import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from '../modules/Footer'
import { Header } from '../modules/Header'

const DefaultLayout = () => {
  return (
    <div className="relative flex max-h-screen flex-col overflow-y-auto overflow-x-hidden">
      <Header />
      <main className="relative min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
export default DefaultLayout
