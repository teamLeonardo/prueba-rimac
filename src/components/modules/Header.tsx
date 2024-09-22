import React from 'react'
import { Logo } from '@/components/elements/Logo/Logo'

export const Header = () => (
  <header className="mx-auto flex w-[85%] items-center justify-between bg-transparent p-4">
    <div>
      <Logo />
    </div>
    <div className="flex items-center">
      <span className="mr-2 text-sm">¡Compra por este medio!</span>
      <a href="tel:014116001" className="text-lg font-bold">
        (01) 411 6001
      </a>
    </div>
  </header>
)
