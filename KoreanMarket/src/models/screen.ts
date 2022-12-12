import { ILoadingState } from './store'

export interface IScreenNavigation {
  navigation: any
  loadingState?: ILoadingState
  hideLoading?: Function
  showLoading?: Function
}
