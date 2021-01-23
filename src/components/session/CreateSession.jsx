import { FastField, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import swal from 'sweetalert';
import { onSubmitCreateSession, validationSchemaCreateSession } from '../../pages/create_session/CreateSessionFunction';
import { getMachineList } from '../../pages/machine/MachineFunction';
import { getScriptList } from '../../pages/script/ScriptFunction';
import SelectField from '../custom-fields/SelectField/SelectField';
import './CreateSession.css';


const CreateSession = () => {

    const submitSuccess = async (values) => {
        console.log(values);
        let res = await onSubmitCreateSession(values)
        if (res && res.isSuccess) {

            console.log('Server send ACK CreateSession:', res);

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

    const [codesAndScripts, setCodesAndScripts] = useState([]);

    useEffect(() => {
        const getScriptsAndMachines = async () => {
            const mcl = await getMachineList()
            const scl = await getScriptList()

            const codeList = []
            if (mcl) {

                mcl.forEach((machine, i) => {
                    codeList.push({ label: machine.code, value: machine.code })
                })
            }

            const scriptList = []
            if (scl) {

                scl.forEach((script, i) => {
                    scriptList.push({ label: script.script_id.toString(), value: script.script_id.toString() })
                })
            }

            const combines = []
            combines.codes = codeList
            combines.scripts = scriptList

            console.log('Combines', combines);

            setCodesAndScripts(combines)
        }

        getScriptsAndMachines()
        return () => { }
    }, [])

    const initialValues = {
        code: '',
        script_id: 0
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchemaCreateSession}
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
                                    component={SelectField}
                                    name='code'
                                    options={codesAndScripts.codes}
                                />
                                <FastField
                                    component={SelectField}
                                    name='script_id'
                                    options={codesAndScripts.scripts}
                                />
                                <Button color='success' type='submit'>Create</Button>
                            </Form>
                        </Col>
                        <Col span={6} />
                    </Row>
                )
            }}
        </Formik>
    );
}

export default CreateSession;