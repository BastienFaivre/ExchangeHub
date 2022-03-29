import Sidebar from "../sidebar/sidebarPresenter"
import Navigation from "../navigation/navigationPresenter"

import Grid from "@mui/material/Grid"

export default function MainContent({ children }) {
	return (
		<Grid container sx={{ height: 1 }} direction="column">
			<Grid item xs="auto">
				<Navigation />
			</Grid>
			<Grid item container xs={true}>
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
