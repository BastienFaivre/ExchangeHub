import { useParams } from "react-router-dom"

export default function CoursePresenter() {
	const params = useParams()
	console.log(params)
	return <div>Courses {params.id}</div>
}
