const initialState = {
    user_id: null,
    email: null,
    role: null,
    full_name: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER_INFO': {
            return action.payload
        }
        case 'CLEAR_USER_INFO': {
            return action.payload
        }
        default: {
            return state
        }
    }
}

export default userReducer