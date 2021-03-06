import { Grid, Typography } from "@mui/material"
import CardContent from "@mui/material/CardContent"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import CardHeader from "@mui/material/CardHeader"
import ArticleIcon from "@mui/icons-material/Article"
import AccountCircle from "@mui/icons-material/AccountCircle"

export default function ProfileInfoView(props) {
    function logoutACB(event) {
        event.preventDefault()
        props.logout()
    }

    function setEditModeACB(event) {
        event.preventDefault()
        props.setEdit()
    }

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
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        {[props.profile.forname, props.profile.lastname].join(
                            " "
                        )}
                    </Typography>
                }
                subheader={
                    <Typography variant="h7">{props.profile.year}</Typography>
                }
                action={
                    <Grid sx={{ paddingTop: "35px" }}>
                        <Button
                            onClick={setEditModeACB}
                            sx={{ margin: 3 }}
                            variant="contained"
                            startIcon={<ArticleIcon />}
                        >
                            Edit Personal info
                        </Button>
                        <Button variant="contained" onClick={logoutACB}>
                            Logout
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
                                {props.profile.nationality}
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
                                {props.profile.university}
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
                                {props.profile.department}
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </>
    )
}
