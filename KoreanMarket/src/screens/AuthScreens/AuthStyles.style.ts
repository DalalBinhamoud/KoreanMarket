import { StyleSheet } from 'react-native'
import { theme } from 'src/styles/theme'

export const AuthStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
  },
  logo: {
    resizeMode: 'contain',
    height: 150,
    width: 400,
    margin: 50,
  },
  view: {
    width: '80%',
  },
  actionBtn: {
    marginTop: 30,
  },
})
