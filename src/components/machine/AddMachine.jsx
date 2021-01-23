import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import swal from 'sweetalert';
import { onSubmitAddMachine, validationSchemaAddMachine } from '../../pages/add_machine/AddMachineFunction';
import InputField from '../custom-fields/InputField/InputField';
import './AddMachine.css';


const AddMachine = () => {

    const submitSuccess = async (values) => {
        console.log(values);
        let res = await onSubmitAddMachine(values)
        if (res && res.isSuccess) {

            console.log('Server send ACK AddMachine:', res);

            swal({
                title: 'Message',
                text: res.message,
                icon: 'success',
                buttons: 'OK'
            })
        } else {
            swal({
                title: 'Message',
                text: res.message,
                icon: 'warning',
                buttons: 'OK'
            })
        }
    }

    const initialValues = {
        name: '',
        description: '',
        code: '',
        position: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchemaAddMachine}
            onSubmit={(values) => { submitSuccess(values) }}
        >
            {formikProps => {
                const { values, errors, touched } = formikProps
                console.log({ values, errors, touched });

                return (
                    <Row className='background-login'>
                        <Col span={6} />
                        <Col span={12}>
                            <Form className='form'>
                                <FastField
                                    component={InputField}
                                    lable='Name'
                                    type='text'
                                    name='name'
                                    placeholder='Enter name of machine.'
                                />

                                <FastField
                                    component={InputField}
                                    lable='Description'
                                    type='text'
                                    name='description'
                                    placeholder='Description.'
                                />

                                <FastField
                                    component={InputField}
                                    lable='Code'
                                    type='text'
                                    name='code'
                                    placeholder='Code.'
                                />

                                <FastField
                                    component={InputField}
                                    lable='Position'
                                    type='text'
                                    name='position'
                                    placeholder='Position.'
                                />

                                <Button color='success' type='submit'>Add</Button>
                            </Form>
                        </Col>
                        <Col span={6} />
                    </Row>
                )
            }}
        </Formik>
    );
}

export default AddMachine;