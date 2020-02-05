import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6)
    }
}));

export default function CoursesPageHeader() {
    const classes = useStyles();
    return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
        >
            Pricing
        </Typography>
        <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
        >
            Boost your bartending knowledge and get inspired by our Mixology
            Course
        </Typography>
    </Container>
)
}