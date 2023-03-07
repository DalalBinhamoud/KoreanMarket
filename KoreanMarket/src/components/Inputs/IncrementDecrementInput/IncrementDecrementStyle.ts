import { StyleSheet } from 'react-native'
import { theme } from 'src/styles/theme'

export const IncrementDecrementStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 30,
    width: '40%',
    textAlign: 'center',
    borderColor: theme.colors.gray,
    borderWidth: 1,
    paddingHorizontal: 0,
    justifyContent: 'center',
    borderRadius: 4,
  },
  label: {
    fontSize: 18,
    color: theme.colors.black,
    opacity: 0.54,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})
