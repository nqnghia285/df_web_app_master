import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import swal from 'sweetalert';
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

    return (
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
    );
}

export default Register;