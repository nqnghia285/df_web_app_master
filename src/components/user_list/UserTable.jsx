import React from 'react';
import { Col, Row, Table } from 'reactstrap';
import UserRow from './UserRow';

const UserTable = (props) => {

    const { users } = props

    return (
        <Row>
            <Col span={12}>
                <Table hover style={{ height: 'auto', width: '100vw' }}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Họ</th>
                            <th>Giớ tính</th>
                            <th>Ngày sinh</th>
                            <th>SĐT</th>
                            <th>Địa chỉ</th>
                            <th>Email</th>
                            <th>Vai trò</th>
                            <th>Ngày tạo tài khoản</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((user, index) => (
                            <UserRow key={index + Math.random()} user={user} index={index} />
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}



export default UserTable