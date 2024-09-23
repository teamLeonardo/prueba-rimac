import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import LoaderListPlans from '@/components/modules/LoaderListPlans'
import { selectIsOpenPlans } from '@/module/plans/store/slicePlans'

const PlansList = React.lazy(() => import('@/components/modules/ListPlans'))
const ListCardSelect = React.lazy(() => import('@/components/modules/ListCardSelect'))

const PlansPage = () => {
  // No necesitas envolver useSelector con startTransition
  const isOpen = useSelector(selectIsOpenPlans)

  return (
    <>
      <div className="mx-auto grid w-[544px] gap-4">
        <div className="mx-auto grid w-full gap-4">
          <h1 className="text-center text-5xl text-[40px] font-bold">
            Rocío ¿Para quién deseas cotizar?
          </h1>
          <p className="text-center text-base">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
        </div>
        {/* Esto puede ir sin Suspense si no está cargando asíncronamente */}
        <ListCardSelect />
      </div>
      {isOpen && (
        <div className="mx-auto w-8/12">
          <Suspense fallback={<LoaderListPlans />}>
            <PlansList />
          </Suspense>
        </div>
      )}
    </>
  )
}

export default PlansPage
