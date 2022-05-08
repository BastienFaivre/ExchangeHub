import {
    Box,
    FormControl,
    Grid,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material"
import CardContent from "@mui/material/CardContent"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import CardHeader from "@mui/material/CardHeader"
import ArticleIcon from "@mui/icons-material/Article"
import AccountCircle from "@mui/icons-material/AccountCircle"

export default function ProfileInfoFormView(props) {
    function listNationalitiesCB(nationality) {
        return (
            <MenuItem key={nationality} value={nationality}>
                {nationality}
            </MenuItem>
        )
    }

    function listUniversitiesCB(university) {
        return (
            <MenuItem key={university.title} value={university.title}>
                {university.title}
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

    function handleFormInputChangeACB(event) {
        props.setFormInput(event.target.name, event.target.value)
    }

    function saveInfoChangesACB(event) {
        event.preventDefault()
        props.saveInfoChanges()
    }

    function cancelInfoChangesACB(event) {
        event.preventDefault()
        props.cancelInfoChanges()
    }

    return (
        <>
            <CardHeader
                style={{ padding: "40px" }}
                avatar={
                    <AccountCircle
                        sx={{ color: "lightgrey", width: 130, height: 130 }}
                    />
                }
                title={
                    <Box>
                        <TextField
                            value={props.formInputs.forname}
                            onChange={handleFormInputChangeACB}
                            required
                            label="First name"
                            name="forname"
                            sx={{ marginRight: 2 }}
                            variant="filled"
                        />
                        <TextField
                            value={props.formInputs.lastname}
                            onChange={handleFormInputChangeACB}
                            required
                            label="Last name"
                            name="lastname"
                            variant="filled"
                        />
                    </Box>
                }
                subheader={
                    <TextField
                        value={props.formInputs.year}
                        onChange={handleFormInputChangeACB}
                        required
                        type="number"
                        label="Year"
                        name="year"
                        variant="filled"
                        sx={{ marginY: 2 }}
                    />
                }
                action={
                    <Grid sx={{ paddingTop: "35px" }}>
                        <Button
                            sx={{ margin: 3 }}
                            variant="contained"
                            onClick={saveInfoChangesACB}
                            startIcon={<ArticleIcon />}
                        >
                            Save changes
                        </Button>
                        <Button
                            onClick={cancelInfoChangesACB}
                            variant="contained"
                        >
                            Cancel
                        </Button>
                    </Grid>
                }
            />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid container item xs={12} lg={6}>
                        <Card
                            variant="outlined"
                            style={{ padding: "30px" }}
                            sx={{ width: "100%" }}
                        >
                            <Grid item xs={12}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Personal details
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ paddingTop: "10px" }}>
                                <Typography
                                    variant="h7"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Nationality
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl
                                    sx={{
                                        width: "100%",
                                        backgroundColor: "grey.100",
                                        marginTop: "10px",
                                    }}
                                >
                                    <Select
                                        name="nationality"
                                        value={props.formInputs.nationality}
                                        onChange={handleFormInputChangeACB}
                                    >
                                        {props.nationalities.map(
                                            listNationalitiesCB
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sx={{ paddingTop: "10px" }}>
                                <Typography
                                    variant="h7"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    University
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl
                                    sx={{
                                        width: "100%",
                                        backgroundColor: "grey.100",
                                        marginTop: "10px",
                                    }}
                                >
                                    <Select
                                        name="university"
                                        value={props.formInputs.university}
                                        onChange={handleFormInputChangeACB}
                                    >
                                        {props.universities.map(
                                            listUniversitiesCB
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid container item xs={12} lg={6}>
                        <Card
                            variant="outlined"
                            style={{ padding: "30px" }}
                            sx={{ width: "100%" }}
                        >
                            <Grid item xs={12}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Study details
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ paddingTop: "10px" }}>
                                <Typography
                                    variant="h7"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Department
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl
                                    sx={{
                                        width: "100%",
                                        backgroundColor: "grey.100",
                                        marginTop: "10px",
                                    }}
                                >
                                    <Select
                                        name="department"
                                        value={props.formInputs.department}
                                        onChange={handleFormInputChangeACB}
                                    >
                                        {props.departments.map(
                                            listDepartmentsCB
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </>
    )
}
