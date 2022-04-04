import SearchFormView from "./searchFormView";

import React from "react";
import { getCourseDetails, searchCourses } from "../../coursesAPI";
import SearchResultsView from "./searchResultsView";

export default function SearchForm(props) {

    const [searchText, setSearchText] = React.useState("");
    const [searchDepartmentCode, setSearchDepartmentCode] = React.useState("");
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    function setSearchTextACB(text) {
        setSearchText(text);
        if (text) {
            setPromise(searchCourses({text_pattern: text}));
        }
    }

    function searchChangedACB() {
        setData(null);
        setError(null);
        let cancelled = false;
        function searchChangedAgainACB() {
            cancelled = true;
        }
        if (promise) {
            promise.then(
                function saveDataACB(newData) {
                    if (!cancelled) {
                        setData(newData);
                    }
                }
            ).catch(
                function saveErrorACB(err) {
                    if (!cancelled) {
                        setError(err);
                    }
                }
            )
        }
        return searchChangedAgainACB;
    }

    React.useEffect(searchChangedACB, [promise]);

    function courseClickedACB(courseCode) {
        console.log(getCourseDetails(courseCode));
    }

    return (
        <div>
            <SearchFormView setSearchText={setSearchTextACB} />
            {
                data ? <SearchResultsView searchResults={data} courseClicked={courseClickedACB} /> : <p>no data</p>
            }
            
        </div>
    );

}