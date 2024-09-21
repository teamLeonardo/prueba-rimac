import React from 'react'
// Form.js
// import { useState } from 'react';
import imgFam from '@/assets/Frame 1000004298.png'
import { GroupInput } from './components/molecules'
export const Form = () => {
  // const [idType, setIdType] = useState('DNI');
  // const [idNumber, setIdNumber] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [privacyPolicy, setPrivacyPolicy] = useState(false);
  // const [commercialComm, setCommercialComm] = useState(false);

  return (
    <form className="w-full space-y-4">
      <div className="flex w-full space-x-4">
        {/* <Select value={idType} onValueChange={setIdType}>
          <SelectTrigger className="w-1/3">
            <SelectValue placeholder="Tipo de documento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="DNI">DNI</SelectItem>
            <SelectItem value="CE">CE</SelectItem>
            <SelectItem value="Pasaporte">Pasaporte</SelectItem>
          </SelectContent>
        </Select> */}
        <GroupInput />
      </div>
      <div className="flex h-[56px] w-full space-x-4">
        <input
          type="text"
          placeholder="Celular"
          // value={idNumber}
          // onChange={(e) => setIdNumber(e.target.value)}
          className="input-bordered input join-item h-full  w-full"
        />
      </div>
      <div className="space-y-2">
        <div className="form-control grid grid-cols-[auto_1fr] items-center gap-4">
          <input type="checkbox" id="$check-private" defaultChecked className="checkbox" />
          <label htmlFor="$check-private" className="label cursor-pointer">
            <span className="label-text text-start">Acepto la Política de Privacidad</span>
          </label>
        </div>
        <div className="form-control grid grid-cols-[auto_1fr] items-center gap-4">
          <input type="checkbox" id="$check-politic" defaultChecked className="checkbox" />
          <label htmlFor="$check-politic" className="label cursor-pointer">
            <span className="label-text text-start">
              Acepto la Política Comunicaciones Comerciales
            </span>
          </label>
        </div>
      </div>
      <p className="text-sm">
        <a href="#" className="font-blod underline">
          Aplican Términos y Condiciones.
        </a>
      </p>
      <button className="w-full bg-black text-white">Cotiza aquí</button>
    </form>
  )
}

const Header = () => (
  <header className="flex items-center justify-between bg-transparent p-4">
    <img src="/placeholder.svg" alt="RIMAC Logo" width={100} height={40} />
    <div className="flex items-center">
      <span className="mr-2 text-sm">¡Compra por este medio!</span>
      <a href="tel:014116001" className="text-lg font-bold">
        (01) 411 6001
      </a>
    </div>
  </header>
)
const Footer = () => (
  <footer className="bg-black p-4 text-center text-white">
    <img src="/placeholder.svg" alt="RIMAC Logo" width={100} height={40} className="mx-auto mb-2" />
    <p className="text-sm">© 2023 RIMAC Seguros y Reaseguros.</p>
  </footer>
)

const MainContent = () => (
  <main className="relative min-h-screen flex-grow p-8">
    <div className="mx-auto  grid max-w-6xl grid-cols-2 items-center md:flex-row">
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
        <div className="badge badge-lg rounded-md bg-gradient-to-r from-[#00F4E2] to-[#00FF7F] font-bold">
          Seguro Salud Flexible
        </div>
        <h1 className="mb-4 mt-4 text-4xl font-bold">Creado para ti y tu familia</h1>
        <p className="mb-6 font-bold">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
        </p>
        <Form />
      </div>
    </div>
  </main>
)
export default function App() {
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
      <MainContent />
      <Footer />
    </div>
  )
}
