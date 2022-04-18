import { Routes, Route } from "react-router-dom"
import Lifestyle from "./mainContent/lifestyle/tipsPresenter"
import Students from "./mainContent/students/studentPresenter"
import Home from "./home/homePresenter"
import MainContent from "./mainContent/MainContentView"
import SearchPresenter from "./mainContent/courses/searchPresenter"
import CoursePresenter from "./mainContent/courses/coursePresenter"
import ProfileLoginPresenter from "./mainContent/profile/profileLoginPresenter"
import ProfilePresenter from "./mainContent/profile/profilePresenter"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useState } from "react"

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
