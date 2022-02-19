import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { serviceApi } from '../Slice/serviceApi.js'
import servicesReducers from '../Slice/servicesSlice.js'
export const store = configureStore({
  reducer: {
      services:servicesReducers,
      [serviceApi.reducerPath]: serviceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(serviceApi.middleware),
})
setupListeners(store.dispatch)