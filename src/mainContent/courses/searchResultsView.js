import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import React from "react"
import { CircularProgress } from "@mui/material"
import { Link } from "react-router-dom"

export default function SearchResultsView({
	searchResults,
	error,
	loading,
	courseClicked,
}) {
	function resultCB(res) {
		function courseClickedACB() {
			courseClicked(res.courseCode)
		}

		return (
			<Grid item xs={12} md={12} lg={6} key={res.courseCode}>
				<Card variant="outlined" sx={{ backgroundColor: "grey.100" }}>
					<CardContent>
						<Grid container>
							<Grid item xs={8}>{res.courseCode} {res.title}</Grid>
							<Grid item xs={4} sx={{ textAlign: "end" }}>{res.credits} hp</Grid>
						</Grid>
					</CardContent>
					<CardActions>
						<Button onClick={courseClickedACB} to={`${res.courseCode}`} component={Link}>More Information</Button>
					</CardActions>
				</Card>
			</Grid>
		)
	}

	return (
		<Grid container spacing={2} padding="20px 0">
			{searchResults.length > 0 && searchResults.map(resultCB)}
			{loading && (
				<Box sx={{ width: "fit-content", mx: "auto" }}>
					<CircularProgress color="primary" m="auto" />
				</Box>
			)}
			{error && <p>Error</p>}
		</Grid>
	)
}
