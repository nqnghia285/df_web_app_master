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
            <Col span={12}>
                <SessionTable sessions={sessions} />
            </Col>
        </Row>
    )
}

export default SessionList