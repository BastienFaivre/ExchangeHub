// this proxy is used to solve the CORS problem
// see https://gits-15.sys.kth.se/iprog/issues/issues/369
const PROXY = "http://116.203.219.58:1234/"
const BASE_URL = "https://www.kth.se/api/kopps/v2/"
const ENGLISH = "&l=en"

function treatHTTPResponseACB(res) {
    if (!res.ok) throw new Error("API problem: " + Response.status + "\n")
    return res.json()
}

function transformResultACB(data) {
    return data.searchHits.map((d) => d.course)
}

export function searchCourses(apiParam) {
    return fetch(
        PROXY +
            BASE_URL +
            "courses/search?" +
            new URLSearchParams(apiParam) +
            ENGLISH
    )
        .then(treatHTTPResponseACB)
        .then(transformResultACB)
}

export function getCourseDetails(courseCode) {
    return fetch(BASE_URL + "course/" + courseCode).then(treatHTTPResponseACB)
}
