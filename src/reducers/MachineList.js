const initialState = []

const machineListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_MACHINE_LIST': {
            console.log('UPDATE_MACHINE_LIST', action.payload);
            const newMachineList = [...action.payload]
            return newMachineList
        }
        default: {
            return state
        }
    }
}

export default machineListReducer