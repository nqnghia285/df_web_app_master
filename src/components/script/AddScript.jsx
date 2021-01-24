import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Row } from 'reactstrap';
import swal from 'sweetalert';
import { updateFinishedSession } from '../../actions/FinishedSession';
import { onSubmitAddScript, validationSchemaAddScript } from '../../pages/add_script/AddScriptFunction';
import InputField from '../custom-fields/InputField/InputField';
import './AddScript.css';


const AddScript = () => {
    const dispatch = useDispatch()

    const submitSuccess = async (values) => {
        console.log(values);
        let res = await onSubmitAddScript(values)
        if (res && res.isSuccess) {

            console.log('Server send ACK AddScript:', res);

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
        type_of_fruit: '',
        mass: 0,
        time: 0,
        temperature: 0.0,
        humidity: 0.0
    }

    const renderNoticeFinishedSession = () => {
        dispatch(updateFinishedSession([false]))

        return (
            swal({
                title: 'Message',
                text: 'Session finished!!!',
                icon: 'success',
                buttons: 'OK'
            })
        )
    }

    const finished = useSelector(state => state.finished)

    return (
        <>
            {finished[0] ? renderNoticeFinishedSession() : <></>}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemaAddScript}
                onSubmit={(values) => { submitSuccess(values) }}
            >
                {formikProps => {
                    const { values, errors, touched } = formikProps
                    console.log({ values, errors, touched });

                    return (
                        <Row className='background-login'>
                            <Col span={6} />
                            <Col span={12}>
                                <div style={{ margin: '50px auto', width: '100%' }}>
                                    <h2 style={{ width: '100%', textAlign: 'center', color: 'green' }}>TẠO KỊCH BẢN SẤY</h2>
                                </div>
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
                                        lable='Type'
                                        type='text'
                                        name='type_of_fruit'
                                        placeholder='Type.'
                                    />

                                    <FastField
                                        component={InputField}
                                        lable='Mass'
                                        type='number'
                                        name='mass'
                                    />

                                    <FastField
                                        component={InputField}
                                        lable='Time'
                                        type='number'
                                        name='time'
                                    />

                                    <FastField
                                        component={InputField}
                                        lable='Temperature'
                                        type='number'
                                        name='temperature'
                                    />

                                    <FastField
                                        component={InputField}
                                        lable='Humidity'
                                        type='number'
                                        name='humidity'
                                    />

                                    <Button color='success' type='submit'>Add</Button>
                                </Form>
                            </Col>
                            <Col span={6} />
                        </Row>
                    )
                }}
            </Formik>
        </>
    );
}

export default AddScript;