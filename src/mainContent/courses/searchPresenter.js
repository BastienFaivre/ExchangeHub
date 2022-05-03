import SearchFormView from "./searchFormView"

import SearchResultsView from "./searchResultsView"
import { useDispatch, useSelector } from "react-redux"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { CircularProgress } from "@mui/material"
import {
    getCourseDetails,
    saveFilterSearchCourses,
} from "../../redux/reducers/coursesReducer"

import { useState } from "react"

export default function SearchPresenter() {
    const dispatch = useDispatch()
    const { loading, error, data } = useSelector(
        (state) => state.courses.results
    )

    // search parameters
    const [searchInput, setSearchInput] = useState("")
    const [searchSchool, setSearchSchool] = useState("")
    const [searchDepartment, setSearchDepartment] = useState("")

    // Note: the school parameter is not used in the API query,
    // it is only used to choose a department more easily.
    // This is also due to the fact the the API query has not
    // a school parameter.

    function inputChangedACB(input) {
        setSearchInput(input)
    }

    function schoolChangedACB(schoolCode) {
        setSearchSchool(schoolCode)
        // changing the school also resets the department
        setSearchDepartment("")
    }

    function departmentChangedACB(departmentCode) {
        setSearchDepartment(departmentCode)
    }

    function doSearchACB() {
        // at least one of the search parameters must be set (excluding the school)
        // in order to do the API query. This is due to the fact that the API needs
        // at least one parameter.
        // see API endpoint "/api/kopps/v2/courses/search" (https://www.kth.se/api/kopps/v2/apiInfo/courses)
        // for more information
        if (
            (searchInput && searchInput.length > 0) ||
            searchDepartment !== ""
        ) {
            dispatch(
                saveFilterSearchCourses({
                    text_pattern: searchInput,
                    department_prefix: searchDepartment,
                })
            )
        } else {
            alert(
                "You should at least specify a text pattern or choose a department!"
            )
        }
    }

    function courseClickedACB(courseCode) {
        dispatch(getCourseDetails(courseCode))
    }

    return (
        <Box>
            <SearchFormView
                search={doSearchACB}
                searchInput={searchInput}
                setSearchInput={inputChangedACB}
                searchSchool={searchSchool}
                setSearchSchool={schoolChangedACB}
                searchDepartment={searchDepartment}
                setSearchDepartment={departmentChangedACB}
            />
            {data.length > 0 && (
                <SearchResultsView
                    searchResults={data}
                    courseClicked={courseClickedACB}
                />
            )}
            {data.length === 0 && !loading && (
                <Typography
                    variant="h5"
                    sx={{ padding: "20px", textAlign: "center" }}
                >
                    No courses matching the specified search terms
                </Typography>
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
