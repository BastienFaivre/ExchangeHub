import CourseView from "./courseView"
import { useDispatch, useSelector } from "react-redux"
import Box from "@mui/material/Box"
import { CircularProgress } from "@mui/material"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCourseDetails } from "../../redux/reducers/coursesReducer"

export default function CoursePresenter() {
    const params = useParams()
    const dispatch = useDispatch()
    const { loading, error, courseCode, data, comments } = useSelector(
        (state) => state.courses.courseDetails
    )

    useEffect(() => {
        if (!courseCode && params.id) {
            dispatch(getCourseDetails(params.id))
        }
    }, [])

    return (
        <Box>
            {Object.keys(data).length > 0 && (
                <CourseView courseData={data} comments={comments} />
            )}
            {loading && (
                <Box sx={{ width: "fit-content", mx: "auto" }}>
                    <CircularProgress color="primary" m="auto" />
                </Box>
            )}
            {error && <p>Error</p>}
        </Box>
    )
}
