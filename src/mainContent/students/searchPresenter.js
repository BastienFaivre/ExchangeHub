import { Box } from "@mui/material"
import { useState } from "react"
import StudentsSearchFormView from "./searchFormView"
import StudentsResultsView from "./searchResultsView"

export default function StudentsSearchPresenter() {
    const [searchNationality, setSearchNationality] = useState("")
    const [searchDepartment, setSearchDepartment] = useState("")

    function nationalityChangedACB(newNationality) {
        setSearchNationality(newNationality)
    }

    function departementChangedACB(newDepartment) {
        setSearchDepartment(newDepartment)
    }

    const students = [
        {
            name: "Bastien Faivre",
            nationality: "Switzerland",
            department: "Computer Science",
            year: new Date().getFullYear(),
        },
        {
            name: "Philip Hamelink",
            nationality: "Switzerland",
            department: "Communication System",
            year: new Date().getFullYear(),
        },
        {
            name: "Ermias Habtegabr",
            nationality: "Norway",
            department: "Computer Science",
            year: new Date().getFullYear(),
        },
    ]

    // TODO retrieve user based on the search criterias
    // clicking on a student should open the student profile

    return (
        <Box>
            <StudentsSearchFormView
                searchNationality={searchNationality}
                searchDepartment={searchDepartment}
                setSearchNationality={nationalityChangedACB}
                setSearchDepartment={departementChangedACB}
            />
            <StudentsResultsView students={students} />
        </Box>
    )
}
