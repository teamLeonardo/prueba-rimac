// src/store.ts
import { configureStore } from '@reduxjs/toolkit'
import { apiPlans } from '@/module/plans/store/apiPlans'

export const store = configureStore({
  reducer: {
    // Añade el slice de la API a la store
    [apiPlans.reducerPath]: apiPlans.reducer,
  },
  // Añade middleware para habilitar la caché y funcionalidades de RTK Query
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiPlans.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
