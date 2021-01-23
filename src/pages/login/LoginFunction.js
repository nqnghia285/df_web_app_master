import * as Yup from 'yup'
import shipper from '../../functions/shipper/Shipper';

export const validationSchemaLogin = Yup.object().shape({
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
        .nullable(false)
})

export const onSubmitLogin = async (values) => {
    let data = { ...values }
    console.log('onSubmitLogin: ', data);

    return await shipper.post('/user/login', data)
        .then(res => {
            console.log(res);
            return res
        })
        .catch(err => {
            console.log(err);
            return undefined
        })
}