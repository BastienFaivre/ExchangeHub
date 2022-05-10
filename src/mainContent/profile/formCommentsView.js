import {
    Button,
    CardHeader,
    Grid,
    TextField,
    MenuItem,
    Box,
} from "@mui/material"
import CardContent from "@mui/material/CardContent"
import Card from "@mui/material/Card"
import Rating from "@mui/material/Rating"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"

export default function FormCommentsView(props) {
    function cancelChangesACB(event) {
        event.preventDefault()
        props.cancelChanges()
    }

    function saveChangesACB(event) {
        event.preventDefault()
        props.saveChanges(props.formInputs.courseCode)
    }

    function handleFormInputChangeACB(event) {
        props.setFormInput(event.target.name, event.target.value)
    }

    return (
        <CardContent>
            <Card
                variant="outlined"
                style={{ padding: "30px" }}
                sx={{ widht: "100%" }}
            >
                <CardHeader
                    title={
                        props.formInputs.courseCode === ""
                            ? "Add comment"
                            : "Edit comment"
                    }
                />

                <Card variant="outlined" sx={{ backgroundColor: "grey.100" }}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Box m={2}>
                                <TextField
                                    value={props.formInputs.title}
                                    onChange={handleFormInputChangeACB}
                                    required
                                    name="title"
                                    label="Title"
                                    sx={{ width: 1 }}
                                    variant="filled"
                                />
                            </Box>
                            <Box m={2}>
                                <Rating
                                    value={Number(props.formInputs.rating)}
                                    onChange={handleFormInputChangeACB}
                                    precision={0.5}
                                    size="large"
                                    sx={{ mt: 2 }}
                                    name="rating"
                                />
                                <TextField
                                    value={props.formInputs.difficulty}
                                    onChange={handleFormInputChangeACB}
                                    name="difficulty"
                                    sx={{ width: "100%", fontSize: "1rem" }}
                                    variant="filled"
                                    label="Difficulty"
                                    select
                                    required
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
                                </TextField>
                            </Box>
                            <Box m={2}>
                                <TextField
                                    value={props.formInputs.description}
                                    onChange={handleFormInputChangeACB}
                                    required
                                    multiline
                                    name="description"
                                    label="Description"
                                    sx={{ width: 1 }}
                                    InputProps={{ rows: 5 }}
                                    variant="filled"
                                />
                            </Box>
                            <Box m={2}>
                                <Grid
                                    justify="flex-end"
                                    alignItems="center"
                                    container
                                >
                                    <Grid item>
                                        <Button
                                            style={{ marginRight: "5px" }}
                                            color="primary"
                                            variant="outlined"
                                            onClick={cancelChangesACB}
                                        >
                                            <CloseIcon />
                                            Cancel changes
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            style={{ marginRight: "5px" }}
                                            color="primary"
                                            variant="contained"
                                            onClick={saveChangesACB}
                                        >
                                            <CheckIcon />
                                            Save changes
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Card>
        </CardContent>
    )
}
