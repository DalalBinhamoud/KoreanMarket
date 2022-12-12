import { createAction } from '@reduxjs/toolkit'
import { show, hide } from './LoadingAction'
import { loadingReducer } from './LoadingReducer'

describe('Loading Store', () => {
  it('show', () => {
    const initialState = { show: false }
    const newState = loadingReducer(initialState, show)

    expect(newState).toEqual({ show: true })
  })

  it('hide', () => {
    const initialState = { show: true }
    const newState = loadingReducer(initialState, hide)

    expect(newState).toEqual({ show: false })
  })

  it('should keep state if action is unknown', () => {
    const initialState = { show: true }
    const action = createAction('unknown')
    const newState = loadingReducer(initialState, action)
    expect(newState).toEqual(initialState)
  })
})
