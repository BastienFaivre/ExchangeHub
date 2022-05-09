import { Box } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProfileTipsView from "./tipView"
import {
    deleteTip,
    addTip,
    editFormTip,
    editTip as updateTip,
} from "../../redux/reducers/profileReducer"
import FormTipsView from "./formTipView"

export default function TipPresenter() {
    const dispatch = useDispatch()
    const { tips, form } = useSelector((state) => state.profile)

    // used to set edit mode
    const [editTip, setEditTip] = useState(false)

    function setEditTipACB(tipId) {
        dispatch(editFormTip(tips.find((tip) => tip.id === tipId ?? {})))
        setEditTip(true)
    }

    function cancelTipChangesACB() {
        setEditTip(false)
    }

    function saveTipEditACB(tipId) {
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
        dispatch(editFormTip({ ...form.tip, [name]: value }))
    }

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
