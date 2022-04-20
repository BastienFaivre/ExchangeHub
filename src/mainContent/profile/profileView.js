import {Grid, Icon, Stack, Typography } from "@mui/material"
import CardContent from "@mui/material/CardContent"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import ArticleIcon from '@mui/icons-material/Article';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import AccountCircle from "@mui/icons-material/AccountCircle"

export default function ProfileView(props) {
    function logoutACB(event) {
        event.preventDefault()
        props.logout()
    }

    return (
        <Card>
            <CardHeader
                style={{ padding: "40px" }}
                avatar={
                    <AccountCircle sx={{ color: "#D5D3D2", width: 130, height: 130 }}/>
                }
                title={
                    <Typography 
                        variant="h5"
                        sx={{fontWeight: "bold"}}
                        > 
                        Student Name 
                    </Typography>
                }
                subheader={
                    <Typography
                        variant="h7"
                    >
                        Username
                    </Typography>
                }

                action={
                    <Grid sx={{ paddingTop: "35px"}}>
                        <Button
                            variant="contained"
                            startIcon={<ArticleIcon />}>
                            View Report
                        </Button>
                    </Grid>
                }
            />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid container item xs={12} lg={6}>
                        <Card variant="outlined" style={{ padding: "30px" }} sx={{ width: '100%' }}>
                            <Grid
                                item
                                xs={12}
                            >   
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Personal details
                                </Typography>
                            </Grid>
                            <Grid 
                                item
                                xs={12}
                                sx={{ paddingTop:"10px"}}
                            >
                                <Typography
                                    variant="h7"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Gender:
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>Penguin</Grid>
                            <Grid
                                item
                                xs={12}
                                sx={{ paddingTop: "10px" }}
                            >
                                <Typography
                                    variant="h7"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Birth Dath:
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>Pingu</Grid>
                            <Grid
                                item
                                xs={12}
                                sx={{ paddingTop: "10px" }}
                            >
                                <Typography
                                    variant="h7"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    IDK:
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>YDK?</Grid>
                        </Card>

                    </Grid>
                    <Grid container item xs={12} lg={6}>
                        <Card variant="outlined" style={{ padding: "30px" }} sx={{ width: '100%' }}>
                            <Grid
                                item
                                xs={12}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Study details
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sx={{ paddingTop: "10px" }}
                            >
                                <Typography
                                    variant="h7"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    IDK:
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>IDK</Grid>
                            <Grid
                                item
                                xs={12}
                                sx={{ paddingTop: "10px" }}
                            >
                                <Typography
                                    variant="h7"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Still dk:
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>?</Grid>
                        </Card>
                    </Grid>
                    <Grid container 
                        alignItems="center" 
                        justify="center"
                        sx={{paddingLeft:"15px", paddingTop:"20px"}} 
                        display="flex"
                        justifyContent="center"
                        >
                        <Button variant="contained">Update</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}