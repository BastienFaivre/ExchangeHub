import { Box, CircularProgress, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveFilterSearchStudents } from "../../redux/reducers/studentsReducer"
import { nationalities } from "../../utils/nationalities"
import StudentsSearchFormView from "./searchFormView"
import StudentsResultsView from "./searchResultsView"

export default function StudentsSearchPresenter() {
    const dispatch = useDispatch()
    const { loading, error, data } = useSelector(
        (state) => state.students.results
    )

    // search parameters
    const [searchNationality, setSearchNationality] = useState("")
    const [searchDepartment, setSearchDepartment] = useState("")

    function nationalityChangedACB(newNationality) {
        setSearchNationality(newNationality)
        dispatch(
            saveFilterSearchStudents({
                nationality: newNationality,
                department: searchDepartment,
            })
        )
    }

    function departementChangedACB(newDepartment) {
        setSearchDepartment(newDepartment)
        dispatch(
            saveFilterSearchStudents({
                nationality: searchNationality,
                department: newDepartment,
            })
        )
    }

    useEffect(function initialSearchCB() {
        dispatch(
            saveFilterSearchStudents(
                {
                    nationality: searchNationality,
                    department: searchDepartment,
                },
                true
            )
        )
    }, [])

    const departments = [
        "Computer Science",
        "Mathematics",
        "Physics",
        "Communication Systems",
    ]

    return (
        <Box>
            <StudentsSearchFormView
                searchNationality={searchNationality}
                searchDepartment={searchDepartment}
                setSearchNationality={nationalityChangedACB}
                setSearchDepartment={departementChangedACB}
                nationalities={nationalities}
                departments={departments}
            />
            {data.length > 0 && <StudentsResultsView students={data} />}
            {data.length === 0 && (
                <Typography
                    variant="h5"
                    sx={{ padding: "20px", textAlign: "center" }}
                >
                    No students matching the specified search type
                </Typography>
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
