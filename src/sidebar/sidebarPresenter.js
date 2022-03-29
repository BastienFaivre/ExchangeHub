import { useState } from "react"
import Tabs from "@mui/material/Tabs"
import SidebarView from "./sidebarView"

import { matchPath, useLocation } from "react-router-dom"

function useRouteMatch(patterns) {
	const { pathname } = useLocation()

	for (let i = 0; i < patterns.length; i += 1) {
		const pattern = patterns[i]
		const possibleMatch = matchPath(pattern, pathname)
		if (possibleMatch !== null) {
			return possibleMatch
		}
	}

	return null
}

export default function SidebarPresenter() {
	const routeMatch = useRouteMatch(["/courses", "/lifestyle", "/students"])
	// If current tab is undefined, return false so we do not select any tabs
	const currentTab = routeMatch?.pattern?.path ?? false

	return <SidebarView currentTab={currentTab} />
}
