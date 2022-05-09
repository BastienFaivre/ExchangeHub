import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Card from "@mui/material/Card"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import { schools, departments } from "../../utils/departments"

export default function SearchFormView(props) {
    function handleInputChangeACB(event) {
        props.setSearchInput(event.target.value)
    }

    function handleSchoolChangeACB(event) {
        props.setSearchSchool(event.target.value)
    }

    function handleDepartmentChangeACB(event) {
        props.setSearchDepartment(event.target.value)
    }

    function doSearchACB(e) {
        e.preventDefault()
        props.search()
    }

    function listSchoolsCB(school) {
        return (
            <MenuItem key={school.code} value={school.code}>
                {school.name}
            </MenuItem>
        )
    }

    function filterIfSchoolCB(department) {
        return (
            props.searchSchool === "" ||
            department.name.startsWith(props.searchSchool)
        )
    }

    function listDepartmentsCB(department) {
        return (
            <MenuItem key={department.code} value={department.code}>
                {department.name}
            </MenuItem>
        )
    }

    return (
        <Card variant="outlined" sx={{ p: 2, bgcolor: "grey.50" }}>
            <Grid spacing={2} container alignItems="center">
                <Grid item xs={12} md={6} lg={4}>
                    <FormControl sx={{ width: "100%", bgcolor: "white" }}>
                        <InputLabel>School</InputLabel>
                        <Select
                            value={props.searchSchool}
                            label="School"
                            onChange={handleSchoolChangeACB}
                        >
                            <MenuItem value="">All</MenuItem>
                            {schools.map(listSchoolsCB)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <FormControl sx={{ width: "100%", bgcolor: "white" }}>
                        <InputLabel>Department</InputLabel>
                        <Select
                            value={props.searchDepartment}
                            label="Department"
                            onChange={handleDepartmentChangeACB}
                        >
                            <MenuItem value="">All</MenuItem>
                            {departments
                                .filter(filterIfSchoolCB)
                                .map(listDepartmentsCB)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Paper
                        component="form"
                        sx={{
                            p: "2px 4px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search For Course"
                            inputProps={{ "aria-label": "search course" }}
                            value={props.searchInput}
                            onChange={handleInputChangeACB}
                        />

                        <IconButton
                            type="submit"
                            sx={{ p: "10px" }}
                            aria-label="search"
                            onClick={doSearchACB}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
        </Card>
    )
}
