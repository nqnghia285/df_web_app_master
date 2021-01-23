import * as Yup from 'yup'
import shipper from '../../functions/shipper/Shipper';

export const validationSchemaCreateSession = Yup.object().shape({
    code: Yup
        .string()
        .required('Required'),
    script_id: Yup
        .number()
        .required('Required')
})

export const onSubmitCreateSession = async (values) => {
    let data = { ...values }
    console.log('onSubmitCreateSession: ', data);

    return await shipper.post('/session/create', data)
        .then(res => {
            console.log(res);
            return res
        })
        .catch(err => {
            console.log(err);
            return undefined
        })
}