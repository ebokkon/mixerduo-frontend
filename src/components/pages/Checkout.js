import React from "react";
import AddressForm from "./checkoutunits/AddressForm";
import OrderList from "./checkoutunits/OrderList";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {Link as RouterLink} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        }
        },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        }
    }
    }));

export default function Checkout () {

    const classes = useStyles();

    return (
        <div className={classes.layout}>
        <Paper className={classes.paper}>
            <OrderList/>
        </Paper>
        <Paper className={classes.paper}>
        <React.Fragment>
            <AddressForm/>
        </React.Fragment>
        </Paper>
        <Paper className={classes.paper}>
            <Button variant="outlined" color="primary" component={RouterLink} to="/shoppingcart">Return to Cart</Button>
            <Button variant="outlined" color="primary" className={`proceed`}>Proceed to Payment</Button>
        </Paper>
        </div>
    );
}