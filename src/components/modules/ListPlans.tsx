import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useGetAllPlansQuery } from '@/module/plans/store/apiPlans'
import { useGetUserQuery } from '@/module/users/store/apiUser'
import { setUser } from '@/module/users/store/sliceUser'
import iconHome from '@/shared/assets/icons/iconHome.svg'
import { calcularEdad } from '@/shared/utils/calcular'
import { RootState } from '@/store/store'
import { CardPlansDefault } from '../widgets/card-plans'
import LoaderListPlans from './LoaderListPlans'

const PlansList = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { data: plansData, isLoading: isLoadingPlans } = useGetAllPlansQuery()
  const { data: userData, isLoading: isLoadingUser } = useGetUserQuery()
  const user = useSelector((state: RootState) => state.userState.user)

  useEffect(() => {
    // Solo ejecutar si hay datos de usuario y estado de ubicación
    if (userData && location.state) {
      dispatch(setUser({ ...userData, ...location.state }))
    }
  }, [userData, location.state]) // Asegúrate de incluir dispatch en las dependencias

  // Cargar estado
  if (isLoadingPlans || isLoadingUser) {
    return <LoaderListPlans />
  }

  // Calcular edad
  const currentAge = userData ? calcularEdad(userData.birthDay || '02-04-1990') : 0
  const dataFiltered =
    plansData && Array.isArray(plansData.list)
      ? plansData.list.filter((item: any) => item.age <= currentAge)
      : []

  return (
    <div className="flex w-full flex-wrap justify-center gap-8">
      {userData &&
        plansData &&
        dataFiltered.map((item, idx: number) => (
          <CardPlansDefault iconHome={iconHome} userData={user as any} data={item} key={idx} />
        ))}
    </div>
  )
}

export default PlansList
