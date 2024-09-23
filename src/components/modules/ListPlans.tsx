import React from 'react'
import { useGetAllPlansQuery } from '@/module/plans/store/apiPlans'
import iconHome from '@/shared/assets/icons/iconHome.svg'
import { calcularEdad } from '@/shared/utils/calcular'
import { CardPlansDefault } from '../widgets/card-plans'
import LoaderListPlans from './LoaderListPlans'

const PlansList = () => {
  const { data, isLoading } = useGetAllPlansQuery()
  if (isLoading) {
    return <LoaderListPlans />
  }
  const currentAge = calcularEdad('02-04-1990')
  const dataFiltered = data?.list.filter((item: any) => item.age <= currentAge)
  return (
    <>
      <div className="flex w-full flex-wrap justify-center gap-8">
        {dataFiltered?.map((item, idx: number) => (
          <CardPlansDefault iconHome={iconHome} data={item} key={idx} />
        ))}
      </div>
    </>
  )
}

export default PlansList
