import { combineReducers } from "redux"
import finishedSessionReducer from "./FinishedSession"
import machineListReducer from "./MachineList"
import userReducer from "./UserInfo"
import userListReducer from "./UserList"

const rootReducer = combineReducers({
    users: userListReducer,
    machines: machineListReducer,
    user: userReducer,
    finished: finishedSessionReducer
})

export default rootReducer