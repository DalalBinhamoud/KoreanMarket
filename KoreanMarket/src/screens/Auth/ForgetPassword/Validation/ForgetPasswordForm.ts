import * as yup from 'yup'

export const ForgetPasswordForm = yup.object().shape({
    email: yup.string().required('validation.fieldIsRequired')
    .email('validation.invalidEmail')
})