import { CircularProgress } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getStudentDetails } from "../../redux/reducers/studentsReducer"
import StudentView from "./studentView"

export default function StudentPresenter() {
    const params = useParams()
    const dispatch = useDispatch()
    const { loading, error, studentId, data, comments, tips } = useSelector(
        (state) => state.students.studentDetails
    )

    useEffect(() => {
        if (studentId !== params.id) {
            dispatch(getStudentDetails(params.id))
        }
    }, [])

    return (
        <Box>
            {Object.keys(data).length > 0 && (
                <StudentView
                    studentData={data}
                    comments={comments}
                    tips={tips}
                />
            )}
            {loading && (
                <Box sx={{ width: "fit-content", mx: "auto", padding: "20px" }}>
                    <CircularProgress color="primary" m="auto" />
                </Box>
            )}
            {error && <p>Error</p>}
        </Box>
    )
}