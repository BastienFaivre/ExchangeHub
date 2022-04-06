import { getDatabase, ref, push, onValue } from "firebase/database"

import { searchCourses } from "../../coursesAPI"

const initialState = {
	results: {
		loading: false,
		error: false,
		data: [],
	},
	courseDetails: {
		loading: false,
		error: false,
		data: {},
	},
	searchFilter: {
		text_pattern: "",
		department_prefix: "",
		educational_level: "",
		term_period: "",
	},
}

export function coursesReducer(state = initialState, action) {
	switch (action.type) {
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
		case "COURSE_SET_LOADING_DETAILS":
			return {
				...state,
				courseDetails: {
					loading: true,
					error: false,
					data: [],
				},
			}
		case "COURSE_SET_ERROR_DETAILS":
			return {
				...state,
				courseDetails: {
					loading: false,
					error: true,
					data: [],
				},
			}
		case "COURSE_SET_COURSE_DETAILS":
			const { courseDetails } = action.payload
			return {
				...state,
				courseDetails: {
					loading: false,
					error: false,
					data: courseDetails,
				},
			}
		case "COURSE_SET_SEARCH_FILTER":
			const { searchFilter } = action.payload
			console.log("REDUCING", searchFilter)
			return {
				...state,
				searchFilter,
				results: {
					loading: true,
					error: false,
					data: [],
				},
			}
		default:
			return state
	}
}

export function saveFilterSearchCourses(searchFilter) {
	return async function saveFilterSearchCoursesThunk(dispatch, getState) {
		try {
			console.log(searchFilter)
			let state = getState()
			// // checking is search filter is same as before to avoid fetching twice on the same filter
			if (!Object.is(searchFilter, state.courses.searchFilter)) {
				dispatch({
					type: "COURSE_SET_SEARCH_FILTER",
					payload: { searchFilter },
				})

				const results = await searchCourses(searchFilter)

				// Checking to see that the search filter hasn't been changed while waiting for the resulsts
				// to avoid race condition
				state = getState()

				if (Object.is(searchFilter, state.courses.searchFilter)) {
					dispatch({ type: "COURSE_SET_RESULTS", payload: { results } })
				}
			}
		} catch (e) {
			dispatch({ type: "COURSE_SET_ERROR_COURSES" })
		}
	}
}
