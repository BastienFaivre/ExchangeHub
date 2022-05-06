import React from "react"
import { Grid, Typography, Button, Box } from "@mui/material"
import exchangestudent from "../../../images/exchangestudent.jpeg"
import styles from "../../../MUI/styles/styles"

const Hero = () => {
    return (
        <Grid container sx={styles.gridContainer}>
            <Grid item xs={12} md={7} p={4}>
                <Typography variant="h3" fontWeight={700} sx={styles.title}>
                    Everything you need to go on exchange
                </Typography>
                <Typography variant="h6" sx={styles.subtitle}>
                    Find information about the courses, accomodation, and
                    lifestyle about you hosting school written by other
                    students.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: "200px", fontSize: "16px" }}
                >
                    FIND YOUR SCHOOL
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

export default Hero
