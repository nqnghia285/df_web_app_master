const ScriptRow = ({ script }) => {

    const renderScript = (script) => {
        if (script) {
            return (
                <tr>
                    <th scope="row">{script.script_id}</th>
                    <td>{script.name}</td>
                    <td>{script.description}</td>
                    <td>{script.type_of_fruit}</td>
                    <td>{script.mass}</td>
                    <td>{script.time}</td>
                    <td>{script.temperature}</td>
                    <td>{script.humidity}</td>
                    <td>{script.user_id}</td>
                    <td>{script.create_at.toString()}</td>
                </tr>
            )
        } else {
            return <></>
        }
    }

    return renderScript(script)
}

export default ScriptRow