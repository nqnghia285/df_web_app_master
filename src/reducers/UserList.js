const initialState = []

const userListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER_LIST': {
            const newUserList = [...action.payload]
            return newUserList
        }
        default: {
            return state
        }
    }
}

export default userListReducer