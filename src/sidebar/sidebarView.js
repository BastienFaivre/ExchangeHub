import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { useState } from "react"

import { Link, useLocation } from "react-router-dom"

// TODO tab values are indices from 0... we need to map the index to the current link. Look on https://mui.com/guides/routing/

export default function SidebarView({ currentTab }) {
	return (
		<Box
			sx={{
				maxWidth: 300,
				bgcolor: "primary.main",
				height: "100%",
			}}>
			<Tabs
				value={currentTab}
				orientation="vertical"
				textColor="secondary"
				indicatorColor="secondary"
				aria-label="links to other pages">
				<Tab
					variant="sidebar"
					label="Home"
					value="/"
					to="/"
					component={Link}
				/>
				<Tab
					label="Courses"
					value="/courses"
					to="/courses"
					component={Link}
				/>
				<Tab
					label="Lifestyle"
					value="/lifestyle"
					to="/lifestyle"
					component={Link}
				/>
				<Tab
					label="Students"
					value="/students"
					to="/students"
					component={Link}
				/>
			</Tabs>
		</Box>
	)
}
