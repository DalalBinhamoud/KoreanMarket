import { theme } from 'src/styles/theme'
import { DefaultTheme } from 'react-native-paper'

export const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    background: 'transparent',
  },
}

//constant styles

// marginTop: 30
// paddingHorizontal: 20
