import React from 'react'
import { Logo } from '../elements/Logo/Logo'
export const Footer = () => (
  <footer className="bg-black p-4 text-center text-white">
    <div className="flex items-center justify-between px-8 py-4">
      <div>
        <Logo color="#ffffff" />
      </div>
      <p className="text-sm">© 2023 RIMAC Seguros y Reaseguros.</p>
    </div>
  </footer>
)
