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

import { getAuth } from "firebase/auth"

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

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
