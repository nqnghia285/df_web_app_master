import { InputNumber } from 'antd';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, FormGroup, Label, Row } from 'reactstrap';
import swal from 'sweetalert';
import { updateFinishedSession } from '../../actions/FinishedSession';
import { onSubmitCreateSession, validationSchemaCreateSession } from '../../pages/create_session/CreateSessionFunction';
import { getMachineList } from '../../pages/machine/MachineFunction';
import { getScriptList } from '../../pages/script/ScriptFunction';
import { setCycleTimeOfMachine, toggleIsAutoOfMachine, toggleStatusOfDevices, toggleStatusOfMachine } from '../../pages/session/SesionFunction';
import SelectField from '../custom-fields/SelectField/SelectField';
import SwitchButton from '../switch_button/SwitchButton';
import './CreateSession.css';


const CreateSession = () => {
    const finished = useSelector(state => state.finished)
    const dispatch = useDispatch()
    console.log('finished', finished);

    const submitSuccess = async (values) => {
        console.log('submitSuccess:', values);
        let res = await onSubmitCreateSession(values)
        if (res && res.isSuccess) {

            console.log('Server send ACK CreateSession:', res);

            sessionStorage.setItem('code', values.code)

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
                    scriptList.push({ label: script.name, value: script.script_id.toString() })
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

    const [locked, setLocked] = useState(true)
    const [status, setStatus] = useState(false)
    const [isAuto, setIsAuto] = useState(false)
    const [eFan, setEFan] = useState(false)
    const [bFan, setBFan] = useState(false)
    const [heater, setHeater] = useState(false)

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

    const [cycleTime, setCycleTime] = useState(3000)

    return (
        <>
            {/* {finished[0] ? renderNoticeFinishedSession() : <></>} */}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemaCreateSession}
                onSubmit={(values) => { submitSuccess(values) }}
            >
                {formikProps => {
                    const { values, errors, touched } = formikProps
                    console.log({ values, errors, touched });

                    const toggleLocked = (checked, event) => {
                        console.log('toggleLocked', checked);
                        console.log('locked', locked);
                        setLocked(checked)
                    }

                    const toggleStatus = async (checked, event) => {
                        setLocked(true)
                        let code = sessionStorage.getItem('code')
                        let res = await toggleStatusOfMachine({ code: code, status: checked ? 'on' : 'off' })
                        setLocked(false)
                        if (res) {
                            setStatus(checked)
                        } else {
                            setStatus(!checked)
                        }
                        // console.log('toggleStatus', checked);
                        // console.log('status', status);
                    }

                    const toggleIsAuto = async (checked, event) => {
                        setLocked(true)
                        let code = sessionStorage.getItem('code')
                        let res = await toggleIsAutoOfMachine({ code: code, isAuto: checked })
                        setLocked(false)
                        if (res) {
                            setIsAuto(checked)
                        } else {
                            setIsAuto(!checked)
                        }
                        // console.log('toggleIsAuto', checked);
                        // console.log('isAuto', isAuto);
                    }

                    const toggleEFan = async (checked, event) => {
                        setLocked(true)
                        let code = sessionStorage.getItem('code')
                        let res = await toggleStatusOfDevices({ code: code, eFan: checked, bFan: bFan, heater: heater })
                        setLocked(false)
                        if (res) {
                            setEFan(checked)
                        } else {
                            setEFan(!checked)
                        }
                    }

                    const toggleBFan = async (checked, event) => {
                        setLocked(true)
                        let code = sessionStorage.getItem('code')
                        let res = await toggleStatusOfDevices({ code: code, eFan: eFan, bFan: checked, heater: heater })
                        setLocked(false)
                        if (res) {
                            setBFan(checked)
                        } else {
                            setBFan(!checked)
                        }
                    }

                    const toggleHeater = async (checked, event) => {
                        setLocked(true)
                        let code = sessionStorage.getItem('code')
                        let res = await toggleStatusOfDevices({ code: code, eFan: eFan, bFan: bFan, heater: checked })
                        setLocked(false)
                        if (res) {
                            setHeater(checked)
                        } else {
                            setHeater(!checked)
                        }
                    }

                    const onChangeValue = (value) => {
                        console.log(value);
                        setCycleTime(value)

                    }

                    const onPressEnter = async (e) => {
                        console.log(e);
                        console.log(e.target.value);
                        let code = sessionStorage.getItem('code')
                        let res = await setCycleTimeOfMachine({ code: code, cycleTime: e.target.value })
                        if (res) {
                            swal({
                                title: 'Message',
                                text: 'Success',
                                icon: 'success',
                                buttons: 'OK'
                            })
                        } else {
                            swal({
                                title: 'Message',
                                text: 'Failed',
                                icon: 'warnning',
                                buttons: 'OK'
                            })
                        }
                    }

                    const onKeyDown = (keyEvent) => {
                        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
                            keyEvent.preventDefault();
                        }
                    }

                    return (
                        <>
                            <Row className='background-login'>
                                <Col span={6} >
                                    <Form onKeyDown={onKeyDown} style={{ backgroundColor: '#F1F1F1', borderRadius: 5, marginTop: 'calc(50% - 90px)', marginLeft: 10 }}>
                                        <div style={{ margin: 10, padding: 10 }}>
                                            <FormGroup>
                                                <Label ><b>Khóa:</b></Label>{' '}
                                                <SwitchButton onClick={toggleLocked} disabled={false} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label ><b>Trạng thái máy sấy:</b></Label>{' '}
                                                <SwitchButton onClick={toggleStatus} disabled={locked} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label ><b>Tự động sấy:</b></Label>{' '}
                                                <SwitchButton onClick={toggleIsAuto} disabled={locked || !status} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label ><b>Quạt hút:</b></Label>{' '}
                                                <SwitchButton onClick={toggleEFan} disabled={locked || !status || isAuto} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label ><b>Quạt thổi:</b></Label>{' '}
                                                <SwitchButton onClick={toggleBFan} disabled={locked || !status || isAuto} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label ><b>Máy gia nhiệt:</b></Label>{' '}
                                                <SwitchButton onClick={toggleHeater} disabled={locked || !status || isAuto} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label ><b>Chu kỳ gửi dữ liệu của máy sấy:</b></Label>{' '}
                                                <InputNumber defaultValue={3000} value={cycleTime} min={3000} onPressEnter={onPressEnter} onChange={onChangeValue} />
                                                {' '}<Label ><b>ms</b></Label>
                                            </FormGroup>
                                        </div>
                                    </Form>
                                </Col>
                                <Col span={12}>
                                    <div style={{ margin: '50px auto', width: '100%' }}>
                                        <h2 style={{ width: '100%', textAlign: 'center', color: 'green' }}>TẠO PHIÊN SẤY</h2>
                                    </div>

                                    <Form className='form'>
                                        <Field
                                            component={SelectField}
                                            name='code'
                                            options={codesAndScripts.codes}
                                        />
                                        <Field
                                            component={SelectField}
                                            name='script_id'
                                            options={codesAndScripts.scripts}
                                        />
                                        <Button color='success' type='submit'>Create</Button>
                                    </Form>
                                </Col>
                                <Col span={6} />
                            </Row>
                        </>
                    )
                }}
            </Formik >
        </>
    );
}

export default CreateSession;