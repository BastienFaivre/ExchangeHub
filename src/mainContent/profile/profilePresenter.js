import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchStudentProfile } from "../../redux/reducers/profileReducer"
import Card from "@mui/material/Card"
import { CircularProgress, Typography } from "@mui/material"

import InfoPresenter from "./infoPresenter"
import CommentsPresenter from "./commentsPresenter"

export default function ProfilePresenter(props) {
    const { loading, error } = useSelector((state) => state.profile)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStudentProfile())
    }, [])

    if (loading) return <CircularProgress />

    if (error[0]) return <Typography>{error[1]}</Typography>

    return (
        <Card>
            <InfoPresenter />
            <CommentsPresenter />
        </Card>
    )
}
