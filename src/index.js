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
// import { getFirestore } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

// import { saveNewTodo, fetchTodos } from "./redux/reducers/todos"

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
// const db = getFirestore(app)

// createUserWithEmailAndPassword(auth, "philip.hamelink@gmail.com", "password")
// signInWithEmailAndPassword(auth, "philip.hamelink@gmail.com", "password")
// .then(
// () => {
// const comment = {
//     courseCode: "DH2642",
//     title: "Very good course!",
//     rating: 4.5,
//     difficulty: "Intermediate",
//     description:
//         "This course is awesome, I learnt so much! I really recommend it.",
//     forname: "Bastien",
//     lastname: "Faivre",
//     contact: "bastien.faivre@epfl.ch",
// }
// updateUserForm({
//     comment: {
//         courseCode: "DH2642",
//         title: "Very good course!",
//         rating: 4.5,
//         difficulty: "Intermediate",
//         description: "This course is awesome, I lear",
//         forname: "Philip",
//         lastname: "Hamelink",
//     },
// })
// getCommentsByCourseCode("DH2642")
// saveComment(comment)
// getUsers()
// getUsersWithLimit()
// const user = {
//     name: "Philip",
//     age: 23,
//     info: {
//         nationality: "CH",
//     },
//     form: {
//         comment: { courseCode: "DDHS2" },
//     },
// }
// saveUser2(user)
// saveUser(user)
//     }
// )

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
signInWithEmailAndPassword(auth, "philip.hamelink@gmail.com", "password").then(
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
)
