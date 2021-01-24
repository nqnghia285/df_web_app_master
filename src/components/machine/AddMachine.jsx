import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Row } from 'reactstrap';
import swal from 'sweetalert';
import { updateFinishedSession } from '../../actions/FinishedSession';
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

    // const dispatch = useDispatch()
    // const finished = useSelector(state => state.finished)

    // const renderNoticeFinishedSession = () => {
    //     dispatch(updateFinishedSession([false]))

    //     return (
    //         swal({
    //             title: 'Message',
    //             text: 'Session finished!!!',
    //             icon: 'success',
    //             buttons: 'OK'
    //         })
    //     )
    // }

    return (
        <>
            {/* {finished[0] ? renderNoticeFinishedSession() : <></>} */}
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
                                <div style={{ margin: '50px auto', width: '100%' }}>
                                    <h2 style={{ width: '100%', textAlign: 'center', color: 'green' }}>THÊM MÁY SẤY</h2>
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
        </>
    );
}

export default AddMachine;