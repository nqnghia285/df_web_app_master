const UserRow = ({ user, index }) => {

    const renderUser = (user, index) => {
        if (user) {
            return (
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.gender}</td>
                    <td>{user.date_of_birth}</td>
                    <td>{user.phone_number}</td>
                    <td>{user.address}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.create_at.toString()}</td>
                </tr>
            )
        } else {
            return <></>
        }
    }

    return renderUser(user, index)
}

export default UserRow