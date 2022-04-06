import { Grid, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import Rating from '@mui/material/Rating';

export default function CourseView({ courseData, comments }) {

    function commentCB(comment) {

        return (
            <Card variant="outlined" key={comment.uuid} sx={{ backgroundColor: "grey.100" }}>
                <CardContent>
                    <Grid container>
                        <Grid container item sx={{ paddingBottom: "10px" }}>
                            <Grid item xs={9} sx={{ fontWeight: "bold" }}>
                                {comment.title}
                            </Grid>
                            <Grid item xs={3} sx={{ textAlign: "end" }}>
                                <Rating value={comment.rating} readOnly precision={0.5} />
                            </Grid>
                        </Grid>
                        <Grid container item sx={{ paddingBottom: "10px" }}>
                            <Grid item xs={8}>
                                Equivalence: {comment.equivalence}
                            </Grid>
                            <Grid item xs={4} sx={{ textAlign: "end" }}>
                                Difficulty: {comment.difficulty}
                            </Grid>
                        </Grid>
                        <Grid container item sx={{ paddingBottom: "10px" }}>
                            <Grid item xs={12} sx={{ textAlign: "justify" }}>
                                {comment.description}
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={6}>
                                Author: {comment.forname} {comment.lastname}
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: "end" }}>
                                <Button href={"mailto:" + comment.contact}>Contact</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );

    }

    return (
        <Grid container spacing={2}>
            <Grid container item xs={12} md={12} lg={6} sx={{ height: 1 }}>
                <Grid container item sx={{ paddingBottom: "10px", textAlign: "center" }}>
                    <Grid item xs={12}>
                        <h2>About the Course</h2>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={12}>
                        <Card variant="outlined" sx={{ backgroundColor: "grey.300" }}>
                            <CardContent>
                                <Grid container item sx={{ paddingBottom: "10px" }}>
                                    <Grid item xs={2} sx={{ fontWeight: "bold" }}>
                                        {courseData.code}
                                    </Grid>
                                    <Grid item xs={8} sx={{ fontWeight: "bold" }}>
                                        {courseData.title.en}
                                    </Grid>
                                    <Grid item xs={2} sx={{ textAlign: "end" }}>
                                        {courseData.credits} {courseData.creditUnitAbbr}
                                    </Grid>
                                </Grid>
                                <Grid container item sx={{ paddingBottom: "10px" }}>
                                    <Grid item xs={4}>
                                        Level: {courseData.level.en}
                                    </Grid>
                                    <Grid item xs={8} sx={{ textAlign: "end" }}>
                                        Department: {courseData.department.name.en}
                                    </Grid>
                                </Grid>
                                <Grid container item sx={{ paddingBottom: "10px" }}>
                                    <Grid item xs={12} sx={{ textAlign: "justify" }}>
                                        {new DOMParser().parseFromString(courseData.info.en, "text/html").documentElement.textContent}
                                    </Grid>
                                </Grid>
                                <Grid container item>
                                    <Grid item xs={12} sx={{ textAlign: "end" }}>
                                    <Button target="_blank" href={courseData.href.en}>More On KTH Website</Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12} md={12} lg={6}>
                <Grid item xs={12} sx={{ paddingBottom: "10px", textAlign: "center" }}>
                    <h2>Students Comments ({comments.length})</h2>
                </Grid>
                <Stack direction="column" spacing={2} width={"100%"}>
                    {comments.map(commentCB)}
                </Stack>
            </Grid>
        </Grid>
    );

}