import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import React from "react"

export default function SearchResultsView({ searchResults, courseClicked }) {
	function resultCB(res) {
		function courseClickedACB() {
			courseClicked(res.course.courseCode)
		}

		return (
			<Card variant="outlined" key={res.course.courseCode}>
				<CardContent>
					<div>
						{res.course.courseCode} {res.course.title}{" "}
						{res.course.credits} credits
					</div>
				</CardContent>
				<CardActions>
					<Button onClick={courseClickedACB}>More Information</Button>
				</CardActions>
			</Card>
		)
	}

	return (
		<Stack direction="column" spacing={2} padding="20px 0">
			{searchResults.map(resultCB)}
		</Stack>
	)
}
