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
                        props.formInputs.courseCode === ""
                            ? "Add comment"
                            : "Edit comment"
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
                                {props.formInputs.courseCode}
                            </Typography>
                        }
                        subheader={
                            <TextField
                                value={props.formInputs.title}
                                onChange={handleFormInputChangeACB}
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
                                <Rating
                                    value={Number(props.formInputs.rating)}
                                    onChange={handleFormInputChangeACB}
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
                                    value={props.formInputs.difficulty}
                                    onChange={handleFormInputChangeACB}
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
                                    value={props.formInputs.description}
                                    onChange={handleFormInputChangeACB}
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
