import { Button, Card, CardActions, CardContent, Grid } from "@mui/material"
import { Link } from "react-router-dom"

export default function StudentsResultsView(props) {
    function studentCB(student) {
        function studentClickedACB() {
            props.studentClicked(student.userId)
        }

        return (
            <Grid
                item
                xs={12}
                md={12}
                lg={6}
                key={student.userId}
            >
                <Card variant="outlined" sx={{ backgroundColor: "grey.100" }}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={8}>
                                <span style={{ fontWeight: "bold" }}>
                                    {student.data.info.forname}{" "}
                                    {student.data.info.lastname}
                                </span>{" "}
                                ({student.data.info.nationality})
                            </Grid>
                            <Grid item xs={4} sx={{ textAlign: "end" }}>
                                {student.data.info.year}
                            </Grid>
                            <Grid item xs={6}>
                                {student.data.info.university}
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: "end" }}>
                                {student.data.info.department}
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button
                            onClick={studentClickedACB}
                            to={`${student.userId}`}
                            component={Link}
                        >
                            Visit Profile
                        </Button>
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
