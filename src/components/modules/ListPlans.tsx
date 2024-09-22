import React from 'react'
import { useGetAllPlansQuery } from '@/module/plans/store/apiPlans'
import iconHome from '@/shared/assets/icons/iconHome.svg'
import { calcularEdad } from '@/shared/utils/calcular'
import { CardPlansDefault } from '../widgets/card-plans'

const PlansList = () => {
  const { data, isLoading } = useGetAllPlansQuery()
  if (isLoading) {
    const dataFacke = Array(3).fill(null)
    return (
      <div className="flex w-full flex-wrap justify-center gap-8">
        {dataFacke.map((_: any, idx: number) => (
          <div
            key={idx}
            className="card h-[687px] w-[288px] gap-4  border border-[#cccccc] p-[68px_32px_48px_32px] shadow-2xl"
          >
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-12 w-full rounded-full"></div>
          </div>
        ))}
      </div>
    )
  }
  const currentAge = calcularEdad('02-04-1990')
  const dataFiltered = data?.list.filter((item: any) => item.age <= currentAge)
  return (
    <>
      {currentAge}
      <div className="flex w-full flex-wrap justify-center gap-8">
        {dataFiltered?.map((item, idx: number) => (
          <CardPlansDefault iconHome={iconHome} data={item} key={idx} />
        ))}
      </div>
    </>
  )
}

export default PlansList
