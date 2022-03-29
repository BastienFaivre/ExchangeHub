import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"

import { Link } from "react-router-dom"

export default function SidebarView({ currentTab }) {
	return (
		<Box
			sx={{
				maxWidth: 300,
				bgcolor: "primary.main",
				height: 1,
			}}>
			<Tabs
				value={currentTab}
				orientation="vertical"
				textColor="secondary"
				indicatorColor="secondary"
				aria-label="links to other pages">
				{/* <Tab
					label="Home"
					value="/"
					to="/"
					variant="sidebar"
					active
					component={Link}
				/> */}
				<Tab
					label="Courses"
					value="/courses"
					to="/courses"
					variant="sidebar"
					component={Link}
				/>
				<Tab
					label="Lifestyle"
					value="/lifestyle"
					to="/lifestyle"
					variant="sidebar"
					component={Link}
				/>
				<Tab
					label="Students"
					value="/students"
					to="/students"
					variant="sidebar"
					component={Link}
				/>
			</Tabs>
		</Box>
	)
}
