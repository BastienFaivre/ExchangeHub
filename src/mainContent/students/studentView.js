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

export default function StudentView(props) {
    function commentCB(comment) {
        return (
            <Card
                variant="outlined"
                key={comment.courseCode}
                sx={{ backgroundColor: "grey.100" }}
            >
                <CardContent>
                    <Grid container>
                        <Grid container item sx={{ paddingBottom: "10px" }}>
                            <Grid
                                item
                                xs={12}
                                sx={{ textAlign: "center", fontWeight: "bold" }}
                            >
                                Course: {comment.courseCode}
                            </Grid>
                        </Grid>
                        <Grid container item sx={{ paddingBottom: "10px" }}>
                            <Grid item xs={9} sx={{ fontWeight: "bold" }}>
                                {comment.title}
                            </Grid>
                            <Grid item xs={3} sx={{ textAlign: "end" }}>
                                <Rating
                                    value={comment.rating}
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
                    </Grid>
                </CardContent>
            </Card>
        )
    }

    function tipCB(tip) {
        return (
            <Grid item xs={12} key={tip.title}>
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
                            <Grid container item>
                                <Grid item xs={12}>
                                    {tip.description}
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        )
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
                                <Grid item xs={12} lg={4}>
                                    <span style={{ fontWeight: "bold" }}>
                                        {props.studentData.info.forname}{" "}
                                        {props.studentData.info.lastname}
                                    </span>{" "}
                                    ({props.studentData.info.nationality})
                                </Grid>
                                <Grid item xs={8} lg={4}>
                                    Field: {props.studentData.info.department}
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    lg={4}
                                    sx={{ textAlign: "end" }}
                                >
                                    Year: {props.studentData.info.year}
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container item xs={12} spacing={10}>
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
                                <Typography
                                    variant="h5"
                                    sx={{ padding: "10px" }}
                                >
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
                                <Typography
                                    variant="h5"
                                    sx={{ padding: "10px" }}
                                >
                                    The student hasn't added any tips yet.
                                </Typography>
                                <CommentsDisabledIcon fontSize="large" />
                            </Grid>
                        )}
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    )
}
