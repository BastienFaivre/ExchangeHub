import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { useState } from "react"

import { Link, useLocation } from "react-router-dom"

// TODO tab values are indices from 0... we need to map the index to the current link. Look on https://mui.com/guides/routing/

export default function SidebarView({ currentTab, handleTabChange }) {
	const [value, setValue] = useState(0)

	const loc = useLocation()

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<Box
			sx={{
				maxWidth: { xs: 160, sm: 300 },
				bgcolor: "primary.main",
				height: "100%",
			}}>
			<Tabs
				value={value}
				onChange={handleChange}
				orientation="vertical"
				textColor="secondary"
				indicatorColor="secondary"
				aria-label="links to other pages">
				<Tab label="Home" to="/" component={Link} />
				<Tab label="Profile" to="/profile" component={Link} />
			</Tabs>
		</Box>
	)
}
