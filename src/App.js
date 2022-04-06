import { Routes, Route } from "react-router-dom"
import Courses from "./mainContent/courses/coursePresenter"
import Lifestyle from "./mainContent/lifestyle/tipsPresenter"
import Profile from "./mainContent/profile/profilePresenter"
import Students from "./mainContent/students/studentPresenter"
import Home from "./home/homePresenter"
import Navigation from "./navigation/navigationPresenter"
import Sidebar from "./sidebar/sidebarPresenter"
import MainContent from "./mainContent/MainContentView"
import SearchPresenter from "./mainContent/courses/searchPresenter"
import CoursePresenter from "./mainContent/courses/coursePresenter"

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<MainContent>
						<Home />
					</MainContent>
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
			<Route
				path="/students"
				element={
					<MainContent>
						<Students />
					</MainContent>
				}
			/>
			<Route path="/courses">
				<Route
					index
					element={
						<MainContent>
							<SearchPresenter />
						</MainContent>
					}
				/>
				<Route
					path=":id"
					element={
						<MainContent>
							<CoursePresenter />
						</MainContent>
					}
				/>
			</Route>
			<Route
				path="/lifestyle"
				element={
					<MainContent>
						<Lifestyle />
					</MainContent>
				}
			/>
		</Routes>
	)
}

export default App
