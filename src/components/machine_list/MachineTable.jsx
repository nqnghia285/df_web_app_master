import React, { memo } from 'react';
import { Col, Row, Table } from 'reactstrap';
import MachineRow from './MachineRow';

const MachineTable = (props) => {

    const { machines } = props

    return (
        <Row>
            <Col span={12}>
                <Table hover style={{ height: 'auto', width: '100vw' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Mã máy</th>
                            <th>Mô tả</th>
                            <th>Vị trí đặt máy</th>
                            <th>Ngày tạo dữ liệu</th>
                        </tr>
                    </thead>
                    <tbody>
                        {machines && machines.map((machine, index) => (
                            <MachineRow key={index + Math.random()} machine={machine} />
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}



export default MachineTable