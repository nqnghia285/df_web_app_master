import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { onSubmitLogin, validationSchemaLogin } from '../../pages/login/LoginFunction';
import InputField from '../custom-fields/InputField/InputField';
import swal from 'sweetalert'
import './Login.css';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../actions/User';


const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const submitSuccess = async (values) => {
        console.log(values);
        let res = await onSubmitLogin(values)
        if (res && res.isSuccess) {

            let user = {
                user_id: res.user_id,
                email: res.email,
                role: res.role,
                full_name: res.full_name
            }

            console.log('Server send ACK login:', user);

            dispatch(updateUser(user))

            history.push('/machines')
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
        email: '',
        password: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchemaLogin}
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

                                {/* <FastField
                                    component={SelectField}
                                    name='role'
                                    options={initialOptions}
                                /> */}

                                <Button color='success' type='submit'>Login</Button>
                            </Form>
                        </Col>
                        <Col span={6} />
                    </Row>
                )
            }}
        </Formik>
    );
}

export default Login;