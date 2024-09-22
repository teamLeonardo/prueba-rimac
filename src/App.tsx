import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/pages/index.router'

export default function App() {
  return <RouterProvider router={router} />
}
