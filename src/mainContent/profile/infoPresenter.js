import { getAuth, signOut } from "firebase/auth"
import ProfileInfoView from "./infoView"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    fetchStudentProfile,
    editFormInfo,
    editFormComment,
    saveInfo,
    addComment,
} from "../../redux/reducers/profileReducer"
import Card from "@mui/material/Card"
import { CircularProgress } from "@mui/material"
import { schools } from "../../utils/departments"
import InfoFormView from "./formInfoView"
import { ProfileCommentsView as CommentsView } from "./commentsView"
import FormCommentsView from "./formCommentsView"

export default function InfoPresenter({}) {
    const [editInfo, setEditInfo] = useState(false)

    const { info, form } = useSelector((state) => state.profile)

    const [autoSelectFormInput, setAutoSelectFormInput] = useState({
        university: info.university ?? "",
        nationality: info.nationality ?? "",
        department: info.department ?? "",
    })

    const dispatch = useDispatch()

    // useEffect(() => {
    //     console.log("INFO PRESENTER", info, form)
    // }, [info, form])

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

    function handleInfoInputChange(event, newValue) {
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
                : id.includes("university")
                ? "university"
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

    const departments = schools.map((school) => school.name)

    if (editInfo)
        return (
            <InfoFormView
                form={form.info}
                autoSelectForm={autoSelectFormInput}
                handleInputChangeACB={handleInfoInputChange}
                handleAutoSelectACB={handleAutoSelect}
                saveChangesCB={saveInfoChangesACB}
                cancelChangesCB={cancelChangesACB}
                departments={departments}
            />
        )

    return (
        <ProfileInfoView
            profile={info}
            logout={logoutACB}
            setEdit={setEditInfoACB}
        />
    )
}
