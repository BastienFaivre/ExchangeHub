import CourseView from "./courseView"
import { useDispatch, useSelector } from "react-redux"
import Box from "@mui/material/Box"
import { CircularProgress } from "@mui/material"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { saveCourseCode } from "../../redux/reducers/coursesReducer"
import { getStudentDetails } from "../../redux/reducers/studentsReducer"
import LoadingErrorHandler from "../LoadingErrorHandler"

export default function CoursePresenter() {
    const params = useParams()
    const dispatch = useDispatch()
    const { loading, error, courseCode, data, comments } = useSelector(
        (state) => state.courses.courseDetails
    )

    function commentClickedACB(userId) {
        // Clicking on a comment will open the student profile
        dispatch(getStudentDetails(userId))
    }

    useEffect(function componentWasCreatedACB() {
        if (!courseCode && params.id) {
            dispatch(saveCourseCode(params.id))
        }
    }, [])

    return (
        <Box>
            <LoadingErrorHandler loading={loading} error={error}>
                {Object.keys(data).length > 0 && (
                    <CourseView
                        courseData={data}
                        comments={comments}
                        commentClicked={commentClickedACB}
                    />
                )}
            </LoadingErrorHandler>
        </Box>
    )
}
