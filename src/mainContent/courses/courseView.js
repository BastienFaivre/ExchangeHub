import { Grid, Stack, Typography } from "@mui/material"
import CardContent from "@mui/material/CardContent"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import Rating from "@mui/material/Rating"
import RateReviewIcon from "@mui/icons-material/RateReview"
import CommentsDisabledIcon from "@mui/icons-material/CommentsDisabled"
import { Link } from "react-router-dom"

export default function CourseView(props) {
    function commentCB(comment) {
        function commentClickedACB() {
            props.commentClicked(comment.userId)
        }

        return (
            <Card
                variant="outlined"
                key={comment.userId}
                sx={{ backgroundColor: "grey.100" }}
            >
                <CardContent>
                    <Grid container>
                        <Grid container item sx={{ paddingBottom: "10px" }}>
                            <Grid item xs={9} sx={{ fontWeight: "bold" }}>
                                {comment.title}
                            </Grid>
                            <Grid item xs={3} sx={{ textAlign: "end" }}>
                                <Rating
                                    value={Number(comment.rating) ?? 0}
                                    readOnly
                                    precision={0.5}
                                />
                            </Grid>
                        </Grid>
                        <Grid container item sx={{ paddingBottom: "10px" }}>
                            <Grid item xs={12}>
                                Difficulty: {comment.difficulty}
                            </Grid>
                        </Grid>
                        <Grid container item sx={{ paddingBottom: "10px" }}>
                            <Grid item xs={12} sx={{ textAlign: "justify" }}>
                                {comment.description}
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={12} sx={{ textAlign: "end" }}>
                                <Button
                                    onClick={commentClickedACB}
                                    to={`/students/${comment.userId}`}
                                    component={Link}
                                >
                                    View author profile
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }

    return (
        <Grid container spacing={2}>
            <Grid container item xs={12} md={12} lg={6} sx={{ height: 1 }}>
                <Grid
                    container
                    item
                    sx={{ paddingBottom: "10px", textAlign: "center" }}
                >
                    <Grid item xs={12}>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", paddingBottom: "10px" }}
                        >
                            About the Course
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={12}>
                        <Card
                            variant="outlined"
                            sx={{ backgroundColor: "grey.300" }}
                        >
                            <CardContent>
                                <Grid
                                    container
                                    item
                                    sx={{ paddingBottom: "10px" }}
                                >
                                    <Grid
                                        item
                                        xs={2}
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        {props.courseData.code}
                                    </Grid>
                                    <Grid
                                        item
                                        xs={8}
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        {props.courseData.title.en}
                                    </Grid>
                                    <Grid item xs={2} sx={{ textAlign: "end" }}>
                                        {props.courseData.credits} Credits
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    sx={{ paddingBottom: "10px" }}
                                >
                                    <Grid item xs={4}>
                                        Level: {props.courseData.level.en}
                                    </Grid>
                                    <Grid item xs={8} sx={{ textAlign: "end" }}>
                                        Department:{" "}
                                        {props.courseData.department.name.en}
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
                                        {
                                            new DOMParser().parseFromString(
                                                props.courseData.info.en,
                                                "text/html"
                                            ).documentElement.textContent
                                        }
                                    </Grid>
                                </Grid>
                                <Grid container item>
                                    <Grid
                                        item
                                        xs={12}
                                        sx={{ textAlign: "end" }}
                                    >
                                        <Button
                                            target="_blank"
                                            href={props.courseData.href.en}
                                        >
                                            More On KTH Website
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12} md={12} lg={6}>
                <Grid
                    item
                    xs={6}
                    sx={{ paddingBottom: "10px", textAlign: "center" }}
                >
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", paddingBottom: "10px" }}
                    >
                        Students Comments ({props.comments.length})
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "center" }}>
                    <Button
                        to={`/profile?courseCode=${props.courseData.code}`}
                        component={Link}
                    >
                        <RateReviewIcon />
                        &nbsp;&nbsp;Write a Comment
                    </Button>
                </Grid>
                <Stack
                    direction="column"
                    spacing={2}
                    width={"100%"}
                    height={"100%"}
                >
                    {props.comments.map(commentCB)}
                    {props.comments.length === 0 && (
                        <Grid item xs={12} sx={{ textAlign: "center" }}>
                            <Typography variant="h5" sx={{ padding: "10px" }}>
                                This course has not been reviewed yet.
                            </Typography>
                            <CommentsDisabledIcon fontSize="large" />
                        </Grid>
                    )}
                </Stack>
            </Grid>
        </Grid>
    )
}
