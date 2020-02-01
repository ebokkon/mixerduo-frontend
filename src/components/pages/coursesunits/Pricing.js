import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    cardPricing: {
        display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            marginBottom: theme.spacing(2)
    }
}));


export default function Pricing(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
        <div className={classes.cardPricing}>
            <Typography component="h2" variant="h3" color="textPrimary">
                ${props.tier.price}
            </Typography>
        </div>
        <ul>
        {props.tier.description.map(line => (
                <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                    key={line}
                >
                    {line}
                </Typography>
            ))}
        </ul>
        </React.Fragment>
    )
}