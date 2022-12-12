import * as yup from 'yup'

export const loginForm = yup.object().shape({
  email: yup
    .string()
    .required('validation.fieldIsRequired')
    .email('validation.invalidEmail'),
  password: yup.string().required('validation.fieldIsRequired'),
})
