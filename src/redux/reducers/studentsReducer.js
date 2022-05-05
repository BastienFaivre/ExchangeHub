import { getCommentsByStudentId } from "../../API/firebase/comments"
import {
    getUser,
    getUsersByNationalityAndUniversityAndDepartment,
} from "../../API/firebase/students"
import { getTipsByStudentId } from "../../API/firebase/tips"
import isObjectEqual from "../../utils/isObjectEqual"

const initialState = {
    results: {
        loading: false,
        error: false,
        data: [],
    },
    studentDetails: {
        loading: false,
        error: false,
        studentId: null,
        data: {},
        comments: [],
        tips: [],
    },
    searchFilter: {
        nationality: "",
        university: "",
        department: "",
    },
}

export function studentsReducer(state = initialState, action) {
    switch (action.type) {
        case "STUDENTS_SET_SEARCH_FILTER":
            const { searchFilter } = action.payload
            return {
                ...state,
                searchFilter,
                results: {
                    loading: true,
                    error: false,
                    data: [],
                },
            }
        case "STUDENTS_SET_ERROR":
            return {
                ...state,
                results: {
                    loading: false,
                    error: true,
                    data: [],
                },
            }
        case "STUDENTS_SET_RESULTS":
            const { results } = action.payload
            return {
                ...state,
                results: {
                    loading: false,
                    error: false,
                    data: results,
                },
            }
        case "STUDENTS_BEGIN_FETCH_DETAILS":
            const { studentId } = action.payload
            return {
                ...state,
                studentDetails: {
                    studentId,
                    loading: true,
                    error: false,
                    data: {},
                    comments: [],
                    tips: [],
                },
            }
        case "STUDENTS_SET_ERROR_DETAILS":
            return {
                ...state,
                studentDetails: {
                    studentId: state.studentDetails.studentId,
                    loading: false,
                    error: true,
                    data: {},
                    comments: [],
                    tips: [],
                },
            }
        case "STUDENTS_SET_STUDENT_DETAILS":
            const { studentDetails, comments, tips } = action.payload
            return {
                ...state,
                studentDetails: {
                    studentId: state.studentDetails.studentId,
                    loading: false,
                    error: false,
                    data: studentDetails,
                    comments: comments,
                    tips: tips,
                },
            }

        default:
            return state
    }
}

export function saveFilterSearchStudents(searchFilter, isFirstSearch = false) {
    return async function saveFilterSearchStudentsThunk(dispatch, getState) {
        try {
            let state = getState()
            // checking is search filter is same as before to avoid fetching twice on the same filter
            if (
                isFirstSearch ||
                !isObjectEqual(searchFilter, state.students.searchFilter)
            ) {
                dispatch({
                    type: "STUDENTS_SET_SEARCH_FILTER",
                    payload: { searchFilter },
                })

                let results =
                    await getUsersByNationalityAndUniversityAndDepartment(
                        searchFilter.nationality,
                        searchFilter.university,
                        searchFilter.department
                    )

                state = getState()

                if (Object.is(searchFilter, state.students.searchFilter)) {
                    dispatch({
                        type: "STUDENTS_SET_RESULTS",
                        payload: { results },
                    })
                }
            }
        } catch (e) {
            dispatch({ type: "STUDENTS_SET_ERROR" })
        }
    }
}

export function getStudentDetails(studentId) {
    return async function getStudentDetailsThunk(dispatch, getState) {
        try {
            let state = getState()
            // checking is search filter is same as before to avoid fetching twice on the same filter
            if (studentId !== state.students.studentDetails.studentId) {
                dispatch({
                    type: "STUDENTS_BEGIN_FETCH_DETAILS",
                    payload: { studentId },
                })
                const [detailsResponse, commentsResponse, tipsResponse] =
                    await Promise.all([
                        getUser(studentId),
                        getCommentsByStudentId(studentId),
                        getTipsByStudentId(studentId),
                    ])
                state = getState()

                if (studentId === state.students.studentDetails.studentId) {
                    const studentDetails = detailsResponse
                    const comments = commentsResponse
                    const tips = tipsResponse
                    dispatch({
                        type: "STUDENTS_SET_STUDENT_DETAILS",
                        payload: {
                            studentDetails,
                            comments,
                            tips,
                        },
                    })
                }
            }
        } catch (e) {
            dispatch({ type: "STUDENTS_SET_ERROR_DETAILS" })
        }
    }
}
