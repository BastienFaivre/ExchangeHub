import { Grid, Typography } from "@mui/material"
import CardContent from "@mui/material/CardContent"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import CardHeader from "@mui/material/CardHeader"
import CardActions from "@mui/material/CardActions"
import ArticleIcon from "@mui/icons-material/Article"
import AccountCircle from "@mui/icons-material/AccountCircle"
import Rating from "@mui/material/Rating"
import RateReviewIcon from "@mui/icons-material/RateReview"
import { useEffect } from "react"

export default function ProfileCommentsView({ comments, setEdit }) {
    function setEditMode(event) {
        event.preventDefault()
        setEdit()
    }

    useEffect(() => {
        console.log(comments)
    }, [])

    return (
        <CardContent>
            <Grid container spacing={2}>
                <Card
                    variant="outlined"
                    style={{ padding: "30px" }}
                    sx={{ width: "100%", m: 2 }}
                >
                    <Grid item xs={12}>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            My comments
                        </Typography>
                    </Grid>
                    {comments.map((comment) => (
                        <Grid
                            item
                            xs={12}
                            md={12}
                            lg={6}
                            key={comment.courseCode}
                        >
                            <Card
                                variant="outlined"
                                sx={{ backgroundColor: "grey.100" }}
                            >
                                <CardContent>
                                    <Grid container>
                                        <Grid
                                            container
                                            item
                                            sx={{ paddingBottom: "10px" }}
                                        >
                                            <Grid
                                                item
                                                xs={9}
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                {comment.title}
                                            </Grid>
                                            <Grid
                                                item
                                                xs={3}
                                                sx={{ textAlign: "end" }}
                                            >
                                                <Rating
                                                    value={comment.rating}
                                                    readOnly
                                                    precision={0.5}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            container
                                            item
                                            sx={{ paddingBottom: "10px" }}
                                        >
                                            <Grid item xs={12}>
                                                Difficulty: {comment.difficulty}
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            container
                                            item
                                            sx={{ paddingBottom: "10px" }}
                                        >
                                            <Grid
                                                item
                                                xs={12}
                                                sx={{ textAlign: "justify" }}
                                            >
                                                {comment.description}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Card>
            </Grid>
        </CardContent>
    )
}
