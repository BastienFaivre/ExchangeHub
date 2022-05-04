import { getAuth, signOut } from "firebase/auth"
import ProfileInfoView from "./profileInfoView"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    fetchStudentProfile,
    editFormInfo,
    saveInfo,
} from "../../redux/reducers/profileReducer"
import Card from "@mui/material/Card"
import { schools } from "../../utils/departments"
import ProfileInfoFormView from "./profileFormInfoView"
import ProfileCommentsView from "./ProfileCommentsView"

export default function ProfilePresenter() {
    const [editInfo, setEditInfo] = useState(false)
    const [editComment, setEditComment] = useState(false)
    const [editTip, setEditTip] = useState(false)

    const { loading, error, courses, info, tips, form } = useSelector(
        (state) => state.profile
    )

    const [autoSelectFormInput, setAutoSelectFormInput] = useState({
        nationality: "",
        department: "",
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStudentProfile())
    }, [])

    useEffect(() => {
        console.log(courses)
    }, [loading, error, courses, info, tips, form])

    function logoutACB() {
        const auth = getAuth()
        signOut(auth).catch(console.log)
    }

    function setEditInfoACB() {
        setEditInfo(true)
    }

    function cancelChangesACB(event) {
        event.preventDefault()
        setEditInfo(false)
        dispatch(editFormInfo(info))
    }

    function saveInfoChangesACB() {
        dispatch(saveInfo()).then(() => {
            setEditInfo(false)
        })
    }

    function handleInputChange(event, newValue) {
        console.log("INPUT CHANGE", newValue, event.target.name)
        const { name, value } = event.target
        const newFormInfo = { [name]: newValue ?? value }
        dispatch(editFormInfo(newFormInfo))
    }

    function handleAutoSelect(event, newValue) {
        if (event && event.target && event.type === "change") {
            const { name, value } = event.target ?? {}
            if (name) {
                setAutoSelectFormInput({
                    ...autoSelectFormInput,
                    [name]: value,
                })
            }
        } else if (event && event.target) {
            const id = event.target.id
            const key = id.includes("nationality")
                ? "nationality"
                : id.includes("department")
                ? "department"
                : null
            if (key) {
                dispatch(editFormInfo({ [key]: newValue }))
                setAutoSelectFormInput((state) => ({
                    ...state,
                    [key]: newValue,
                }))
            }
        }
    }

    return (
        <Card>
            {editInfo ? (
                <ProfileInfoFormView
                    form={form.info}
                    autoSelectForm={autoSelectFormInput}
                    handleInputChangeACB={handleInputChange}
                    handleAutoSelectACB={handleAutoSelect}
                    saveChangesCB={saveInfoChangesACB}
                    cancelChangesCB={cancelChangesACB}
                    departments={schools.map((s) => s.name)}
                />
            ) : (
                <ProfileInfoView
                    profile={info}
                    logout={logoutACB}
                    setEdit={setEditInfoACB}
                />
            )}
            <ProfileCommentsView comments={courses} />
        </Card>
    )
}
