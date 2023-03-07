import * as yup from 'yup'


export const productForm = yup.object().shape({
    name: yup.string().required('validation.fieldIsRequired'),
    description: yup.string().required('validation.fieldIsRequired'),
})