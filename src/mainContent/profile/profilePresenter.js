import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchStudentProfile } from "../../redux/reducers/profileReducer"
import Card from "@mui/material/Card"
import { CircularProgress } from "@mui/material"

import InfoPresenter from "./infoPresenter"
import CommentsPresenter from "./commentsPresenter"
import { Box } from "@mui/system"

export default function ProfilePresenter() {
    const { loading, error } = useSelector((state) => state.profile)

    const dispatch = useDispatch()

    useEffect(function fetchStudentProfileACB() {
        dispatch(fetchStudentProfile())
    }, [])

    return (
        <Box>
            {loading && (
                <Box sx={{ width: "fit-content", mx: "auto", padding: "20px" }}>
                    <CircularProgress color="primary" m="auto" />
                </Box>
            )}
            {error && <p>Error</p>}
            {!loading && !error && (
                <Card>
                    <InfoPresenter />
                    <CommentsPresenter />
                </Card>
            )}
        </Box>
    )
}
