import CourseView from "./courseView";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box"
import { CircularProgress } from "@mui/material"

export default function CoursePresenter() {

	const {loading, error, courseCode, data} = useSelector((state) => state.courses.courseDetails);

	const comments = [{
		title: "Very good course!",
		rating: 4.5,
		difficulty: "Intermediate",
		equivalence: "Programmation web",
		description: "This course is awesome, I learnt so much! I really recommend it.",
		forname: "Bastien",
		lastname: "Faivre",
		contact: "bastien.faivre@epfl.ch",
		uuid: 1
	},{
	  title: "Horrible!",
	  rating: 1,
	  difficulty: "Advanced",
	  equivalence: "Programmation web",
	  description: "This was the most difficult I had during my exchange, I spent so much time on all the assignments. I really do not recommend this course.",
	  forname: "Philip",
	  lastname: "Hamelink",
	  contact: "philip.hamelink@epfl.ch",
	  uuid: 2
  }]

	return (
		<Box>
			{Object.keys(data).length > 0 && <CourseView courseData={data} comments={comments} />}
			{loading && (
				<Box sx={{ width: "fit-content", mx: "auto" }}>
					<CircularProgress color="primary" m="auto" />
				</Box>
			)}
			{error && <p>Error</p>}
		</Box>
		
	);

}