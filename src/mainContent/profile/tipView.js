import DeleteIcon from "@mui/icons-material/Delete"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import {
    CardContent,
    Card,
    CardActions,
    CardHeader,
    Grid,
    Button,
    IconButton,
} from "@mui/material"

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
            <Grid item xs={12} md={12} lg={6} key={tip.id}>
                <Card
                    variant="outlined"
                    sx={{ backgroundColor: "grey.100", height: 1 }}
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
                    <CardActions>
                        <IconButton onClick={deleteTipACB}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
    return (
        <CardContent>
            <Card variant="outlined" sx={{ width: "100%", p: "30px" }}>
                <CardHeader title="My tips" />
                <Grid container spacing={2}>
                    {props.tips.map(tipCB)}
                </Grid>
            </Card>
        </CardContent>
    )
}
