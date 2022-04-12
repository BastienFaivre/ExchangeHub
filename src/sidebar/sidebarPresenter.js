import SidebarView from "./sidebarView"

import { matchPath, useLocation } from "react-router-dom"

function useRouteMatch(patterns) {
    const location = useLocation()
    for (let i = 0; i < patterns.length; i += 1) {
        const pattern = patterns[i]
        const possibleMatch = matchPath(pattern, location.pathname)
        if (possibleMatch !== null) {
            const resPath = possibleMatch.pattern.path.replace("/:id", "")
            return resPath
        }
    }
    return null
}

export default function SidebarPresenter() {
    const routeMatch = useRouteMatch([
        "/courses",
        "/courses/:id",
        "/lifestyle",
        "/students",
    ])
    // If current tab is undefined, return false so we do not select any tabs
    const currentTab = routeMatch ?? false

    return <SidebarView currentTab={currentTab} />
}
