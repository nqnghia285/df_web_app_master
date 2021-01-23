const SessionRow = ({ session }) => {

    const renderSession = (session) => {
        if (session) {
            return (
                <tr>
                    <th scope="row">{session.session_id}</th>
                    <td>{session.name}</td>
                    <td>{session.start_time.toString()}</td>
                    <td>{session.finish_time.toString()}</td>
                    <td>{session.result}</td>
                    <td>{session.user_id}</td>
                    <td>{session.script_id}</td>
                    <td>{session.machine_id}</td>
                    <td>{session.create_at.toString()}</td>
                </tr>
            )
        } else {
            return <></>
        }
    }

    return renderSession(session)
}

export default SessionRow