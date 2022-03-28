import { useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

import SidebarView from "./sidebarView"

import {
	MemoryRouter,
	Route,
	Routes,
	Link,
	matchPath,
	useLocation,
} from "react-router-dom"

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
	const routeMatch = useRouteMatch([
		"/",
		"/courses",
		"/lifestyle",
		"/students",
	])
	const currentTab = routeMatch?.pattern?.path

	return <SidebarView currentTab={currentTab} />
}
