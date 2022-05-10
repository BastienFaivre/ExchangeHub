import {
    Grid,
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    CardHeader,
    MenuItem,
} from "@mui/material"
import { useState } from "react"
import { types as tipTypes } from "../../utils/tipTypes"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"

export default function FormTipsView(props) {

    function cancelTipFormChangesACB(event) {
        event.preventDefault()
        props.cancelTipChanges()
    }

    function saveTipFormChangedACB(event) {
        event.preventDefault()
        props.saveTipChanges(props.tipFormInputs.id)
    }

    function handleTipFormInputChangeACB(event) {
        props.setTipFormInput(event.target.name, event.target.value)
    }

    return (
        <CardContent>
            <Card
                variant="outlined"
                style={{ padding: "30px" }}
                sx={{ width: "100%" }}
            >
                <CardHeader
                    title={
                        props.tipFormInputs.description === ""
                            ? "Add Tip"
                            : " Edit Tip"
                    }
                />

                <Card variant="outlined" sx={{ backgroundColor: "grey.100" }}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Box m={2}>
                                <TextField
                                    value={props.tipFormInputs.title}
                                    onChange={handleTipFormInputChangeACB}
                                    required
                                    name="title"
                                    label="Title"
                                    sx={{ width: 1 }}
                                    variant="filled"
                                />
                            </Box>
                            <Box m={2}>
                                <TextField
                                    value={props.tipFormInputs.type}
                                    onChange={handleTipFormInputChangeACB}
                                    name="type"
                                    required
                                    select
                                    sx={{
                                        width: 1,
                                        fontSize: "1rem",
                                    }}
                                    variant="filled"
                                    label="Type"
                                >
                                    {tipTypes.map((type) => {
                                        return (
                                            <MenuItem key={type} value={type}>
                                                {type}
                                            </MenuItem>
                                        )
                                    })}
                                </TextField>
                            </Box>
                            <Box m={2}>
                                <TextField
                                    value={props.tipFormInputs.description}
                                    onChange={handleTipFormInputChangeACB}
                                    multiline
                                    required
                                    sx={{ width: 1 }}
                                    InputProps={{ rows: 5 }}
                                    variant="filled"
                                    name="description"
                                    label="Description"
                                ></TextField>
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
                                            onClick={cancelTipFormChangesACB}
                                        >
                                            <CloseIcon />
                                            Cancel changes
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            style={{ marginLeft: "5px" }}
                                            color="primary"
                                            variant="contained"
                                            onClick={saveTipFormChangedACB}
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
