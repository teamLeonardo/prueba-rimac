import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import DefaultLayout from '@/components/layouts/default.layout'
import HomePage from './home/homePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      // {
      //   path: '/about',
      //   element: <About />,
      // },
    ],
  },
])
