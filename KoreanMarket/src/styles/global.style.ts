import { StyleSheet } from 'react-native'
import { theme } from './theme'

export const globalStyles = StyleSheet.create({
  loading: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  fullWidth: {
    width: '100%',
  },
  error: {
    color: theme.colors.error,
  },
})
