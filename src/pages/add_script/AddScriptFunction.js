import * as Yup from 'yup'
import shipper from '../../functions/shipper/Shipper';

export const validationSchemaAddScript = Yup.object().shape({
    name: Yup
        .string()
        .required('Required'),
    description: Yup
        .string()
        .required('Required'),
    type_of_fruit: Yup
        .string()
        .required('Required'),
    mass: Yup
        .number()
        .required('Required'),
    time: Yup
        .number()
        .required('Required'),
    temperature: Yup
        .number()
        .required('Required'),
    humidity: Yup
        .number()
        .required('Required')
})

export const onSubmitAddScript = async (values) => {
    let data = { ...values }
    console.log('onSubmitAddScript: ', data);

    return await shipper.post('/script/create', data)
        .then(res => {
            console.log(res);
            return res
        })
        .catch(err => {
            console.log(err);
            return undefined
        })
}