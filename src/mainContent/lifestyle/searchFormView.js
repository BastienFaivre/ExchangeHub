import {
    Card,
    FormControl,
    Grid,
    InputBase,
    InputLabel,
    MenuItem,
    Paper,
    Select,
} from "@mui/material"

export default function TipsSearchFormView(props) {
    function listTypesCB(type) {
        return (
            <MenuItem key={type} value={type}>
                {type}
            </MenuItem>
        )
    }
    function handleInputChangeACB(event) {
        props.setSearchInput(event.target.value)
    }

    function handleTypeChangeACB(event) {
        props.setSearchType(event.target.value)
    }

    return (
        <Card variant="outlined" sx={{ p: 2, bgcolor: "grey.50" }}>
            <Grid spacing={2} container alignItems="center">
                <Grid item xs={12} lg={6}>
                    <Paper
                        component="form"
                        sx={{
                            p: "2px 4px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1, p: "6px 0" }}
                            placeholder="Search For Tips"
                            inputProps={{ "aria-label": "search tips" }}
                            value={props.searchInput}
                            onChange={handleInputChangeACB}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <FormControl sx={{ width: "100%", bgcolor: "white" }}>
                        <InputLabel>Type</InputLabel>
                        <Select
                            value={props.searchType}
                            label="Type"
                            onChange={handleTypeChangeACB}
                        >
                            <MenuItem value="">All</MenuItem>
                            {["Food", "Sport", "Nightlife"].map(listTypesCB)}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Card>
    )
}
