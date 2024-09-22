import React, { Suspense } from 'react'

const PlansList = React.lazy(() => import('@/components/modules/ListPlans'))
const PlansPage = () => (
  <div className="w-full">
    <Suspense fallback={<div className="text-red-500">Loading...</div>}>
      <PlansList />
    </Suspense>
  </div>
)

export default PlansPage
