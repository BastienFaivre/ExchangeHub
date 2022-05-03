import {
    getUsers,
    getUsersByDepartment,
    getUsersByNationality,
    getUsersByNationalityAndDepartment,
} from "../../API/firebase/students"
import isObjectEqual from "../../utils/isObjectEqual"

const initialState = {
    results: {
        loading: false,
        error: false,
        data: [],
    },
    searchFilter: {
        nationality: "",
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
                let results
                if (
                    searchFilter.nationality === "" &&
                    searchFilter.department === ""
                ) {
                    results = await getUsers()
                } else if (searchFilter.department === "") {
                    results = await getUsersByNationality(
                        searchFilter.nationality
                    )
                } else if (searchFilter.nationality === "") {
                    results = await getUsersByDepartment(
                        searchFilter.department
                    )
                } else {
                    results = await getUsersByNationalityAndDepartment(
                        searchFilter.nationality,
                        searchFilter.department
                    )
                }

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
