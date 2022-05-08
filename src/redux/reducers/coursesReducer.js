import { searchCourses, getCourseDetails } from "../../API/coursesAPI"
import { getCommentsByCourseCode } from "../../API/firebase/comments"
import isObjectEqual from "../../utils/isObjectEqual"

const initialState = {
    results: {
        loading: false,
        error: false,
        data: [],
    },
    courseDetails: {
        loading: false,
        error: false,
        courseCode: null,
        data: {},
        comments: [],
    },
    searchFilter: {
        text_pattern: "",
        school_code: "",
        department_prefix: "",
    },
}

export function coursesReducer(state = initialState, action) {
    switch (action.type) {
        case "COURSE_SET_SEARCH_FILTER":
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
        case "COURSE_SET_ERROR_COURSES":
            return {
                ...state,
                results: {
                    loading: false,
                    error: true,
                    data: [],
                },
            }
        case "COURSE_SET_RESULTS":
            const { results } = action.payload
            return {
                ...state,
                results: {
                    loading: false,
                    error: false,
                    data: results,
                },
            }
        case "COURSE_BEGIN_FETCH_DETAILS":
            const { courseCode } = action.payload
            return {
                ...state,
                courseDetails: {
                    courseCode,
                    loading: true,
                    error: false,
                    data: {},
                    comments: [],
                },
            }
        case "COURSE_SET_ERROR_DETAILS":
            return {
                ...state,
                courseDetails: {
                    courseCode: state.courseDetails.courseCode,
                    loading: false,
                    error: true,
                    data: {},
                    comments: [],
                },
            }
        case "COURSE_SET_COURSE_DETAILS":
            const { courseDetails, comments } = action.payload
            return {
                ...state,
                courseDetails: {
                    courseCode: state.courseDetails.courseCode,
                    loading: false,
                    error: false,
                    data: courseDetails,
                    comments: comments,
                },
            }

        default:
            return state
    }
}

export function saveFilterSearchCourses(searchFilter) {
    return async function saveFilterSearchCoursesThunk(dispatch, getState) {
        try {
            let state = getState()
            // checking is search filter is same as before to avoid fetching twice on the same filter
            if (!isObjectEqual(searchFilter, state.courses.searchFilter)) {
                dispatch({
                    type: "COURSE_SET_SEARCH_FILTER",
                    payload: { searchFilter },
                })
                const results = await searchCourses({
                    text_pattern: searchFilter.text_pattern,
                    department_prefix: searchFilter.department_prefix,
                })

                // Checking to see that the search filter hasn't been changed while waiting for the resulsts
                // to avoid race condition
                state = getState()

                if (Object.is(searchFilter, state.courses.searchFilter)) {
                    dispatch({
                        type: "COURSE_SET_RESULTS",
                        payload: { results },
                    })
                }
            }
        } catch (e) {
            dispatch({ type: "COURSE_SET_ERROR_COURSES" })
        }
    }
}

export function saveCourseCode(courseCode) {
    return async function saveCourseCodeThunk(dispatch, getState) {
        try {
            let state = getState()
            // checking course code is same as previous to avoid fetching again
            if (courseCode !== state.courses.courseDetails.courseCode) {
                dispatch({
                    type: "COURSE_BEGIN_FETCH_DETAILS",
                    payload: { courseCode },
                })

                const [detailsResponse, commentsResponse] = await Promise.all([
                    getCourseDetails(courseCode),
                    getCommentsByCourseCode(courseCode),
                ])

                // Checking to see that the course code hasn't been changed while waiting for the resulsts
                // to avoid race condition
                state = getState()

                if (courseCode === state.courses.courseDetails.courseCode) {
                    const courseDetails = detailsResponse
                    const comments = commentsResponse
                    dispatch({
                        type: "COURSE_SET_COURSE_DETAILS",
                        payload: { courseDetails, comments },
                    })
                }
            }
        } catch (e) {
            dispatch({ type: "COURSE_SET_ERROR_DETAILS" })
        }
    }
}
