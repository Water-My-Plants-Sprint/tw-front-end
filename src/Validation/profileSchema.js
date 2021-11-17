import * as yup from 'yup';

const proSchema = yup.object().shape({
    email: yup
        .string()
        .trim()
        .required(),
    password: yup
        .string()
        .trim()
        .min(2, 'Password must have at least 2 characters.')
        .max(30, 'Password must have a maximum of 30 characters')
        .required(),
    phone: yup
        .string()
        .trim()
        .required()
})

export default proSchema;