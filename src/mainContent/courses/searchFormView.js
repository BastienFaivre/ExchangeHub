import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"

export default function SearchFormView({ search, searchInput, setSearchInput }) {

	function handleInputChangeACB(event) {
		setSearchInput(event.target.value)
	}

	function doSearchACB(e) {
		e.preventDefault()
		search()
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
	)
}
