import { getAuth, signOut } from "firebase/auth"
import ProfileInfoView from "./infoView"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editFormInfo, saveInfo } from "../../redux/reducers/profileReducer"
import { schools } from "../../utils/departments"
import { nationalities } from "../../utils/nationalities"
import { universities } from "../../utils/universities"
import ProfileInfoFormView from "./formInfoView"
import { Box } from "@mui/system"

export default function InfoPresenter() {
    const dispatch = useDispatch()
    const { info } = useSelector((state) => state.profile)

    // used to set edit mode
    const [editInfo, setEditInfo] = useState(false)

    // form states
    const [formInputs, setFormInputs] = useState({
        forname: info.forname,
        lastname: info.lastname,
        year: info.year,
        nationality: info.nationality,
        university: info.university,
        department: info.department,
    })

    function logoutACB() {
        const auth = getAuth()
        signOut(auth).catch(function errorACB(e) {
            console.log(e)
        })
    }

    function setEditInfoACB() {
        setEditInfo(true)
    }

    function cancelChangesACB() {
        setEditInfo(false)
        // reset the form with the current info values
        dispatch(editFormInfo(info))
    }

    function saveInfoChangesACB() {
        dispatch(saveInfo()).then(function resetEditModeACB() {
            setEditInfo(false)
        })
    }

    function setFormInputACB(name, value) {
        setFormInputs({ ...formInputs, [name]: value })
        dispatch(editFormInfo({ ...formInputs, [name]: value }))
    }

    const departments = schools.map((school) => school.name)

    return (
        <Box>
            {editInfo && (
                <ProfileInfoFormView
                    formInputs={formInputs}
                    setFormInput={setFormInputACB}
                    saveInfoChanges={saveInfoChangesACB}
                    cancelInfoChanges={cancelChangesACB}
                    nationalities={nationalities}
                    universities={universities}
                    departments={departments}
                />
            )}
            {!editInfo && (
                <ProfileInfoView
                    profile={info}
                    logout={logoutACB}
                    setEdit={setEditInfoACB}
                />
            )}
        </Box>
    )
}
