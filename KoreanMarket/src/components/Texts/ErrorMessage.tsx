import { FormikErrors } from 'formik/dist/types'
import { Text } from 'react-native-paper'
import { globalStyles } from 'src/styles/global.style'

interface IProps {
  testID: string
  showErrorMessage: boolean
  errorMessage: string | string[] | FormikErrors<any> | FormikErrors<any>[]
}

const ErrorMessage = ({ testID, showErrorMessage, errorMessage }: IProps) => {
  return (
    showErrorMessage && (
      <Text testID={testID} style={globalStyles.error}>
        {errorMessage.toString()}
      </Text>
    )
  )
}

export default ErrorMessage
