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
                key={student.data.info.forname + student.data.info.lastname}
            >
                <Card variant="outlined" sx={{ backgroundColor: "grey.100" }}>
                    <CardContent>
                        <Grid container>
                            <Grid container item>
                                <Grid item xs={6}>
                                    <span style={{ fontWeight: "bold" }}>
                                        {student.data.info.forname}{" "}
                                        {student.data.info.lastname}
                                    </span>{" "}
                                    ({student.data.info.nationality})
                                </Grid>
                                <Grid item xs={6} sx={{ textAlign: "end" }}>
                                    {student.data.info.department},{" "}
                                    {student.data.info.year}
                                </Grid>
                            </Grid>
                            <Grid container item>
                                <Grid item xs={6}></Grid>
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
