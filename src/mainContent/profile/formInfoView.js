import { Box, Grid, TextField, Typography } from "@mui/material"
import CardContent from "@mui/material/CardContent"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import CardHeader from "@mui/material/CardHeader"
import ArticleIcon from "@mui/icons-material/Article"
import AccountCircle from "@mui/icons-material/AccountCircle"
import Autocomplete from "@mui/material/Autocomplete"
import { nationalities } from "../../utils/nationalities"
import { universities } from "../../utils/universities"

export default function ProfileInfoFormView({
    form,
    autoSelectForm,
    handleInputChangeACB,
    handleAutoSelectACB,
    saveChangesCB,
    cancelChangesCB,
    departments,
}) {
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
                            value={form.forname}
                            onChange={handleInputChangeACB}
                            required
                            name="forname"
                            label="First name"
                            sx={{ marginRight: 2 }}
                            variant="filled"
                        />
                        <TextField
                            value={form.lastname}
                            onChange={handleInputChangeACB}
                            required
                            name="lastname"
                            label="Last name"
                            variant="filled"
                        />
                    </Box>
                }
                subheader={
                    <TextField
                        value={form.year}
                        onChange={handleInputChangeACB}
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
                            onClick={saveChangesCB}
                            startIcon={<ArticleIcon />}
                        >
                            Save changes
                        </Button>
                        <Button onClick={cancelChangesCB} variant="contained">
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
                                <Autocomplete
                                    disablePortal
                                    options={nationalities}
                                    getOptionLabel={(option) => option}
                                    value={form.nationality}
                                    onChange={handleAutoSelectACB}
                                    inputValue={autoSelectForm.nationality}
                                    onInputChange={handleAutoSelectACB}
                                    id="nationality"
                                    sx={{ width: 300 }}
                                    renderInput={(params) => {
                                        return (
                                            <TextField
                                                {...params}
                                                required
                                                name="nationality"
                                                label="Nationality"
                                                variant="filled"
                                                sx={{ marginY: 2 }}
                                            />
                                        )
                                    }}
                                />
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
                                <Autocomplete
                                    disablePortal
                                    options={universities.map((u) => u.title)}
                                    getOptionLabel={(option) => option}
                                    value={form.university}
                                    onChange={handleAutoSelectACB}
                                    inputValue={autoSelectForm.university}
                                    onInputChange={handleAutoSelectACB}
                                    id="university"
                                    sx={{ width: 300 }}
                                    renderInput={(params) => {
                                        return (
                                            <TextField
                                                {...params}
                                                required
                                                name="university"
                                                label="University"
                                                variant="filled"
                                                sx={{ marginY: 2 }}
                                            />
                                        )
                                    }}
                                />
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
                                <Autocomplete
                                    disablePortal
                                    options={departments}
                                    getOptionLabel={(option) => option}
                                    value={form.department}
                                    onChange={handleAutoSelectACB}
                                    inputValue={autoSelectForm.department}
                                    onInputChange={handleAutoSelectACB}
                                    id="department"
                                    sx={{ width: 300 }}
                                    renderInput={(params) => {
                                        return (
                                            <TextField
                                                {...params}
                                                required
                                                name="department"
                                                label="Department"
                                                variant="filled"
                                                sx={{ marginY: 2 }}
                                            />
                                        )
                                    }}
                                />
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </>
    )
}
