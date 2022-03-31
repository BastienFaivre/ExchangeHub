import { combineReducers } from "redux"
import { todoReducer } from "./todos"
import counterReducer from "./counter"
// Import all reducers

export default combineReducers({
	todos: todoReducer,
	counter: counterReducer,
	// all other reducers
})
