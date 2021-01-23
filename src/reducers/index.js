import { combineReducers } from "redux"
import machineListReducer from "./MachineList"
import userReducer from "./UserInfo"
import userListReducer from "./UserList"

const rootReducer = combineReducers({
    users: userListReducer,
    machines: machineListReducer,
    user: userReducer
})

export default rootReducer