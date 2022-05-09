import DeleteIcon from "@mui/icons-material/Delete"
import { PropaneSharp } from "@mui/icons-material"
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
import styles from "../../MUI/styles/styles"

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
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <IconButton onClick={deleteTipACB}>
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
    return (
        <CardContent>
            <Card
                variant="oulined"
                style={{ padding: "30px" }}
                sx={{ width: "100%", p: 2 }}
            >
                <CardHeader title="My tips" />
                <Grid container spacing={2}>
                    {props.tips.map(tipCB)}
                </Grid>
            </Card>
        </CardContent>
    )
}
