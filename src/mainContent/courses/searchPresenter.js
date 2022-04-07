import SearchFormView from "./searchFormView"

import SearchResultsView from "./searchResultsView"
import { useDispatch, useSelector } from "react-redux"

import Box from "@mui/material/Box"
import { CircularProgress } from "@mui/material"
import {
	getCourseDetails,
	saveFilterSearchCourses,
} from "../../redux/reducers/coursesReducer"

export default function SearchPresenter(props) {
	const { loading, error, data } = useSelector(
		(state) => state.courses.results
	)

	const dispatch = useDispatch()

	function doSearchACB(searchText) {
		if (searchText && searchText.length > 0) {
			dispatch(saveFilterSearchCourses({ text_pattern: searchText }))
		}
	}

	function courseClickedACB(courseCode) {
		dispatch(getCourseDetails(courseCode))
	}

	return (
		<Box>
			<SearchFormView search={doSearchACB} />
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
