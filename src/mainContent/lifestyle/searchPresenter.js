import { CircularProgress, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveFilterSearchTips } from "../../redux/reducers/tipsReducer"
import TipsSearchFormView from "./searchFormView"
import TipsResultsView from "./searchResultsView"

export default function TipsSearchPresenter() {
    const dispatch = useDispatch()
    const { loading, error, data } = useSelector((state) => state.tips.results)

    const [searchInput, setSearchInput] = useState("")
    const [searchType, setSearchType] = useState("")

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

    return (
        <Box>
            <TipsSearchFormView
                searchInput={searchInput}
                searchType={searchType}
                setSearchInput={inputChangedACB}
                setSearchType={typeChangedACB}
            />
            {data.length > 0 && (
                <TipsResultsView
                    searchInput={searchInput}
                    searchType={searchType}
                    tips={data}
                />
            )}
            {data.length === 0 && (
                <Typography
                    variant="h5"
                    sx={{ padding: "20px", textAlign: "center" }}
                >
                    No courses matching the specified search type
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
