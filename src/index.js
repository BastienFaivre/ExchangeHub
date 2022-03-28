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
