import { Box, Card, CardContent, Grid, Typography } from "@mui/material"

export default function TipsResultsView(props) {
    function containsSearchInputCB(tip) {
        return (
            props.searchInput === "" ||
            tip.title.toLowerCase().includes(props.searchInput.toLowerCase()) ||
            tip.description
                .toLowerCase()
                .includes(props.searchInput.toLowerCase())
        )
    }

    function tipCB(tip) {
        return (
            <Grid item xs={12} md={12} lg={6} key={tip.title}>
                <Card variant="outlined" sx={{ backgroundColor: "grey.100" }}>
                    <CardContent>
                        <Grid container>
                            <Grid container item sx={{ paddingBottom: "10px" }}>
                                <Grid item xs={10} sx={{ fontWeight: "bold" }}>
                                    {tip.title}
                                </Grid>
                                <Grid item xs={2} sx={{ textAlign: "end" }}>
                                    {tip.type}
                                </Grid>
                            </Grid>
                            <Grid container item sx={{ paddingBottom: "10px" }}>
                                <Grid item xs={12}>
                                    {tip.description}
                                </Grid>
                            </Grid>
                            <Grid container item sx={{ paddingBottom: "10px" }}>
                                <Grid item xs={12}>
                                    author ?
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        )
    }

    let tips = props.tips.filter(containsSearchInputCB)

    return (
        <Grid container spacing={2} padding="20px 0">
            {tips.map(tipCB)}
        </Grid>
    )
}
