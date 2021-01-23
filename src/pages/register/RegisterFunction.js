import * as Yup from 'yup'
import shipper from '../../functions/shipper/Shipper';

export const validationSchemaRegister = Yup.object().shape({
    first_name: Yup
        .string()
        .required('Required')
        .max(20, 'Too long!'),
    last_name: Yup
        .string()
        .required('Required')
        .max(30, 'Too long!'),
    gender: Yup
        .string()
        .required('Required'),
    date_of_birth: Yup
        .string()
        .required('Required'),
    phone_number: Yup
        .string()
        .required('Required'),
    address: Yup
        .string()
        .required('Required'),
    email: Yup
        .string()
        .email('Invalid email')
        .min(6, 'Too short!')
        .max(30, 'Too long!')
        .required('Required')
        .nullable(false),
    password: Yup
        .string()
        .min(6, 'Password must be between 6 and 20 characters')
        .max(20, 'Password must be between 6 and 20 characters')
        .required('Required')
        .nullable(false),
    role: Yup
        .string()
        .required('Required')
})

export const onSubmitRegister = async (values) => {
    let data = { ...values }
    console.log('onSubmitRegister: ', data);

    return await shipper.post('/user/register', data)
        .then(res => {
            console.log(res);
            return res
        })
        .catch(err => {
            console.log(err);
            return undefined
        })
}