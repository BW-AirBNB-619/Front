import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    
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
   
})
export default formSchema;