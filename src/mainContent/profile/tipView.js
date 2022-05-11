import DeleteIcon from "@mui/icons-material/Delete"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import AddIcon from "@mui/icons-material/Add"
import {
    CardContent,
    Card,
    CardActions,
    CardHeader,
    Grid,
    Button,
    IconButton,
    Typography,
} from "@mui/material"
import CommentsDisabledIcon from "@mui/icons-material/CommentsDisabled"

export default function ProfileTipsView(props) {
    function tipCB(tip) {
        function editTipACB(event) {
            event.preventDefault()
            props.editTip(tip.id)
        }

        function deleteTipACB(event) {
            event.preventDefault()
            props.deleteTip(tip.id)
        }

        return (
            <Grid item xs={12} md={12} lg={6} key={tip.title}>
                <Card
                    variant="outlined"
                    sx={{
                        backgroundColor: "grey.100",
                        height: 1,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CardHeader
                        action={
                            <Button onClick={editTipACB}>
                                <MoreVertIcon />
                                Edit
                            </Button>
                        }
                        title={tip.title + " (" + tip.type + ")"}
                    />
                    <CardContent>{tip.description}</CardContent>
                    <CardActions sx={{ marginTop: "auto" }}>
                        <IconButton onClick={deleteTipACB}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        )
    }

    function addNewTipACB() {
        props.editTip()
    }

    return (
        <CardContent>
            <Card variant="outlined" sx={{ width: "100%", p: "30px" }}>
                <CardHeader
                    title="My tips"
                    action={
                        <Button
                            onClick={addNewTipACB}
                            variant="contained"
                            startIcon={<AddIcon />}
                        >
                            Add Tip
                        </Button>
                    }
                />
                <Grid container spacing={2}>
                    {props.tips.map(tipCB)}
                    {props.tips.length === 0 && (
                        <Grid item xs={12} sx={{ textAlign: "center" }}>
                            <Typography variant="h5" sx={{ padding: "10px" }}>
                                You haven't added any tips yet.
                            </Typography>
                            <CommentsDisabledIcon fontSize="large" />
                        </Grid>
                    )}
                </Grid>
            </Card>
        </CardContent>
    )
}
