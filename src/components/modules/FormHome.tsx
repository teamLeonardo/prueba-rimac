import React from 'react'
import { GroupInput } from '@/components/widgets'
const FormHome = () => {
  return (
    <form className="w-full space-y-4">
      <div className="flex w-full space-x-4">
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
        <a href="#" className="text-xs font-bold underline">
          Aplican Términos y Condiciones.
        </a>
      </p>
      <button className="btn-lg btn rounded-full bg-black px-10 text-white">Cotiza aquí</button>
    </form>
  )
}

export default FormHome
