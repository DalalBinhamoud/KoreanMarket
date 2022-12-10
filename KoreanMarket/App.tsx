import { StatusBar } from 'expo-status-bar'
import { Provider as PaperProvider } from 'react-native-paper'
import { Login } from './src/screens/AuthScreens'
import { customTheme } from './App.style'
import { I18nManager, View } from 'react-native'
import { useEffect } from 'react'
import './i18n'
import { useTranslation } from 'react-i18next'

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
    <PaperProvider theme={customTheme}>
      <Login />
      <StatusBar style="auto" />
    </PaperProvider>
  )
}
export default App
