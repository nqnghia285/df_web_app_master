const MachineRow = ({ machine }) => {
    const renderMachine = (machine) => {
        if (machine) {
            return (
                <tr>
                    <th scope="row">{machine.machine_id}</th>
                    <td>{machine.name}</td>
                    <td>{machine.code}</td>
                    <td>{machine.description}</td>
                    <td>{machine.position}</td>
                    <td>{machine.create_at.toString()}</td>
                </tr>
            )
        } else {
            return <></>
        }
    }

    return (
        renderMachine(machine)
    )
}

export default MachineRow