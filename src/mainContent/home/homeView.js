import React from "react"
import { Grid, Typography, Button, Box } from "@mui/material"
import exchangestudent from "../../images/exchangestudent.jpeg"
import styles from "../../MUI/styles/styles"
import { Link } from "react-router-dom"

export default function HomeView() {
    return (
        <Grid container sx={styles.gridContainer}>
            <Grid item xs={12} md={7} p={4}>
                <Typography variant="h3" fontWeight={700} sx={styles.title}>
                    Everything you need to study at KTH
                </Typography>
                <Typography variant="h6" sx={styles.subtitle}>
                    Find information about the courses, accomodation, and
                    lifestyle about KTH and Stockholm written by other students.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: "200px", fontSize: "16px" }}
                    component={Link}
                    to={"/students"}
                >
                    Browse students
                </Button>
            </Grid>
            <Grid item xs={12} md={5}>
                <Box
                    component="img"
                    src={exchangestudent}
                    alt="My Team"
                    sx={styles.largeImage}
                />
            </Grid>
        </Grid>
    )
}
