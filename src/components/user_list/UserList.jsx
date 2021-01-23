import { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { getUserList } from "../../pages/user/UserFunction";
import UserTable from "./UserTable";

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            const usl = await getUserList()
            console.log(usl)
            setUsers(usl)
        }

        getUsers()
        return () => { }
    }, [])

    return (
        <Row>
            <Col span={12}>
                <UserTable users={users} />
            </Col>
        </Row>
    )
}

export default UserList