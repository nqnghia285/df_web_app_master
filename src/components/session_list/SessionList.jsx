import { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { getSessionList } from "../../pages/session/SesionFunction";
import SessionTable from "./SessionTable";

const SessionList = () => {
    const [sessions, setSessions] = useState([]);
    useEffect(() => {
        const getSessions = async () => {
            const ssl = await getSessionList()
            console.log(ssl)
            setSessions(ssl)
        }

        getSessions()
        return () => { }
    }, [])

    return (
        <Row>
            <div style={{ margin: '50px auto', width: '100%' }}>
                <h2 style={{ width: '100%', textAlign: 'center', color: 'green' }}>DANH SÁCH PHIÊN SẤY</h2>
            </div>
            <Col span={12}>
                <SessionTable sessions={sessions} />
            </Col>
        </Row>
    )
}

export default SessionList