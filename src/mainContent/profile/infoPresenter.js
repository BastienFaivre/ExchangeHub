import { getAuth, signOut } from "firebase/auth"
import ProfileInfoView from "./infoView"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editFormInfo, saveInfo } from "../../redux/reducers/profileReducer"
import { schools } from "../../utils/departments"
import { nationalities } from "../../utils/nationalities"
import { universities } from "../../utils/universities"
import ProfileInfoFormView from "./formInfoView"
import { Box } from "@mui/system"

export default function InfoPresenter() {
    const dispatch = useDispatch()
    const { info, form } = useSelector((state) => state.profile)

    // used to set edit mode
    const [editInfo, setEditInfo] = useState(false)

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
        dispatch(saveInfo())
        setEditInfo(false)
    }

    function setFormInputACB(name, value) {
        dispatch(editFormInfo({ ...form.info, [name]: value }))
    }

    const departments = schools.map((school) => school.name)

    return (
        <Box>
            {editInfo ? (
                <ProfileInfoFormView
                    formInputs={form.info}
                    setFormInput={setFormInputACB}
                    saveInfoChanges={saveInfoChangesACB}
                    cancelInfoChanges={cancelChangesACB}
                    nationalities={nationalities}
                    universities={universities}
                    departments={departments}
                />
            ) : (
                <ProfileInfoView
                    profile={info}
                    logout={logoutACB}
                    setEdit={setEditInfoACB}
                />
            )}
        </Box>
    )
}
