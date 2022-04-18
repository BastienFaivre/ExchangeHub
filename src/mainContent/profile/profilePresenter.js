import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import ProfileView from "./profileView"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchStudentProfile } from "../../redux/reducers/profileReducer"

export default function ProfilePresenter() {
    const { loading, error, courses, info, tips, form } = useSelector(
        (state) => state.profile
    )

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStudentProfile())
    }, [])

    console.log(loading, error, courses, info, tips, form)

    function logoutACB() {
        const auth = getAuth()
        signOut(auth).catch(console.log)
    }

    return <ProfileView logout={logoutACB} />
}
