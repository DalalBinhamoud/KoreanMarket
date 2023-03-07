import { StyleSheet } from 'react-native'
import { theme } from './theme'

export const globalStyles = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  centeredView: {
    paddingHorizontal: 20,
  },
  error: {
    color: theme.colors.error,
  },
  actionBtn: {
    marginTop: 30,
  },
})
