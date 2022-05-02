import { Button, Card, CardActions, CardContent, Grid } from "@mui/material"

export default function StudentsResultsView(props) {
    function studentCB(student) {
        return (
            <Grid item xs={12} md={12} lg={6} key={student.info.name}>
                <Card variant="outlined" sx={{ backgroundColor: "grey.100" }}>
                    <CardContent>
                        <Grid container>
                            <Grid container item>
                                <Grid item xs={6}>
                                    <span style={{ fontWeight: "bold" }}>
                                        {student.info.name}
                                    </span>{" "}
                                    ({student.info.nationality})
                                </Grid>
                                <Grid item xs={6} sx={{ textAlign: "end" }}>
                                    {student.info.department},{" "}
                                    {student.info.year}
                                </Grid>
                            </Grid>
                            <Grid container item>
                                <Grid item xs={6}></Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button>Visit Profile</Button>
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
