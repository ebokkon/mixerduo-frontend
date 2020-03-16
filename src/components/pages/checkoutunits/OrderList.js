import React, {useContext, useEffect} from "react";
import {ShoppingCartContext} from "../../../context/ShoppingCartContext";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import axios from "axios";


const useStyles = makeStyles(theme => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: '700',
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function OrderList () {

    const { cart, setCart } = useContext(ShoppingCartContext);

    useEffect(()=>{
        axios.get(`http://localhost:8080/get-cart`)
            .then(response => setCart(response.data));
    });

    const classes = useStyles();

    const quantityCalculation = courseTitle => {
        switch (courseTitle) {
            case "Advanced":
                return 50;
            case "Beginners":
                return 30;
            case "Pro":
                return 80;
            default:
                return 1;
        }
    };

    const calculateTotal = () => {
        let total = 0;
        Object.keys(cart).map(function(key){
            total += cart[key] * quantityCalculation(key)
        });
        return total;
    };

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {Object.keys(cart).map(function(key) {
                    return (
                        <ListItem className={classes.listItem}>
                            <ListItemText primary={cart[key] + " " + key + " Course"}/>
                            <Typography variant="body2">{cart[key] *
                                    quantityCalculation(key)}$</Typography>
                        </ListItem>
                        )
                })}
            <ListItem className={classes.listItem}>
                <ListItemText primary="Total"/>
                <Typography variant="subtitle1" className={classes.total}>
                    {calculateTotal()}$
                </Typography>
            </ListItem>
            </List>
        </div>
    );
}