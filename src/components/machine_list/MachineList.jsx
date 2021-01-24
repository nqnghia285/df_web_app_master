import { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { getMachineList } from "../../pages/machine/MachineFunction";
import MachineTable from "./MachineTable";

const MachineList = () => {
    const [machines, setMachines] = useState([]);
    useEffect(() => {
        const getMachines = async () => {
            const mcl = await getMachineList()
            console.log(mcl)
            setMachines(mcl)
        }

        getMachines()
        return () => { }
    }, [])

    // const dispatch = useDispatch()

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

    // const finished = useSelector(state => state.finished)

    return (
        <>
            <Row>
                <div style={{ margin: '50px auto', width: '100%' }}>
                    <h2 style={{ width: '100%', textAlign: 'center', color: 'green' }}>DANH SÁCH MÁY SẤY</h2>
                </div>
                <Col span={12}>
                    <MachineTable machines={machines} />
                </Col>
            </Row>
        </>
    )
}

export default MachineList