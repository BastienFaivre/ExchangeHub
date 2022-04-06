import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
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
			<Card variant="outlined" key={res.courseCode}>
				<CardContent>
					<div>
						{res.courseCode} {res.title} {res.credits} credits
					</div>
				</CardContent>
				<CardActions>
					<Button
						onClick={courseClickedACB}
						to={`${res.courseCode}`}
						component={Link}>
						More Information
					</Button>
				</CardActions>
			</Card>
		)
	}

	return (
		<Stack direction="column" spacing={2} padding="20px 0">
			{searchResults.length > 0 && searchResults.map(resultCB)}
			{loading && (
				<Box sx={{ width: "fit-content", mx: "auto" }}>
					<CircularProgress color="primary" m="auto" />
				</Box>
			)}
			{error && <p>Error</p>}
		</Stack>
	)
}
