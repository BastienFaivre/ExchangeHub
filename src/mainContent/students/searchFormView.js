import {
    Card,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material"

export default function StudentsSearchFormView(props) {
    function listNationalitiesCB(nationality) {
        return (
            <MenuItem key={nationality} value={nationality}>
                {nationality}
            </MenuItem>
        )
    }

    function listDepartmentsCB(department) {
        return (
            <MenuItem key={department} value={department}>
                {department}
            </MenuItem>
        )
    }

    function handleNationalityChangeACB(event) {
        props.setSearchNationality(event.target.value)
    }

    function handleDepartmentChangeACB(event) {
        props.setSearchDepartment(event.target.value)
    }

    return (
        <Card variant="outlined" sx={{ p: 2, bgcolor: "grey.50" }}>
            <Grid spacing={2} container alignItems="center">
                <Grid item xs={12} md={6}>
                    <FormControl sx={{ width: "100%", bgcolor: "white" }}>
                        <InputLabel>Nationality</InputLabel>
                        <Select
                            value={props.searchNationality}
                            label="Nationality"
                            onChange={handleNationalityChangeACB}
                        >
                            <MenuItem value="">All</MenuItem>
                            {props.nationalities.map(listNationalitiesCB)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl sx={{ width: "100%", bgcolor: "white" }}>
                        <InputLabel>Department</InputLabel>
                        <Select
                            value={props.searchDepartment}
                            label="Department"
                            onChange={handleDepartmentChangeACB}
                        >
                            <MenuItem value="">All</MenuItem>
                            {props.departments.map(listDepartmentsCB)}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Card>
    )
}
