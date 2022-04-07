import SearchFormView from "./searchFormView"

import SearchResultsView from "./searchResultsView"
import { useDispatch, useSelector } from "react-redux"

import Box from "@mui/material/Box"
import { CircularProgress } from "@mui/material"
import {
	getCourseDetails,
	saveFilterSearchCourses,
} from "../../redux/reducers/coursesReducer"

import { useState } from "react"

export default function SearchPresenter(props) {

	const [searchInput, setSearchInput] = useState("")

	const { loading, error, data } = useSelector(
		(state) => state.courses.results
	)

	const dispatch = useDispatch()

	function doSearchACB() {
		if (searchInput && searchInput.length > 0) {
			dispatch(saveFilterSearchCourses({ text_pattern: searchInput }))
		}
	}

	function inputChangedACB(input) {
		setSearchInput(input)
	}

	function courseClickedACB(courseCode) {
		dispatch(getCourseDetails(courseCode))
	}

	return (
		<Box>
			<SearchFormView search={doSearchACB} searchInput={searchInput} setSearchInput={inputChangedACB} />
			{data.length > 0 && (
				<SearchResultsView
					searchResults={data}
					courseClicked={courseClickedACB}
				/>
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
