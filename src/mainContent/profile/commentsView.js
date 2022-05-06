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
import AddBoxIcon from "@mui/icons-material/AddBox"

export function ProfileCommentsView({
    comments,
    editComment,
    addComment,
    deleteComment,
}) {
    function commentCB(comment) {
        return (
            <CommentView
                {...comment}
                editComment={editComment}
                deleteComment={deleteComment}
                key={comment.id}
            />
        )
    }

    function addCommentACB(event) {
        event.preventDefault()
        addComment()
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
                    {comments.map(commentCB)}
                </Grid>
            </Card>
        </CardContent>
    )
}

export function CommentView({
    id,
    rating,
    courseCode,
    difficulty,
    description,
    title,
    editComment,
    deleteComment,
}) {
    function editCommentACB(event) {
        event.preventDefault()
        editComment(courseCode)
    }

    function deleteCommentACB(event) {
        event.preventDefault()
        deleteComment(id)
    }

    return (
        <Grid item xs={12} md={12} lg={6} key={id}>
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
                    title={courseCode}
                    subheader={title}
                />
                <CardContent>
                    <Rating
                        value={Number(rating) ?? 0}
                        readOnly
                        precision={0.5}
                        size="small"
                        sx={{ mt: 2 }}
                    />
                    <Typography gutterBottom variant="h5" component="div">
                        {difficulty && `Difficulty: ${difficulty}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
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
