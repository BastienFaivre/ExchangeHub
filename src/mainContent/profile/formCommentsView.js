import {
    Button,
    CardHeader,
    Grid,
    Typography,
    TextField,
    Select,
    MenuItem,
} from "@mui/material"
import CardContent from "@mui/material/CardContent"
import Card from "@mui/material/Card"
import Rating from "@mui/material/Rating"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"

export default function FormCommentsView({
    form,
    cancelChanges,
    saveChanges,
    handleInputChange,
}) {
    function cancelChangesACB(event) {
        event.preventDefault()
        cancelChanges()
    }

    function saveChangesACB(event) {
        event.preventDefault()
        saveChanges()
    }

    function onInputChangeACB(event) {
        const { name, value } = event.target
        handleInputChange(name, value)
    }

    return (
        <CardContent>
            <Card
                variant="outlined"
                style={{ padding: "30px" }}
                sx={{ width: "100%", m: 2 }}
            >
                <CardHeader
                    action={
                        <Button onClick={cancelChangesACB}>
                            <CloseIcon />
                            Cancel changes
                        </Button>
                    }
                    title={
                        form.courseCode === "" ? "Add comment" : "Edit comment"
                    }
                />
                <Card variant="outlined" sx={{ backgroundColor: "grey.100" }}>
                    <CardHeader
                        action={
                            <Button onClick={saveChangesACB}>
                                <CheckIcon />
                                Save changes
                            </Button>
                        }
                        title={
                            <Typography
                                gutterBottom
                                variant="h5"
                                color="text.secondary"
                            >
                                {form.courseCode}
                            </Typography>
                        }
                        subheader={
                            <TextField
                                value={form.title}
                                onChange={onInputChangeACB}
                                required
                                name="title"
                                label="Title"
                                sx={{ width: 0.6 }}
                                variant="filled"
                            />
                        }
                    />
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} lg={6}>
                                {/* <Typography
                                    gutterBottom
                                    variant="h5"
                                    color="text.secondary"
                                >
                                    Course code:
                                </Typography>
                                <Autocomplete
                                    isOptionEqualToValue={(option, value) =>
                                        option.courseCode === value.courseCode
                                    }
                                    getOptionLabel={(option) => `${option.courseCode} ${option.title}`}
                                    options={options}
                                    loading={loading}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Asynchronous"
                                            InputProps={{
                                                ...params.InputProps,
                                                endAdornment: (
                                                    <React.Fragment>
                                                        {loading ? (
                                                            <CircularProgress
                                                                color="inherit"
                                                                size={20}
                                                            />
                                                        ) : null}
                                                        {
                                                            params.InputProps
                                                                .endAdornment
                                                        }
                                                    </React.Fragment>
                                                ),
                                            }}
                                        />
                                    )}
                                /> */}
                                <Rating
                                    value={Number(form.rating)}
                                    onChange={onInputChangeACB}
                                    precision={0.5}
                                    size="large"
                                    sx={{ mt: 2 }}
                                    name="rating"
                                />
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    color="text.secondary"
                                >
                                    Difficulty:
                                </Typography>
                                <Select
                                    value={form.difficulty}
                                    onChange={onInputChangeACB}
                                    name="difficulty"
                                    sx={{ width: "100%", fontSize: "1rem" }}
                                    variant="filled"
                                >
                                    <MenuItem value={""}></MenuItem>
                                    <MenuItem value={"Easy"}>Easy</MenuItem>
                                    <MenuItem value={"Intermediate"}>
                                        Intermediate
                                    </MenuItem>
                                    <MenuItem value={"Difficult"}>
                                        Difficult
                                    </MenuItem>
                                    <MenuItem value={"Very difficult"}>
                                        Very difficult
                                    </MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12} md={12} lg={6}>
                                <Typography variant="h5" color="text.secondary">
                                    Description
                                </Typography>
                                <TextField
                                    value={form.description}
                                    onChange={onInputChangeACB}
                                    required
                                    multiline
                                    name="description"
                                    label="Description"
                                    sx={{ width: 1 }}
                                    variant="filled"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Card>
        </CardContent>
    )
}
