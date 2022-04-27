import { combineReducers } from "redux"
import { coursesReducer } from "./coursesReducer"
import { profileReducer } from "./profileReducer"
import { tipsReducer } from "./tipsReducer"
// import { todoReducer } from "./todos"
// import counterReducer from "./counter"
// Import all reducers

export default combineReducers({
    profile: profileReducer,
    courses: coursesReducer,
    tips: tipsReducer,
    // todos: todoReducer,
    // counter: counterReducer,
    // all other reducers
})
