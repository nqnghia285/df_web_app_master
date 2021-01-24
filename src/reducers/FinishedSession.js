const initialState = [
    false
]

const finishedSessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FINISHED_SESSION': {
            // console.log('UPDATE_MACHINE_LIST', action.payload);
            const newFinishedSession = action.payload
            return newFinishedSession
        }
        default: {
            return state
        }
    }
}

export default finishedSessionReducer