import { getAllTips, getTipsByType } from "../../API/firebase/tips"
import isObjectEqual from "../../utils/isObjectEqual"

const initialState = {
    results: {
        loading: false,
        error: false,
        data: [],
    },
    searchFilter: {
        text_pattern: "",
        type: "",
    },
}

export function tipsReducer(state = initialState, action) {
    switch (action.type) {
        case "TIPS_SET_SEARCH_FILTER":
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
        case "TIPS_SET_ERROR":
            return {
                ...state,
                results: {
                    loading: false,
                    error: true,
                    data: [],
                },
            }
        case "TIPS_SET_RESULTS":
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

export function getTips() {
    return async function getTipsThunk(dispatch, getState) {
        try {
            let state = getState()
            const searchFilter = state.tips.searchFilter

            // this call is just used to set the loading state
            dispatch({
                type: "TIPS_SET_SEARCH_FILTER",
                payload: { searchFilter },
            })

            let results
            if (searchFilter.type === "") {
                results = await getAllTips()
            } else {
                results = await getTipsByType(searchFilter.type)
            }

            dispatch({
                type: "TIPS_SET_RESULTS",
                payload: { results },
            })
        } catch (e) {
            dispatch({ type: "TIPS_SET_ERROR" })
        }
    }
}

export function saveFilterSearchTips(searchFilter) {
    return async function saveFilterSearchTipsThunk(dispatch, getState) {
        try {
            let state = getState()
            // checking is search filter is same as before to avoid fetching twice on the same filter
            if (!isObjectEqual(searchFilter, state.tips.searchFilter)) {
                dispatch({
                    type: "TIPS_SET_SEARCH_FILTER",
                    payload: { searchFilter },
                })
                let results
                if (searchFilter.type === "") {
                    results = await getAllTips()
                } else {
                    results = await getTipsByType(searchFilter.type)
                }

                // Checking to see that the search filter hasn't been changed while waiting for the resulsts
                // to avoid race condition
                state = getState()

                if (isObjectEqual(searchFilter, state.tips.searchFilter)) {
                    dispatch({
                        type: "TIPS_SET_RESULTS",
                        payload: { results },
                    })
                }
            }
        } catch (e) {
            dispatch({ type: "TIPS_SET_ERROR" })
        }
    }
}
