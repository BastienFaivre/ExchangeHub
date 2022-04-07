import CourseView from "./courseView"
import { useDispatch, useSelector } from "react-redux"
import Box from "@mui/material/Box"
import { CircularProgress } from "@mui/material"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCourseDetails } from "../../redux/reducers/coursesReducer"

export default function CoursePresenter() {
	const { loading, error, courseCode, data } = useSelector(
		(state) => state.courses.courseDetails
	)

	const params = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		if (!courseCode && params.id) {
			dispatch(getCourseDetails(params.id))
		}
	}, [])

	// This is hard coded comments for debug purpose !
	let comments = [
		{
			title: "Very good course!",
			rating: 4.5,
			difficulty: "Intermediate",
			equivalence: "Programmation web",
			description:
				"This course is awesome, I learnt so much! I really recommend it.",
			forname: "Bastien",
			lastname: "Faivre",
			contact: "bastien.faivre@epfl.ch",
			uuid: 1,
		},
		{
			title: "Interesting course!",
			rating: 4,
			difficulty: "Intermediate",
			equivalence: "Programmation web",
			description:
				"I coded with React for the first time, the lectures are really interesting. The labs help us to understand the content presented in the lecture. I recommend this course for people who want to learn more about interaction web programming.",
			forname: "Philip",
			lastname: "Hamelink",
			contact: "philip.hamelink@epfl.ch",
			uuid: 2,
		},
	]

	if (courseCode !== "DH2642") {
		comments = []
	}

	return (
		<Box>
			{Object.keys(data).length > 0 && (
				<CourseView courseData={data} comments={comments} />
			)}
			{loading && (
				<Box sx={{ width: "fit-content", mx: "auto" }}>
					<CircularProgress color="primary" m="auto" />
				</Box>
			)}
			{error && <p>Error</p>}
		</Box>
	)
}
