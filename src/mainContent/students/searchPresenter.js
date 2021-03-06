import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    getStudentDetails,
    getStudents,
    saveFilterSearchStudents,
} from "../../redux/reducers/studentsReducer"
import { schools } from "../../utils/departments"
import { nationalities } from "../../utils/nationalities"
import { universities } from "../../utils/universities"
import StudentsSearchFormView from "./searchFormView"
import StudentsResultsView from "./searchResultsView"
import LoadingErrorHandler from "../LoadingErrorHandler"

export default function StudentsSearchPresenter() {
    const dispatch = useDispatch()
    const { loading, error, data } = useSelector(
        (state) => state.students.results
    )
    const searchFilter = useSelector((state) => state.students.searchFilter)

    // search parameters
    const [searchNationality, setSearchNationality] = useState("")
    const [searchUniversity, setSearchUniversity] = useState("")
    const [searchDepartment, setSearchDepartment] = useState("")

    function nationalityChangedACB(newNationality) {
        setSearchNationality(newNationality)
        dispatch(
            saveFilterSearchStudents({
                nationality: newNationality,
                university: searchUniversity,
                department: searchDepartment,
            })
        )
    }

    function universityChangedACB(newUniversity) {
        setSearchUniversity(newUniversity)
        dispatch(
            saveFilterSearchStudents({
                nationality: searchNationality,
                university: newUniversity,
                department: searchDepartment,
            })
        )
    }

    function departementChangedACB(newDepartment) {
        setSearchDepartment(newDepartment)
        dispatch(
            saveFilterSearchStudents({
                nationality: searchNationality,
                university: searchUniversity,
                department: newDepartment,
            })
        )
    }

    function studentClickedACB(userId) {
        dispatch(getStudentDetails(userId))
    }

    useEffect(
        function retrieveSearchParametersACB() {
            setSearchNationality(searchFilter.nationality)
            setSearchUniversity(searchFilter.university)
            setSearchDepartment(searchFilter.department)
            dispatch(getStudents())
        },
        [searchFilter]
    )

    return (
        <Box>
            <StudentsSearchFormView
                searchNationality={searchNationality}
                searchUniversity={searchUniversity}
                searchDepartment={searchDepartment}
                setSearchNationality={nationalityChangedACB}
                setSearchUniversity={universityChangedACB}
                setSearchDepartment={departementChangedACB}
                nationalities={nationalities}
                universities={universities}
                departments={schools}
            />
            <LoadingErrorHandler
                error={error || data.length === 0}
                loading={loading}
                errorMessage="No students matching the specified search type"
            >
                <StudentsResultsView
                    students={data}
                    studentClicked={studentClickedACB}
                />
            </LoadingErrorHandler>
        </Box>
    )
}
