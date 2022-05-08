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
                        title={comment.courseCode}
                        subheader={comment.title}
                    />
                    <CardContent>
                        <Rating
                            value={Number(comment.rating) ?? 0}
                            readOnly
                            precision={0.5}
                            size="small"
                            sx={{ mt: 2 }}
                        />
                        <Typography gutterBottom variant="h5" component="div">
                            {comment.difficulty &&
                                `Difficulty: ${comment.difficulty}`}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {comment.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton onClick={deleteCommentACB}>
                            <DeleteIcon />
                        </IconButton>
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
