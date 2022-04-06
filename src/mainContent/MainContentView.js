import Sidebar from "../sidebar/sidebarPresenter"
import Navigation from "../navigation/navigationPresenter"

import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Toolbar from "@mui/material/Toolbar"
import Drawer from "@mui/material/Drawer"

export default function MainContent({ children }) {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Navigation />
			<Drawer
				variant="permanent"
				sx={{
					width: 240,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: 240,
						boxSizing: "border-box",
					},
				}}>
				<Toolbar />
				<Box sx={{ overflow: "auto" }}>
					<Sidebar />
				</Box>
			</Drawer>

			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	)
}
