import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import swal from "sweetalert";
import { updateFinishedSession } from "../../actions/FinishedSession";
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
            {/* {finished[0] ? renderNoticeFinishedSession() : <></>} */}
            <Row>
                <div style={{ margin: '50px auto', width: '100%' }}>
                    <h2 style={{ width: '100%', textAlign: 'center', color: 'green' }}>DANH SÁCH NGƯỜI DÙNG</h2>
                </div>
                <Col span={12}>
                    <UserTable users={users} />
                </Col>
            </Row>
        </>
    )
}

export default UserList