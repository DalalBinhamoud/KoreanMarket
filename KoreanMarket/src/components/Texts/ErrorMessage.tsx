import { Text } from 'react-native-paper'
import { globalStyles } from 'src/styles/global.style'

interface IProps {
  testID: string
  showErrorMessage: boolean
  errorMessage: string
}

const ErrorMessage = ({ testID, showErrorMessage, errorMessage }: IProps) => {
  return (
    showErrorMessage && (
      <Text testID={testID} style={globalStyles.error}>
        {errorMessage}
      </Text>
    )
  )
}

export default ErrorMessage
