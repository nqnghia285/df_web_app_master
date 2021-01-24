import { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { getScriptList } from "../../pages/script/ScriptFunction";
import ScriptTable from "./ScriptTable";

const ScriptList = () => {
    const [scripts, setScripts] = useState([]);
    useEffect(() => {
        const getScripts = async () => {
            const scrl = await getScriptList()
            console.log(scrl)
            setScripts(scrl)
        }

        getScripts()
        return () => { }
    }, [])

    return (
        <>
            <div style={{ margin: '50px auto', width: '100%' }}>
                <h2 style={{ width: '100%', textAlign: 'center', color: 'green' }}>DANH SÁCH KỊCH BẢN SẤY</h2>
            </div>
            <Row>
                <Col span={12}>
                    <ScriptTable scripts={scripts} />
                </Col>
            </Row>
        </>
    )
}

export default ScriptList