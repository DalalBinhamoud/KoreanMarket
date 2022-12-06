import { StatusBar } from 'expo-status-bar'
import {
  DefaultTheme,
  Provider as PaperProvider,
  configureFonts,
} from 'react-native-paper'

import './i18n'
import { AuthScreen } from './src/screens'
import { theme } from './src/styles/theme'
import { fontConfig } from './src/styles/font'

export default function App() {
  const customTheme = {
    ...DefaultTheme,
    ...theme,
    fonts: fontConfig,
  }

  return (
    <PaperProvider theme={customTheme}>
      <AuthScreen />
      <StatusBar style="auto" />
    </PaperProvider>
  )
}
