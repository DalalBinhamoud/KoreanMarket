import * as yup from 'yup'
import * as Regex from 'src/constants/RegularExpression'

//TODO: translate password validation
export const registerForm = yup.object().shape({
  name: yup
    .string()
    .required('validation.fieldIsRequired')
    .matches(Regex.LETTERS_ONLY, 'validation.lettersOnly'),
  email: yup
    .string()
    .required('validation.fieldIsRequired')
    .email('validation.invalidEmail'),
  password: yup
    .string()
    .required('validation.fieldIsRequired')
    .matches(
      Regex.PASSWORD_REGEX,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character',
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'validation.mismatchPassword'),
  phone: yup
    .string()
    .required('validation.fieldIsRequired')
    .matches(Regex.PHONE_NUMBER, 'validation.invalidPhone'),
})
