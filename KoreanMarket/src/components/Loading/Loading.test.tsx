import { render, waitFor, act } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import Loading from '.'
import { store } from 'src/store'
import { show, hide } from 'src/store/Loading/LoadingAction'
import { loadingReducer } from 'src/store/Loading/LoadingReducer'
import { configureStore } from '@reduxjs/toolkit'

//TODO: test redux dispatch
describe('Loading component', () => {
  //   beforeEach(() => {
  //     render(
  //       <Provider store={store}>
  //         <Loading />
  //       </Provider>,
  //     )
  //   })
  //   it("Should hide loading component if it's not loading", () => {
  //     const screen = render(
  //       <Provider store={store}>
  //         <Loading />
  //       </Provider>,
  //     )
  //     const loading = screen.queryAllByTestId('loading')
  //     store.dispatch(hide())
  //     expect(loading.length).toEqual(0)
  //   })
  //   it("Should show loading component if it's loading", async () => {
  //     const comp = render(
  //       <Provider store={store}>
  //         <Loading />
  //       </Provider>,
  //     )
  //     const loading = comp.queryAllByTestId('loading')
  //     store.dispatch(show())
  //     await waitFor(() => expect(loading?.length).toEqual(1))
  //   })
})
