import { StatusBar } from 'expo-status-bar'
import { Provider as PaperProvider } from 'react-native-paper'
import { customTheme } from './App.style'
import { I18nManager } from 'react-native'
import { useEffect } from 'react'
import './i18n'
import { useTranslation } from 'react-i18next'
import AppNavigator from 'src/navigation/AppNavigator'
import { Provider } from 'react-redux'
import { store } from 'src/store'
import Loading from 'src/components/Loading'

const App = () => {
  const { i18n } = useTranslation()
  //TODO: if user logged in move to another screen

  // TODO: enhance updating language
  useEffect(() => {
    if (i18n.language === 'ar') {
      I18nManager.forceRTL(true)
    } else {
      I18nManager.forceRTL(false)
    }
  }, [])

  return (
    <Provider store={store}>
      <PaperProvider theme={customTheme}>
        <AppNavigator />
        {/* <StatusBar style="auto" /> */}
        <Loading />
      </PaperProvider>
    </Provider>
  )
}
export default App
