import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { saveCourseCode } from "../../redux/reducers/coursesReducer"
import {
    editFormComment,
    addComment,
    editComment as updateComment,
    deleteComment,
} from "../../redux/reducers/profileReducer"
import ProfileCommentsView from "./commentsView"
import FormCommentsView from "./formCommentsView"

export default function CommentsPresenter() {
    const dispatch = useDispatch()
    const { courses, form } = useSelector((state) => state.profile)

    // used to retrieve the course code to review
    const { search } = useLocation()
    const courseCode = new URLSearchParams(search).get("courseCode")

    const navigate = useNavigate()

    // used to set edit mode
    const [editComment, setEditComment] = useState(false)

    useEffect(() => {
        // check that the student has not already written a comment for this course
        if (
            courseCode &&
            !courses.find((course) => course.courseCode === courseCode)
        ) {
            dispatch(
                editFormComment({
                    courseCode,
                    rating: 0,
                    title: "",
                    description: "",
                    difficulty: "",
                })
            )
            setEditComment(true)
        }
    }, [])

    function setEditCommentsACB(courseCode) {
        // initialize the form in redux and in the state
        dispatch(
            editFormComment(
                courses.find((course) => course.courseCode === courseCode) ?? {}
            )
        )
        setEditComment(true)
    }

    function cancelCommentChangesACB() {
        setEditComment(false)
        navigate("/profile")
    }

    function saveCommentEditsACB(courseCode) {
        navigate("/profile")
        if (courses.find((course) => course.courseCode === courseCode)) {
            dispatch(updateComment())
        } else {
            dispatch(addComment())
        }
    }

    function deleteCommentACB(commentId) {
        dispatch(deleteComment(commentId))
    }

    function setFormInputACB(name, value) {
        dispatch(editFormComment({ ...form.course, [name]: value }))
    }

    function commentClickedACB(courseCode) {
        dispatch(saveCourseCode(courseCode))
    }

    return (
        <Box>
            {editComment ? (
                <FormCommentsView
                    formInputs={form.course}
                    setFormInput={setFormInputACB}
                    cancelChanges={cancelCommentChangesACB}
                    saveChanges={saveCommentEditsACB}
                />
            ) : (
                <ProfileCommentsView
                    comments={courses}
                    editComment={setEditCommentsACB}
                    deleteComment={deleteCommentACB}
                    commentClicked={commentClickedACB}
                />
            )}
        </Box>
    )
}
