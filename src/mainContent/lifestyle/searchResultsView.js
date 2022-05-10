import { Button, Card, CardActions, CardContent, Grid } from "@mui/material"
import { Link } from "react-router-dom"

export default function TipsResultsView(props) {
    function tipCB(tip) {
        function tipClickedACB() {
            props.tipClicked(tip.userId)
        }

        return (
            <Grid item xs={12} md={12} lg={6} key={tip.id}>
                <Card
                    variant="outlined"
                    sx={{
                        backgroundColor: "grey.100",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CardContent>
                        <Grid container>
                            <Grid container item sx={{ paddingBottom: "10px" }}>
                                <Grid item xs={9} sx={{ fontWeight: "bold" }}>
                                    {tip.title}
                                </Grid>
                                <Grid item xs={3} sx={{ textAlign: "end" }}>
                                    {tip.type}
                                </Grid>
                            </Grid>
                            <Grid container item sx={{ paddingBottom: "10px" }}>
                                <Grid item xs={12}>
                                    {tip.description}
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ marginTop: "auto" }}>
                        <Grid container>
                            <Grid item xs={12} sx={{ textAlign: "end" }}>
                                <Button
                                    onClick={tipClickedACB}
                                    to={`/students/${tip.userId}`}
                                    component={Link}
                                >
                                    View author profile
                                </Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
        )
    }

    return (
        <Grid container spacing={2} padding="20px 0">
            {props.tips.map(tipCB)}
        </Grid>
    )
}
