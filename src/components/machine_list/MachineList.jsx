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

    return (
        <Row>
            <Col span={12}>
                <MachineTable machines={machines} />
            </Col>
        </Row>
    )
}

export default MachineList