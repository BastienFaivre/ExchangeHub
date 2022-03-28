import { combineReducers } from "redux"
import todos from "./todos"
// Import all reducers

export default combineReducers({
	todos,
	// all other reducers
})
