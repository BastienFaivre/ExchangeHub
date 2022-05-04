import { CircularProgress, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getStudentDetails } from "../../redux/reducers/studentsReducer"
import { saveFilterSearchTips } from "../../redux/reducers/tipsReducer"
import TipsSearchFormView from "./searchFormView"
import TipsResultsView from "./searchResultsView"
import TIP_TYPES from "../../utils/tipTypes"

export default function TipsSearchPresenter() {
    const dispatch = useDispatch()
    const { loading, error, data } = useSelector((state) => state.tips.results)

    // search parameters
    const [searchInput, setSearchInput] = useState("")
    const [searchType, setSearchType] = useState("")

    // Note: the input parameter is not used in the Firebase query,
    // it is only used to sort the fetched tips more easily

    function inputChangedACB(input) {
        setSearchInput(input)
    }

    function typeChangedACB(newType) {
        setSearchType(newType)
        dispatch(
            saveFilterSearchTips({
                type: newType,
            })
        )
    }

    function tipClickedACB(userId) {
        dispatch(getStudentDetails(userId))
    }

    useEffect(function initialSearchCB() {
        dispatch(
            saveFilterSearchTips(
                {
                    type: searchType,
                },
                true
            )
        )
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
                types={TIP_TYPES}
            />
            {tips.length > 0 && (
                <TipsResultsView tips={tips} tipClicked={tipClickedACB} />
            )}
            {tips.length === 0 && !loading && (
                <Typography
                    variant="h5"
                    sx={{ padding: "20px", textAlign: "center" }}
                >
                    No tips matching the specified search type
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
