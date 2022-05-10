import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchStudentProfile } from "../../redux/reducers/profileReducer"
import Card from "@mui/material/Card"
import InfoPresenter from "./infoPresenter"
import CommentsPresenter from "./commentsPresenter"
import { Box } from "@mui/system"
import TipPresenter from "./tipPresenter"
import LoadingErrorHandler from "../LoadingErrorHandler"

export default function ProfilePresenter() {
    const { loading, error } = useSelector((state) => state.profile)

    const dispatch = useDispatch()

    useEffect(function fetchStudentProfileACB() {
        dispatch(fetchStudentProfile())
    }, [])

    return (
        <Box>
            <LoadingErrorHandler loading={loading} error={error}>
                <Card>
                    <InfoPresenter />
                    <CommentsPresenter />
                    <TipPresenter />
                </Card>
            </LoadingErrorHandler>
        </Box>
    )
}
