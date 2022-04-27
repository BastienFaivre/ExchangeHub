import { Routes, Route } from "react-router-dom"
import TipsSearchPresenter from "./mainContent/lifestyle/searchPresenter"
import Home from "./home/homePresenter"
import MainContent from "./mainContent/MainContentView"
import SearchPresenter from "./mainContent/courses/searchPresenter"
import CoursePresenter from "./mainContent/courses/coursePresenter"
import ProfileLoginPresenter from "./mainContent/profile/profileLoginPresenter"
import ProfilePresenter from "./mainContent/profile/profilePresenter"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useState } from "react"
import StudentsSearchPresenter from "./mainContent/students/searchPresenter"

function App() {
    const [user, setUser] = useState(null)

    const auth = getAuth()

    onAuthStateChanged(auth, setUser)
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
                        {user && <ProfilePresenter />}
                        {!user && <ProfileLoginPresenter />}
                    </MainContent>
                }
            />
            <Route
                path="/students"
                element={
                    <MainContent>
                        <StudentsSearchPresenter />
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
                        <TipsSearchPresenter />
                    </MainContent>
                }
            />
        </Routes>
    )
}

export default App
