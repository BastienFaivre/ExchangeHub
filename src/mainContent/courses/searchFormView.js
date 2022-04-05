import TextField from "@mui/material/TextField"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import { useState } from "react"

export default function SearchFormView({ search }) {
	const [searchInput, setSearchInput] = useState("")

	function handleInputChangeACB(event) {
		setSearchInput(event.target.value)
	}

	function doSearchACB(e) {
		e.preventDefault()
		search(searchInput)
	}

	return (
		<Paper
			component="form"
			sx={{
				p: "2px 4px",
				display: "flex",
				alignItems: "center",
				width: 400,
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
		// <Stack direction="row" spacing={2} padding="20px">
		//     <TextField id="outlined-basic" label="Course" variant="outlined" onChange={inputChangedACB} />
		//     <Button
		//     {/* <FormControl sx={{ m: 1, minWidth: 200 }}>
		//         <InputLabel id="demo-simple-select-helper-label">Department</InputLabel>
		//         <Select
		//         value={""}
		//         label="Department"
		//         >
		//         <MenuItem value="">
		//             <em>None</em>
		//         </MenuItem>
		//         <MenuItem value={"EECS"}>EECS</MenuItem>
		//         </Select>
		//     </FormControl> */}
		// </Stack>
	)
}
