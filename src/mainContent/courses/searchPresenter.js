import SearchFormView from "./searchFormView"

import { useEffect, useState } from "react"
import { getCourseDetails, searchCourses } from "../../coursesAPI"
import SearchResultsView from "./searchResultsView"

export default function SearchForm(props) {
	const [searchDepartmentCode, setSearchDepartmentCode] = useState("")
	const [promise, setPromise] = useState(null)
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)

	function doSearchACB(searchText) {
		console.log(searchText)
		if (searchText && searchText.length > 0) {
			setPromise(searchCourses({ text_pattern: searchText }))
		}
	}

	function searchChangedACB() {
		setData(null)
		setError(null)
		let cancelled = false
		function searchChangedAgainACB() {
			cancelled = true
		}
		if (promise) {
			promise
				.then(function saveDataACB(newData) {
					if (!cancelled) {
						setData(newData)
					}
				})
				.catch(function saveErrorACB(err) {
					if (!cancelled) {
						setError(err)
					}
				})
		}
		return searchChangedAgainACB
	}

	useEffect(searchChangedACB, [promise])

	function courseClickedACB(courseCode) {
		console.log(getCourseDetails(courseCode))
	}

	return (
		<div>
			<SearchFormView search={doSearchACB} />
			{data ? (
				<SearchResultsView
					searchResults={data}
					courseClicked={courseClickedACB}
				/>
			) : (
				<p>no data</p>
			)}
		</div>
	)
}
