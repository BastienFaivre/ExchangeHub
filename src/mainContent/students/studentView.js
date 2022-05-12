import {
    Button,
    Card,
    CardContent,
    Grid,
    Rating,
    Stack,
    Typography,
} from "@mui/material"
import CommentsDisabledIcon from "@mui/icons-material/CommentsDisabled"
import { Link } from "react-router-dom"

export default function StudentView(props) {
    function commentCB(comment) {
        function commentClickedACB() {
            props.commentClicked(comment.courseCode)
        }

        return (
            <Card
                variant="outlined"
                key={comment.courseCode}
                sx={{ backgroundColor: "grey.100" }}
            >
                <CardContent>
                    <Grid container>
                        <Grid container item sx={{ paddingBottom: "10px" }}>
                            <Grid item xs={6} sx={{ fontWeight: "bold" }}>
                                Course: {comment.courseCode}
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: "end" }}>
                                <Button
                                    onClick={commentClickedACB}
                                    to={`/courses/${comment.courseCode}`}
                                    component={Link}
                                >
                                    View this course
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container item sx={{ paddingBottom: "10px" }}>
                            <Grid item xs={8} sx={{ fontWeight: "bold" }}>
                                {comment.title}
                            </Grid>
                            <Grid item xs={4} sx={{ textAlign: "end" }}>
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
                        <Grid container item>
                            <Grid item xs={12} sx={{ textAlign: "justify" }}>
                                {comment.description}
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }

    function tipCB(tip) {
        return (
            <Card
                variant="outlined"
                key={tip.title}
                sx={{ backgroundColor: "grey.100" }}
            >
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
                        <Grid container item>
                            <Grid item xs={12}>
                                {tip.description}
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }

    function showNameOrAnonymousCB() {
        if (props.studentData.forname && props.studentData.lastname) {
            return (
                <Grid item xs={12}>
                    <span style={{ fontWeight: "bold" }}>
                        {props.studentData.forname} {props.studentData.lastname}
                    </span>{" "}
                    ({props.studentData.nationality})
                </Grid>
            )
        } else {
            return (
                <Grid item xs={12}>
                    Anonymous user
                </Grid>
            )
        }
    }

    return (
        <Grid container spacing={2}>
            <Grid container item sx={{ textAlign: "center" }}>
                <Grid item xs={12}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        About the student
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={12}>
                    <Card
                        variant="outlined"
                        sx={{ backgroundColor: "grey.100" }}
                    >
                        <CardContent>
                            <Grid container>
                                {showNameOrAnonymousCB()}
                                <Grid item xs={12} lg={6}>
                                    University:{" "}
                                    {props.studentData.university
                                        ? props.studentData.university
                                        : "not specified"}
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    Field:{" "}
                                    {props.studentData.department
                                        ? props.studentData.department
                                        : "not specified"}
                                </Grid>
                                <Grid item xs={12}>
                                    Year: {props.studentData.year}
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container item xs={12} md={12} lg={6}>
                <Grid item xs={12}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "bold",
                            paddingBottom: "10px",
                            textAlign: "center",
                        }}
                    >
                        Comments ({props.comments.length})
                    </Typography>
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
                                The student hasn't reviewed any courses yet.
                            </Typography>
                            <CommentsDisabledIcon fontSize="large" />
                        </Grid>
                    )}
                </Stack>
            </Grid>
            <Grid container item xs={12} md={12} lg={6}>
                <Grid item xs={12}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "bold",
                            paddingBottom: "10px",
                            textAlign: "center",
                        }}
                    >
                        Tips ({props.tips.length})
                    </Typography>
                </Grid>
                <Stack
                    direction="column"
                    spacing={2}
                    width={"100%"}
                    height={"100%"}
                >
                    {props.tips.map(tipCB)}
                    {props.tips.length === 0 && (
                        <Grid item xs={12} sx={{ textAlign: "center" }}>
                            <Typography variant="h5" sx={{ padding: "10px" }}>
                                The student hasn't added any tips yet.
                            </Typography>
                            <CommentsDisabledIcon fontSize="large" />
                        </Grid>
                    )}
                </Stack>
            </Grid>
        </Grid>
    )
}
