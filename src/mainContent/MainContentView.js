import Sidebar from "../sidebar/sidebarPresenter"

import Grid from "@mui/material/Grid"

export default function MainContent({ children }) {
	return (
		<Grid container direction="column">
			<Grid item xs={2}>
				<div>Navbar</div>
			</Grid>
			<Grid container xs={10}>
				<Grid item xs={2}>
					<Sidebar />
				</Grid>
				<Grid item xs={10}>
					{children}
				</Grid>
			</Grid>
		</Grid>
	)
}
