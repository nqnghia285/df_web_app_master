import React, { memo } from 'react';
import { Col, Row, Table } from 'reactstrap';
import ScriptRow from './ScriptRow';

const ScriptTable = (props) => {

    const { scripts } = props

    return (
        <Row>
            <Col span={12}>
                <Table hover style={{ height: 'auto', width: '100vw' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Mô tả</th>
                            <th>Loại nguyên liệu</th>
                            <th>Khối lượng</th>
                            <th>Thời gian sấy(phút)</th>
                            <th>Nhiệt độ</th>
                            <th>Độ ẩm</th>
                            <th>ID người tạo</th>
                            <th>Ngày tạo kịch bản sấy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scripts && scripts.map((script, index) => (
                            <ScriptRow key={index + Math.random()} script={script} />
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}



export default ScriptTable