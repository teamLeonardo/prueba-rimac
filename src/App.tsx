import React from 'react'
// Form.js
// import { useState } from 'react';
import imgFam from '@/assets/Frame 1000004298.png'
export const Form = () => {
  // const [idType, setIdType] = useState('DNI');
  // const [idNumber, setIdNumber] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [privacyPolicy, setPrivacyPolicy] = useState(false);
  // const [commercialComm, setCommercialComm] = useState(false);

  return (
    <form className="space-y-4">
      <div className="flex space-x-4">
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
        <input
          type="text"
          placeholder="Nro. de documento"
          // value={idNumber}
          // onChange={(e) => setIdNumber(e.target.value)}
          className="w-2/3"
        />
      </div>
      <input
        type="tel"
        placeholder="Celular"
        // value={phoneNumber}
        // onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="privacy"
            // defaultChecked={privacyPolicy}
            // onChange={setPrivacyPolicy}
          />
          <label htmlFor="privacy" className="text-sm">
            Acepto la Política de Privacidad
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="commercial"
            // defaultChecked={commercialComm}
            // onCheckedChange={setCommercialComm}
          />
          <label htmlFor="commercial" className="text-sm">
            Acepto la Política Comunicaciones Comerciales
          </label>
        </div>
      </div>
      <p className="text-sm">
        <a href="#" className="underline">
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
    <div className="mx-auto flex max-w-6xl flex-col items-center md:flex-row">
      <div className="mb-8 md:mb-0 md:w-1/2 ">
        <img
          src={imgFam}
          alt="Happy family"
          width={500}
          height={300}
          className="relative z-10 rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 md:pl-12">
        <div>
          <div className="badge badge-lg bg-gradient-to-r from-[#00F4E2] to-[#00FF7F]">
            Seguro Salud Flexible
          </div>
          <h1 className="mb-4 text-4xl font-bold">Creado para ti y tu familia</h1>
          <p className="mb-6">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100%
            online.
          </p>
          <Form />
        </div>
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
