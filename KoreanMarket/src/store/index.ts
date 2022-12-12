import { configureStore } from '@reduxjs/toolkit'
import { loadingReducer } from './Loading/LoadingReducer'

export const reducers = {
  loading: loadingReducer,
}

export const store = configureStore({
  reducer: reducers,
})
