import { Routes, Route } from "react-router-dom"
import Courses from "./mainContent/courses/coursePresenter"
import Lifestyle from "./mainContent/lifestyle/tipsPresenter"
import Profile from "./mainContent/profile/profilePresenter"
import Students from "./mainContent/students/studentPresenter"
import Home from "./home/homePresenter"
import Navigation from "./navigation/navigationPresenter"
import Sidebar from "./sidebar/sidebarPresenter"
import MainContent from "./mainContent/MainContentView"

import { Box } from "@mui/material"

function App() {
	return (
		<Box sx={{ padding: 0, margin: 0, height: "100vh" }}>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Sidebar />
							<Home />
						</>
					}
				/>
				<Route
					path="/profile"
					element={
						<MainContent>
							<Profile />
						</MainContent>
					}
				/>
			</Routes>
		</Box>
	)
}

export default App
