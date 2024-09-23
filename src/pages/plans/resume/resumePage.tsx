import React from 'react'
import { useLocation } from 'react-router-dom'
export default function PlansResume() {
  const location = useLocation()
  const data = location.state // Recuperar los datos enviados

  return (
    <div>
      Resume
      {JSON.stringify(data)}
    </div>
  )
}
