import {
    getCommentsForProfile,
    saveComment,
    updateComment,
    removeComment,
} from "../../API/firebase/comments"
import {
    createUserProfile,
    getStudentProfile,
    updateUserForm,
    updateUserInfo,
} from "../../API/firebase/students"
import { getTipsForProfile, saveTip } from "../../API/firebase/tips"
import isObjectEqual from "./../../utils/isObjectEqual"

const initialState = {
    loading: false,
    error: false,
    courses: [],
    tips: [],
    info: {
        forname: "",
        lastname: "",
        nationality: "",
        university: "",
        department: "",
        year: new Date().getFullYear(),
    },
    form: {
        course: {
            courseCode: "", // ID of course on kth courses api
            rating: 0,
            title: "",
            description: "",
            difficulty: "",
        },
        tip: {
            type: "",
            title: "",
            description: "",
        },
        info: {
            forname: "",
            lastname: "",
            nationality: "",
            university: "",
            department: "",
            year: new Date().getFullYear(),
        },
    },
}

export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case "PROFILE_FETCH_DATA":
            return {
                ...state,
                loading: true,
                error: false,
            }
        case "PROFILE_SET_ERROR":
            return {
                ...state,
                loading: false,
                error: true,
            }
        case "PROFILE_SET_DATA":
            const { form, info, tips, comments } = action.payload
            return {
                loading: false,
                error: false,
                courses: comments,
                info,
                tips,
                form: { ...form, info },
            }
        case "PROFILE_ADD_COURSE":
            const { formCourse } = action.payload
            return {
                ...state,
                loading: false,
                error: false,
                courses: [...state.courses, formCourse],
                form: {
                    ...state.form,
                    course: initialState.form.course,
                },
            }
        case "PROFILE_ADD_TIP":
            const { formTip } = action.payload
            return {
                ...state,
                loading: false,
                error: false,
                tips: [...state.tips, formTip],
                form: {
                    ...state.form,
                    tip: initialState.form.tip,
                },
            }
        case "PROFILE_REMOVE_TIP":
            const { formTip } = action.payload
            return {
                ...state,
            }
        case "PROFILE_UPDATE_INFO":
            const { formInfo } = action.payload
            return {
                ...state,
                loading: false,
                error: false,
                info: formInfo,
                form: {
                    ...state.form,
                    info: formInfo,
                },
            }
        case "PROFILE_UPDATE_COMMENT":
            const { formCourseEdited } = action.payload
            return {
                ...state,
                loading: false,
                error: false,
                courses: [
                    ...state.courses.filter(
                        (course) =>
                            course.courseCode !== formCourseEdited.courseCode
                    ),
                    formCourseEdited,
                ],
                form: {
                    ...state.form,
                    course: initialState.form.course,
                },
            }
        case "PROFILE_REMOVE_COMMENT":
            const { commentId } = action.payload
            return {
                ...state,
                loading: false,
                error: false,
                courses: [
                    ...state.courses.filter(
                        (course) => course.id !== commentId
                    ),
                ],
            }
        case "PROFILE_SAVE_FORM":
            const formToSave = action.payload.form
            return {
                ...state,
                loading: false,
                error: false,
                form: formToSave,
            }
        case "PROFILE_EDIT_FORM_INFO":
            const editedFormInfo = action.payload.formInfo
            return {
                ...state,
                form: {
                    ...state.form,
                    info: { ...state.form.info, ...editedFormInfo },
                },
            }
        case "PROFILE_EDIT_FORM_COMMENT":
            const editedFormComment = action.payload.formComment
            return {
                ...state,
                form: {
                    ...state.form,
                    course: { ...state.form.course, ...editedFormComment },
                },
            }
        default:
            return state
    }
}

export function editFormComment(formComment) {
    return {
        type: "PROFILE_EDIT_FORM_COMMENT",
        payload: { formComment },
    }
}

export function editFormInfo(formInfo) {
    return {
        type: "PROFILE_EDIT_FORM_INFO",
        payload: { formInfo },
    }
}

export function fetchStudentProfile() {
    return async function fetchStudentProfileThunk(dispatch) {
        try {
            dispatch({
                type: "PROFILE_FETCH_DATA",
            })

            const studentProfile = await getStudentProfile()

            const comments = await getCommentsForProfile()

            const tips = await getTipsForProfile()

            if (!studentProfile) {
                await createUserProfile({
                    info: initialState.info,
                    form: initialState.form,
                })
                dispatch({
                    type: "PROFILE_SET_DATA",
                    payload: {
                        form: initialState.form,
                        info: initialState.info,
                        tips: [],
                        comments: [],
                    },
                })
            } else {
                const { form, info } = studentProfile
                dispatch({
                    type: "PROFILE_SET_DATA",
                    payload: { form, info, tips, comments },
                })
            }
        } catch (e) {
            dispatch({
                type: "PROFILE_SET_ERROR",
            })
        }
    }
}

export function addComment() {
    return async function addCommentThunk(dispatch, getState) {
        try {
            dispatch({
                type: "PROFILE_FETCH_DATA",
            })

            const state = getState().profile

            const comment = state.form.course

            if (!comment.courseCode) {
                throw new Error("No course code")
            }

            if (
                state.courses.find((c) => c.courseCode === comment.courseCode)
            ) {
                throw new Error("User already reviewed this course")
            }

            // add the author name to the comment
            comment.forname = state.info.forname
            comment.lastname = state.info.lastname

            const commentId = await saveComment(comment)

            const formCourse = getState().profile.form.course

            if (isObjectEqual(formCourse, comment)) {
                dispatch({
                    type: "PROFILE_ADD_COURSE",
                    payload: { formCourse: { ...formCourse, id: commentId } },
                })
            }
        } catch (e) {
            dispatch({
                type: "PROFILE_SET_ERROR",
            })
        }
    }
}

export function editComment() {
    return async function editCommentThunk(dispatch, getState) {
        try {
            dispatch({
                type: "PROFILE_FETCH_DATA",
            })

            const state = getState().profile

            const comment = state.form.course

            if (!comment.courseCode) {
                throw new Error("No course code")
            }

            await updateComment(comment)

            const formCourse = getState().profile.form.course

            if (isObjectEqual(formCourse, comment)) {
                dispatch({
                    type: "PROFILE_UPDATE_COMMENT",
                    payload: { formCourseEdited: formCourse },
                })
            }
        } catch (e) {
            dispatch({
                type: "PROFILE_SET_ERROR",
            })
        }
    }
}

export function deleteComment(commentId) {
    return async function deleteCommentThunk(dispatch, getState) {
        try {
            dispatch({
                type: "PROFILE_FETCH_DATA",
            })

            const state = getState().profile

            const comment = state.courses.find((c) => c.id === commentId)

            if (!commentId || !comment) {
                throw new Error("Comment id not found")
            }

            dispatch({
                type: "PROFILE_REMOVE_COMMENT",
                payload: { commentId },
            })

            await removeComment(commentId)
        } catch (e) {
            dispatch({
                type: "PROFILE_SET_ERROR",
            })
        }
    }
}

export function deleteTip(tipId) {
    return async function deleteCommentThunk(dispatch, getState) {
        try {
            dispatch({
                type: "PROFILE_FETCH_DATA",
            })

            const state = getState().profile

            const comment = state.courses.find((c) => c.id === commentId)

            if (!tipId || !comment) {
                throw new Error("Comment id not found")
            }

            dispatch({
                type: "PROFILE_REMOVE_COMMENT",
                payload: { tipId },
            })

            await removeComment(tipId)
        } catch (e) {
            dispatch({
                type: "PROFILE_SET_ERROR",
            })
        }
    }
}

export function addTip() {
    return async function addTipThunk(dispatch, getState) {
        try {
            dispatch({
                type: "PROFILE_FETCH_DATA",
            })

            const state = getState().profile

            const tip = state.form.tip

            await saveTip(tip)

            const formTip = getState().profile.form.tip

            if (isObjectEqual(formTip, tip)) {
                dispatch({
                    type: "PROFILE_ADD_TIP",
                    payload: { formTip },
                })
            }
        } catch (e) {
            dispatch({
                type: "PROFILE_SET_ERROR",
            })
        }
    }
}

export function saveForm() {
    return async function saveFormThunk(dispatch, getState) {
        try {
            dispatch({
                type: "PROFILE_FETCH_DATA",
            })

            const state = getState().profile

            const form = state.form

            await updateUserForm(form)

            const formToSave = getState().profile.form

            if (isObjectEqual(formToSave, form)) {
                dispatch({ type: "PROFILE_SAVE_FORM", payload: { formToSave } })
            }
        } catch (e) {
            dispatch({
                type: "PROFILE_SET_ERROR",
            })
        }
    }
}

export function saveInfo() {
    return async function saveInfoThunk(dispatch, getState) {
        try {
            dispatch({
                type: "PROFILE_FETCH_DATA",
            })

            const state = getState().profile

            const info = state.form.info

            await updateUserInfo(info)

            const formInfo = getState().profile.form.info

            if (isObjectEqual(formInfo, info)) {
                dispatch({ type: "PROFILE_UPDATE_INFO", payload: { formInfo } })
            }
        } catch (e) {
            dispatch({
                type: "PROFILE_SET_ERROR",
            })
        }
    }
}
