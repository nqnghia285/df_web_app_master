import React, { memo } from 'react';
import { Col, Row, Table } from 'reactstrap';
import SessionRow from './SessionRow';

const SessionTable = (props) => {

    const { sessions } = props

    return (
        <Row>
            <Col span={12}>
                <Table hover style={{ height: 'auto', width: '100vw' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Thời gian bắt đầu</th>
                            <th>Thời gian kết thúc</th>
                            <th>Đánh giá kết quả</th>
                            <th>ID người vận hành</th>
                            <th>ID kịch bản sấy</th>
                            <th>ID máy máy sấy</th>
                            <th>Ngày tạo phiên sấy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sessions && sessions.map((session, index) => (
                            <SessionRow key={index + Math.random()} session={session} />
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}



export default SessionTable