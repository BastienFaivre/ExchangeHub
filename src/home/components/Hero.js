import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import exchangestudent from '../../images/exchangestudent.jpeg';
import useStyles from '../../styles/styles';

const Hero = () => {
    const classes = useStyles();

    return (
        <Box className={classes.heroBox}>
            <Grid container spacing={6} className={classes.gridContainer}>
                <Grid item xs={12} md={7}>
                    <Typography variant="h3" fontWeight={700} className={classes.title}>
                        Everything you need to go on exchange
                    </Typography>
                    <Typography variant="h6" className={classes.subtitle}>
                        Find information about the courses, accomodation, and lifestyle 
                        about you hosting school written by other students.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ width: '200px', fontSize: '16px' }}
                    >
                        FIND YOU SCHOOL
                    </Button>
                </Grid>
                <Grid item xs={12} md={5}>
                    <img src={exchangestudent} alt="My Team" className={classes.largeImage} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Hero;