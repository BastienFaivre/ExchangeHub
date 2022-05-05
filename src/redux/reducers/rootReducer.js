import { combineReducers } from "redux"
import { coursesReducer } from "./coursesReducer"
import { profileReducer } from "./profileReducer"
import { studentsReducer } from "./studentsReducer"
import { tipsReducer } from "./tipsReducer"

export default combineReducers({
    profile: profileReducer,
    courses: coursesReducer,
    tips: tipsReducer,
    students: studentsReducer,
})
