import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(6, 'minimum 6 characters')
        .required('must creat the name'),
        
    username: Yup
        .string()
        .matches(/[a-zA-Z0-9]/,{includesymbol : true})
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
        .date()
        .required('please select date')
})
export default formSchema;