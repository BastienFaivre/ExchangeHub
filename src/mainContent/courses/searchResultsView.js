import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Container from '@mui/material/Container';
import React from "react"

export default function SearchResultsView({ searchResults, courseClicked }) {
	function resultCB(res) {
		function courseClickedACB() {
			courseClicked(res.course.courseCode)
		}

		return (
			<Grid item xs={12} md={12} lg={6} key={res.course.courseCode}>
				<Card variant="outlined" sx={{ backgroundColor: "grey.100" }}>
					<CardContent>
						<Grid container>
							<Grid item xs={8}>{res.course.courseCode} {res.course.title}</Grid>
							<Grid item xs={4} sx={{ textAlign: "end" }}>{res.course.credits} hp</Grid>
						</Grid>
					</CardContent>
					<CardActions>
						<Button onClick={courseClickedACB}>More Information</Button>
					</CardActions>
				</Card>
			</Grid>
		)
	}

	return (
		<Grid container spacing={2} padding="20px 0">
			{searchResults.map(resultCB)}
		</Grid>
	)
}
