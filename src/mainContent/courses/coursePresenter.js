import CourseView from "./courseView"
import { useDispatch, useSelector } from "react-redux"
import Box from "@mui/material/Box"
import { CircularProgress } from "@mui/material"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { saveCourseCode } from "../../redux/reducers/coursesReducer"
import { getStudentDetails } from "../../redux/reducers/studentsReducer"

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
            {Object.keys(data).length > 0 && (
                <CourseView
                    courseData={data}
                    comments={comments}
                    commentClicked={commentClickedACB}
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
