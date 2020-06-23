import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .required('must creat the name'),
    username: Yup
        .string()
        .min(5, 'at least 5 character'),
    email: Yup
        .string()
        .email('Must be a valid email address')
        .required('Must include email address'),
    password: Yup
        .string()
        .min(6, 'Password must be at least 8 characters'),
    term: Yup
        .boolean(),
    birthdate: Yup
        .string()
})

export default formSchema;