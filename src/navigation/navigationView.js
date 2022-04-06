import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import AccountCircle from "@mui/icons-material/AccountCircle"

import { Link, useLocation } from "react-router-dom"

export default function NavigationView() {
	const { pathname } = useLocation()
	return (
		<>
			<AppBar
				position="fixed"
				sx={{
					bgcolor: "primary.main",
					mb: 0,
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="home"
						value="/"
						to="/"
						component={Link}>
						<Typography variant="h6" component="div">
							ExchangeHub
						</Typography>
					</IconButton>
					<IconButton
						size="large"
						edge="start"
						color={pathname === "/profile" ? "secondary" : "inherit"}
						aria-label="profile"
						sx={{ mr: 2, ml: "auto" }}
						value="/profile"
						to="/profile"
						component={Link}>
						<AccountCircle />
					</IconButton>
				</Toolbar>
			</AppBar>
		</>
	)
}
