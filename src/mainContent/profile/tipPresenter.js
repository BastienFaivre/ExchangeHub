import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProfileTipsView from "./tipView"

export default function TipPresenter() {
    const dispatch = useDispatch()
    const { tips, form } = useSelector((state) => state.profile)

    return (
        <Box>
            <ProfileTipsView />
        </Box>
    )
}
