import { createReducer } from '@reduxjs/toolkit'
import { show, hide } from './LoadingAction'
import { ILoadingState } from 'src/models/store'

const initialState: ILoadingState = {
  show: false,
}

export const loadingReducer = createReducer(initialState, (builder) => {
  builder.addCase(show, () => {
    return { show: true }
  }),
    builder.addCase(hide, () => {
      return { show: false }
    })
})
