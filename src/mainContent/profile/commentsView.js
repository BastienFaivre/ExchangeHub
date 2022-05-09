import {
    Button,
    CardActions,
    CardHeader,
    Grid,
    IconButton,
    Typography,
} from "@mui/material"
import CardContent from "@mui/material/CardContent"
import Card from "@mui/material/Card"
import Rating from "@mui/material/Rating"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import DeleteIcon from "@mui/icons-material/Delete"
import { Link } from "react-router-dom"

export default function ProfileCommentsView(props) {
    function commentCB(comment) {
        function editCommentACB(event) {
            event.preventDefault()
            props.editComment(comment.courseCode)
        }

        function deleteCommentACB(event) {
            event.preventDefault()
            props.deleteComment(comment.id)
        }

        function commentClickedACB() {
            props.commentClicked(comment.courseCode)
        }

        return (
            <Grid item xs={12} md={12} lg={6} key={comment.id}>
                <Card
                    variant="outlined"
                    sx={{ backgroundColor: "grey.100", height: 1 }}
                >
                    <CardHeader
                        action={
                            <Button onClick={editCommentACB}>
                                <MoreVertIcon />
                                Edit
                            </Button>
                        }
                        title={"(" + comment.courseCode + ") " + comment.title}
                    />
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                Difficulty: {comment.difficulty}
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: "end" }}>
                                <Rating
                                    value={Number(comment.rating) ?? 0}
                                    readOnly
                                    precision={0.5}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {comment.description}
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <IconButton onClick={deleteCommentACB}>
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={10} sx={{ textAlign: "end" }}>
                                <Button
                                    onClick={commentClickedACB}
                                    to={`/courses/${comment.courseCode}`}
                                    component={Link}
                                >
                                    View all comments
                                </Button>
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
                variant="outlined"
                style={{ padding: "30px" }}
                sx={{ width: "100%", p: 2 }}
            >
                <CardHeader title="My comments" />
                <Grid container spacing={2}>
                    {props.comments.map(commentCB)}
                </Grid>
            </Card>
        </CardContent>
    )
}
