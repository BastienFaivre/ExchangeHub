import { Box } from "@mui/system"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { saveCourseCode } from "../../redux/reducers/coursesReducer"
import { getStudentDetails } from "../../redux/reducers/studentsReducer"
import StudentView from "./studentView"
import LoadingErrorHandler from "../LoadingErrorHandler"

export default function StudentPresenter() {
    const params = useParams()
    const dispatch = useDispatch()
    const { loading, error, studentId, data, comments, tips } = useSelector(
        (state) => state.students.studentDetails
    )

    function commentClickedACB(courseCode) {
        dispatch(saveCourseCode(courseCode))
    }

    useEffect(function componentWasCreatedACB() {
        if (!studentId && params.id) {
            dispatch(getStudentDetails(params.id))
        }
    }, [])

    return (
        <Box>
            <LoadingErrorHandler loading={loading} error={error}>
                {Object.keys(data).length > 0 && (
                    <StudentView
                        studentData={data}
                        comments={comments}
                        tips={tips}
                        commentClicked={commentClickedACB}
                    />
                )}
            </LoadingErrorHandler>
        </Box>
    )
}
