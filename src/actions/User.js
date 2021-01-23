export const updateUser = (state) => {
    return {
        type: 'UPDATE_USER_INFO',
        payload: state
    }
}

export const clearUser = () => {
    return {
        type: 'CLEAR_USER_INFO',
        payload: {
            user_id: null,
            email: null,
            role: null,
            full_name: null
        }
    }
}