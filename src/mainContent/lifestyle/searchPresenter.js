import { Box } from "@mui/system"
import { useState } from "react"
import TipsSearchFormView from "./searchFormView"
import TipsResultsView from "./searchResultsView"

export default function TipsSearchPresenter() {
    const [searchInput, setSearchInput] = useState("")
    const [searchType, setSearchType] = useState("")

    function inputChangedACB(input) {
        setSearchInput(input)
    }

    function typeChangedACB(newType) {
        setSearchType(newType)
    }

    const tips = [
        {
            type: "food",
            title: "Where to eat around the campus",
            description: "Nymble is a good place to eat ...",
        },
        {
            type: "sport",
            title: "Gym at KTH Hallen",
            description: "The gym is located on the campus and ...",
        },
        {
            type: "nightlife",
            title: "O'learys Norrtull",
            description:
                "The bar is located at Norrtull and is super cool to watch football matches ...",
        },
    ]

    return (
        <Box>
            <TipsSearchFormView
                searchInput={searchInput}
                searchType={searchType}
                setSearchInput={inputChangedACB}
                setSearchType={typeChangedACB}
            />
            <TipsResultsView
                searchInput={searchInput}
                searchType={searchType}
                tips={tips}
            />
        </Box>
    )
}
