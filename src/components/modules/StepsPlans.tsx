import React from 'react'
import { StepsInput } from '../widgets/steps-input'
const StepsPlans = ({ step = 1 }: { step: number }) => {
  const dataSteps = {
    step1: 'Planes y coberturas',
    step2: 'Resumen',
  }

  return (
    <div className="hidden w-full justify-center bg-[#F0F4FF] py-4 md:flex">
      <StepsInput data={dataSteps} step={step} />
    </div>
  )
}

export default StepsPlans
