import { CircularProgress, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getStudentDetails } from "../../redux/reducers/studentsReducer"
import { getTips, saveFilterSearchTips } from "../../redux/reducers/tipsReducer"
import TipsSearchFormView from "./searchFormView"
import TipsResultsView from "./searchResultsView"
import { types } from "../../utils/tipTypes"
import LoadingErrorHandler from "../LoadingErrorHandler"

export default function TipsSearchPresenter() {
    const dispatch = useDispatch()
    const { loading, error, data } = useSelector((state) => state.tips.results)
    const searchFilter = useSelector((state) => state.tips.searchFilter)

    // search parameters
    const [searchInput, setSearchInput] = useState("")
    const [searchType, setSearchType] = useState("")

    // Note: the input parameter is not used in the Firebase query,
    // it is only used to sort the fetched tips more easily

    function inputChangedACB(input) {
        setSearchInput(input)
        dispatch(
            saveFilterSearchTips({ text_pattern: input, type: searchType })
        )
    }

    function typeChangedACB(newType) {
        setSearchType(newType)
        dispatch(
            saveFilterSearchTips({
                text_pattern: searchInput,
                type: newType,
            })
        )
    }

    function tipClickedACB(userId) {
        dispatch(getStudentDetails(userId))
    }

    useEffect(
        function retrieveSearchParametersACB() {
            setSearchInput(searchFilter.text_pattern)
            setSearchType(searchFilter.type)
        },
        [searchFilter]
    )

    useEffect(function retrieveTipsACB() {
        dispatch(getTips())
    }, [])

    function containsSearchInputCB(tip) {
        return (
            searchInput === "" ||
            tip.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            tip.description.toLowerCase().includes(searchInput.toLowerCase())
        )
    }

    // sort tips based on search input
    const tips = data.filter(containsSearchInputCB)

    return (
        <Box>
            <TipsSearchFormView
                searchInput={searchInput}
                searchType={searchType}
                setSearchInput={inputChangedACB}
                setSearchType={typeChangedACB}
                types={types}
            />
            <LoadingErrorHandler
                loading={loading}
                error={error || tips.length === 0}
                errorMessage="No tips matching the specified search type"
            >
                <TipsResultsView tips={tips} tipClicked={tipClickedACB} />
            </LoadingErrorHandler>
        </Box>
    )
}
