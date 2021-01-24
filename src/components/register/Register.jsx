import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Row } from 'reactstrap';
import swal from 'sweetalert';
import { updateFinishedSession } from '../../actions/FinishedSession';
import { onSubmitRegister, validationSchemaRegister } from '../../pages/register/RegisterFunction';
import InputField from '../custom-fields/InputField/InputField';
import SelectField from '../custom-fields/SelectField/SelectField';
import './Register.css';


const Register = () => {

    const submitSuccess = async (values) => {
        console.log(values);
        let res = await onSubmitRegister(values)
        if (res && res.isSuccess) {

            console.log('Server send ACK register:', res);

            swal({
                title: 'Message',
                text: res.message,
                icon: 'success',
                buttons: 'OK'
            })
        } else {
            console.log('Login failed.');
            swal({
                title: 'Oppss...',
                text: res.message,
                icon: 'warning',
                buttons: 'OK'
            })
        }
    }

    const initialValues = {
        first_name: '',
        last_name: '',
        gender: '',
        date_of_birth: '',
        phone_number: '',
        address: '',
        email: '',
        password: '',
        role: ''
    }

    const optionsGender = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' }
    ]

    const optionsRole = [
        { label: 'Employee', value: 'employee' },
        { label: 'Admin', value: 'admin' },
        { label: 'Manager', value: 'manager' }
    ]

    const dispatch = useDispatch()

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
                validationSchema={validationSchemaRegister}
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
                                    <h2 style={{ width: '100%', textAlign: 'center', color: 'green' }}>ĐĂNG KÝ TÀI KHOẢN</h2>
                                </div>
                                <Form className='form'>
                                    <FastField
                                        component={InputField}
                                        lable='First name'
                                        type='text'
                                        name='first_name'
                                        placeholder='Enter your first name.'
                                    />

                                    <FastField
                                        component={InputField}
                                        lable='Last name'
                                        type='text'
                                        name='last_name'
                                        placeholder='Enter your last name.'
                                    />

                                    <FastField
                                        component={SelectField}
                                        name='gender'
                                        options={optionsGender}
                                    />

                                    <FastField
                                        component={InputField}
                                        lable='Birth day'
                                        type='text'
                                        name='date_of_birth'
                                        placeholder='Enter your birth day.'
                                    />

                                    <FastField
                                        component={InputField}
                                        lable='Phone number'
                                        type='text'
                                        name='phone_number'
                                        placeholder='Enter your phone nuber.'
                                    />

                                    <FastField
                                        component={InputField}
                                        lable='Address'
                                        type='text'
                                        name='address'
                                        placeholder='Enter your address.'
                                    />

                                    <FastField
                                        component={InputField}
                                        lable='Email'
                                        type='email'
                                        name='email'
                                        placeholder='Enter your email.'
                                    />


                                    <FastField
                                        component={InputField}
                                        lable='Password'
                                        type='password'
                                        name='password'
                                        placeholder='Enter your password.'
                                    />

                                    <FastField
                                        component={SelectField}
                                        name='role'
                                        options={optionsRole}
                                    />

                                    <Button color='success' type='submit'>Register</Button>
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

export default Register;