import { Grid, IconButton, Typography } from "@mui/material"
import CardContent from "@mui/material/CardContent"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import CardHeader from "@mui/material/CardHeader"
import CardActions from "@mui/material/CardActions"
import ArticleIcon from "@mui/icons-material/Article"
import AccountCircle from "@mui/icons-material/AccountCircle"
import Rating from "@mui/material/Rating"
import RateReviewIcon from "@mui/icons-material/RateReview"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import DeleteIcon from "@mui/icons-material/Delete"
import AddBoxIcon from "@mui/icons-material/AddBox"
import { useEffect } from "react"

export default function ProfileCommentsView({
    comments,
    setEdit,
    commentForm,
}) {
    function setEditMode(event) {
        event.preventDefault()
        setEdit()
    }

    useEffect(() => {
        console.log(comments)
    }, [])

    function commentCB({ rating, courseCode, difficulty, description, title }) {
        // if (commentForm.courseCode !== courseCode) {
        //     return (
        //         <Grid item xs={12} md={12} lg={6} key={courseCode}>
        //             <Card
        //                 variant="outlined"
        //                 sx={{ backgroundColor: "grey.100" }}
        //             >
        //                 <CardHeader
        //                     action={
        //                         <Button onClick={() => setEdit(courseCode)}>
        //                             <MoreVertIcon />
        //                             Edit
        //                         </Button>
        //                     }
        //                     title={title}
        //                     subheader={
        //                         <Rating
        //                             value={rating}
        //                             readOnly
        //                             precision={0.5}
        //                             size="small"
        //                             sx={{ mt: 2 }}
        //                         />
        //                     }
        //                 />
        //                 <CardContent>
        //                     <Typography
        //                         gutterBottom
        //                         variant="h5"
        //                         component="div"
        //                     >
        //                         Difficulty: {difficulty}
        //                     </Typography>
        //                     <Typography variant="body2" color="text.secondary">
        //                         {description}
        //                     </Typography>
        //                 </CardContent>
        //                 <CardActions>
        //                     <Button onClick={() => console.log("CANCEL")}>
        //                         Cancel changes
        //                     </Button>
        //                 </CardActions>
        //             </Card>
        //         </Grid>
        //     )
        // }

        return (
            <Grid item xs={12} md={12} lg={6} key={courseCode}>
                <Card variant="outlined" sx={{ backgroundColor: "grey.100" }}>
                    <CardHeader
                        action={
                            <Button onClick={() => setEdit(courseCode)}>
                                <MoreVertIcon />
                                Edit
                            </Button>
                        }
                        title={title}
                        subheader={
                            <Rating
                                value={rating}
                                readOnly
                                precision={0.5}
                                size="small"
                                sx={{ mt: 2 }}
                            />
                        }
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Difficulty: {difficulty}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton onClick={() => setEdit(courseCode)}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        )
    }

    return (
        <CardContent>
            <Grid container spacing={2}>
                <Card
                    variant="outlined"
                    style={{ padding: "30px" }}
                    sx={{ width: "100%", m: 2 }}
                >
                    <CardHeader
                        action={
                            <Button>
                                <AddBoxIcon />
                                Add a comment
                            </Button>
                        }
                        title="My comments"
                    />
                    {comments.map(commentCB)}
                </Card>
            </Grid>
        </CardContent>
    )
}
