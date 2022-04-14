import { getAuth } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchStudentProfile } from "../../redux/reducers/profileReducer"

export default function ProfilePresenter() {
    const auth = getAuth()
    const { loading, error, courses, info, tips, form } = useSelector(
        (state) => state.profile
    )

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStudentProfile())
    }, [])

    console.log(loading, error, courses, info, tips, form)

    return <div>Profile Presenter</div>
}
