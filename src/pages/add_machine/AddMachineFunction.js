import * as Yup from 'yup'
import shipper from '../../functions/shipper/Shipper';

export const validationSchemaAddMachine = Yup.object().shape({
    name: Yup
        .string()
        .required('Required'),
    description: Yup
        .string()
        .required('Required'),
    code: Yup
        .string()
        .required('Required'),
    position: Yup
        .string()
        .required('Required')
})

export const onSubmitAddMachine = async (values) => {
    let data = { ...values }
    console.log('onSubmitAddMachine: ', data);

    return await shipper.post('/machine/create', data)
        .then(res => {
            console.log(res);
            return res
        })
        .catch(err => {
            console.log(err);
            return undefined
        })
}