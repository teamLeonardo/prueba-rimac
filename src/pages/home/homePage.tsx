import React from 'react'

import imgFam from '@/assets/Frame 1000004298.png'
import FormHome from '@/components/modules/FormHome'

const HomePage = () => (
  <div className="mx-auto grid max-w-6xl grid-cols-2 items-center p-8 md:flex-row">
    <div className="mb-8 md:mb-0 ">
      <img
        src={imgFam}
        alt="Happy family"
        width={480}
        height={560}
        className="relative z-10 rounded-lg shadow-lg"
      />
    </div>
    <div className="self-baseline md:mr-[9rem] md:pl-12">
      <div className="badge badge-lg rounded-md bg-gradient-to-r from-[#00F4E2] to-[#00FF7F] text-sm font-bold">
        Seguro Salud Flexible
      </div>
      <h1 className="mb-4 mt-4 text-4xl font-bold">Creado para ti y tu familia</h1>
      <p className="mb-6 font-bold">
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
      </p>
      <FormHome />
    </div>
  </div>
)

export default HomePage
