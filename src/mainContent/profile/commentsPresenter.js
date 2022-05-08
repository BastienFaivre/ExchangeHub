import { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import {
    editFormComment,
    addComment,
    editComment as updateComment,
    deleteComment,
} from "../../redux/reducers/profileReducer"
import { ProfileCommentsView as CommentsView } from "./commentsView"
import FormCommentsView from "./formCommentsView"

export default function CommentsPresenter({}) {
  const { search } = useLocation();
  const navigate = useNavigate();
  const courseCode = useSelector(
    (state) => state.courses.courseDetails.courseCode
  );
  const [editComment, setEditComment] = useState(false);

  const { courses, form } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

    useEffect(() => {
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
    }, [courses])

    function setEditCommentsACB(courseCode) {
        dispatch(
            editFormComment(
                courses.find((course) => course.courseCode === courseCode) ?? {}
            )
        )
        setEditComment(true)
    }

    function setAddCommentACB() {
        dispatch(
            editFormComment({
                courseCode: "",
                rating: 0,
                title: "",
                description: "",
                difficulty: "",
            })
        )
        setEditComment(true)
    }

    function cancelCommentChangesACB() {
        setEditComment(false)
    }

    function saveCommentEditsACB() {
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

    function handleCommentInputChange(key, newValue) {
        const newFormComment = {
            [key]: key === "rating" ? Number(newValue) : newValue,
        }
        dispatch(editFormComment(newFormComment))
    }

    return (
      <>
        {editComment && (
          <FormCommentsView
            form={form.course}
            cancelChanges={cancelCommentChangesACB}
            saveChanges={saveCommentEditsACB}
            handleInputChange={handleCommentInputChange}
          />
        )}
        
        {!editComment && (
          <CommentsView
            comments={courses}
            editComment={setEditCommentsACB}
            addComment={setAddCommentACB}
            deleteComment={deleteCommentACB}
          />
        )}
      </>
    );
}
