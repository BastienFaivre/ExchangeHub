import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProfileTipsView from "./tipView"
import {
    deleteTip,
    addTip,
    editFormTip,
} from "../../redux/reducers/profileReducer"
import { useNavigate } from "react-router-dom"
import { updateTip } from "../../API/firebase/tips"
import FormTipsView from "./formTipView"

export default function TipPresenter() {
    const dispatch = useDispatch()
    const { tips, form } = useSelector((state) => state.profile)

    const [editTip, setEditTip] = useState(false)

    const navigate = useNavigate()

    function setEditTipACB(tipId) {
        dispatch(editFormTip(tips.find((tip) => tip.id === tipId ?? {})))
        setEditTip(true)
    }

    function cancelTipChangesACB() {
        setEditTip(false)
        navigate("/profile")
    }

    function saveTipEditACB(tipId) {
        navigate("/profile")
        if (tips.find((tip) => tip.id === tipId)) {
            dispatch(updateTip())
        } else {
            dispatch(addTip())
        }
    }

    function deleteTipACB(tipId) {
        dispatch(deleteTip(tipId))
    }

    function setTipFormInputACB(name, value) {
        console.log({ ...form.tip, [name]: value })
        dispatch(editFormTip({ ...form.tip, [name]: value }))
    }

    // TODO add a "show more button to show a long tip"
    // function tipClickedACB(tipId) {
    //     dispatch()
    // }

    return (
        <Box>
            {editTip && (
                <FormTipsView
                    tipFormInputs={form.tip}
                    setTipFormInput={setTipFormInputACB}
                    cancelTipChanges={cancelTipChangesACB}
                    saveTipChanges={saveTipEditACB}
                />
            )}
            {!editTip && (
                <ProfileTipsView
                    tips={tips}
                    editTip={setEditTipACB}
                    deleteTip={deleteTipACB}
                />
            )}
        </Box>
    )
}
