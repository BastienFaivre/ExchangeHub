import SearchFormView from "./searchFormView"

import SearchResultsView from "./searchResultsView"
import { useDispatch, useSelector } from "react-redux"

import Box from "@mui/material/Box"
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
		dispatch(saveFilterSearchCourses({ text_pattern: searchText }))
	}

	function courseClickedACB(courseCode) {
		dispatch(getCourseDetails(courseCode))
	}

	return (
		<Box>
			<SearchFormView search={doSearchACB} />
			<SearchResultsView
				searchResults={data}
				error={error}
				loading={loading}
				courseClicked={courseClickedACB}
			/>
		</Box>
	)
}
