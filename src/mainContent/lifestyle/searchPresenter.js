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
            type: "Food",
            title: "Where to eat around the campus",
            description: "Nymble is a good place to eat ...",
        },
        {
            type: "Sport",
            title: "Gym at KTH Hallen",
            description: "The gym is located on the campus and ...",
        },
        {
            type: "Nightlife",
            title: "O'learys Norrtull",
            description:
                "The bar is located at Norrtull and is super cool to watch football matches ...",
        },
    ]

    // TODO query all tips if no search type is selected
    // otherwise query only tips of the selected type
    // the sort made with the search input is done in the result view

    // The name of the author of each query has also to be queried
    // so that the user can click on the author name and is redirect to
    // the author profile page
    // The code of the view need to be updated to display the author name

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
