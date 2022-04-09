import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import { useState } from "react"
import { schools, departments } from "../../utils/departments"

export default function SearchFormView({ search }) {
	const [searchInput, setSearchInput] = useState("")
	const [searchSchool, setSearchSchool] = useState("")
	const [searchDepartment, setSearchDepartment] = useState("")

	function handleInputChangeACB(event) {
		setSearchInput(event.target.value)
	}

	function doSearchACB(e) {
		e.preventDefault()
		search(searchInput)
	}

	function listSchoolsCB(school) {

		return (
			<MenuItem key={school.departmentPrefix} value={school.departmentPrefix}>{school.name}</MenuItem>
		);

	}

	function listDepartmentsCB(department) {

		return (
			<MenuItem key={department.code} value={department.code}>{department.name}</MenuItem>
		);

	}

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} lg={4}>
				<Paper
					component="form"
					sx={{
						p: "2px 4px",
						display: "flex",
						alignItems: "center",
					}}>
					<InputBase
						sx={{ ml: 1, flex: 1 }}
						placeholder="Search For Course"
						inputProps={{ "aria-label": "search course" }}
						value={searchInput}
						onChange={handleInputChangeACB}
					/>
					<IconButton
						type="submit"
						sx={{ p: "10px" }}
						aria-label="search"
						onClick={doSearchACB}>
						<SearchIcon />
					</IconButton>
				</Paper>
			</Grid>
			<Grid item xs={6} lg={4}>
				<FormControl sx={{ width: "100%" }}>
					<InputLabel>School</InputLabel>
					<Select
						value={searchSchool}
						label="School"
					>
						<MenuItem value="">All</MenuItem>
						{schools.map(listSchoolsCB)}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6} lg={4}>
				<FormControl sx={{ width: "100%" }}>
					<InputLabel>Department</InputLabel>
					<Select
						value={searchDepartment}
						label="Department"
					>
						<MenuItem value="">All</MenuItem>
						{departments.map(listDepartmentsCB)}
					</Select>
				</FormControl>
			</Grid>
		</Grid>
	)
}
