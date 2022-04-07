import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

// REDUX
import { Provider } from "react-redux"
import store from "./redux/store"

// REACT ROUTER
import { BrowserRouter } from "react-router-dom"

// MUI
import { ThemeProvider } from "@mui/material/styles"
import theme from "./MUI/theme"
// Sets all default styling
import CssBaseline from "@mui/material/CssBaseline"

// FIREBASE
import firebaseConfig from "./config/firebaseConfig"
import { initializeApp } from "firebase/app"
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth"
import { saveFilterSearchCourses } from "./redux/reducers/coursesReducer"

// import { saveNewTodo, fetchTodos } from "./redux/reducers/todos"

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

// createUserWithEmailAndPassword(auth, "philip.hamelink@gmail.com", "password")
// signInWithEmailAndPassword(auth, "philip.hamelink@gmail.com", "password")

// console.log(auth)

// DEMONSTRATION AND TESTING OF REDUX

// the firebaseConfig file will not be pushed and it needs to be in the following format

// export default {
// 	apiKey: "***",
// 	authDomain: "exchange-hub-dh2642.firebaseapp.com",
// 	projectId: "exchange-hub-dh2642",
// 	storageBucket: "exchange-hub-dh2642.appspot.com",
// 	messagingSenderId: "***",
// 	appId: "***",
// 	databaseURL:
// 		"https://exchange-hub-dh2642-default-rtdb.europe-west1.firebasedatabase.app/",
// }
// const unsubscribe = store.subscribe(() =>
// 	console.log("State after dispatch: ", store.getState())
// )

// store.dispatch(
// 	saveFilterSearchCourses({
// 		text_pattern: "queuing",
// 	})
// )

// Will update the todos in the reducer everytime there is a change
// store.dispatch(fetchTodos)

// store.dispatch({ type: "INCREMENT" })
// store.dispatch({ type: "INCREMENT" })
// store.dispatch({ type: "INCREMENT" })
// store.dispatch({ type: "DECREMENT" })
// store.dispatch({ type: "DECREMENT" })
// store.dispatch({ type: "ADD_TODO", payload: { id: 1, content: "First todo" } })
// store.dispatch({ type: "ADD_TODO", payload: { id: 2, content: "Second todo" } })
// store.dispatch({ type: "TOGGLE_TODO", payload: { id: 1 } })

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
)
