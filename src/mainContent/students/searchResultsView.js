import { Button, Card, CardActions, CardContent, Grid } from "@mui/material"
import { Link } from "react-router-dom"

export default function StudentsResultsView(props) {
    function studentCB(student) {
        function studentClickedACB() {
            props.studentClicked(student.userId)
        }

        return (
            <Grid item xs={12} md={12} lg={6} key={student.userId}>
                <Card
                    variant="outlined"
                    sx={{
                        backgroundColor: "grey.100",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CardContent>
                        <Grid container>
                            <Grid item xs={8}>
                                <span style={{ fontWeight: "bold" }}>
                                    {student.data.forname}{" "}
                                    {student.data.lastname}
                                </span>{" "}
                                ({student.data.nationality})
                            </Grid>
                            <Grid item xs={4} sx={{ textAlign: "end" }}>
                                {student.data.year}
                            </Grid>
                            <Grid item xs={6}>
                                {student.data.university}
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: "end" }}>
                                {student.data.department}
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ marginTop: "auto" }}>
                        <Grid container>
                            <Grid item xs={12} sx={{ textAlign: "end" }}>
                                <Button
                                    onClick={studentClickedACB}
                                    to={`${student.userId}`}
                                    component={Link}
                                >
                                    Visit Profile
                                </Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
        )
    }

    return (
        <Grid container spacing={2} padding="20px 0">
            {props.students.map(studentCB)}
        </Grid>
    )
}
